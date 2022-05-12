const productsBtn = document.querySelectorAll('.corzina-btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = cart.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength > 0 ? cart.classList.add('actives') : cart.classList.remove('actives');
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const generateCartProduct = (img, title, price, id) => {
    // <li class="cart-content__item">
	// 		<article class="cart-content__product cart-product" data-id="${id}">
	// 			<img src="${img}" alt="" class="cart-product__img">
	// 			<div class="cart-product__text">
	// 				<h3 class="cart-product__title">${title}</h3>
	// 				<span class="cart-product__price">${normalPrice(price)}</span>
	// 			</div>
	// 			<button class="cart-product__delete" aria-label="Удалить товар"></button>
	// 		</article>
	// 	</li>
	return `
		<li class="sety__item">
            <article class="cart-content__product cart-product">
                <img src="${img}" alt="" width="130">
                <div class="sety__box">
                    <h2 class="sety-item__title">${title}</h2>
                    <span class="cart-product__price">${normalPrice(price)}</span>
                    </div>
                        <button class="cart-product__delete" aria-label="Удалить товар">df</button>
                    </div>
                </div>
            </article>
        </li>
	`;
};
const deleteProducts = (productParent) => {
	let id = productParent.querySelector('.cart-product').dataset.id;
	document.querySelector(`.product[data-id="${id}"]`).querySelector('.corzina-btn').disabled = false;
	
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();
};

productsBtn.forEach(el => {
	el.closest('.product').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.product');
		let id = parent.dataset.id;
		let img = parent.querySelector('.image-switch__img img').getAttribute('src');
		let title = parent.querySelector('.sety-item__title').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.cart-product__price').textContent);
		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.cart-product__price').textContent));

		plusFullPrice(priceNumber);

		printFullPrice();

		cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();

		
		self.disabled = true;
	});
});

cartProductsList.addEventListener('click', (e) => {
	if (e.target.classList.contains('cart-product__delete')) {
		deleteProducts(e.target.closest('.sety__item'));
	}
});