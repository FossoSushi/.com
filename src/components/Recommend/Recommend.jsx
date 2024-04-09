import HeroImg from '../../assets/img/Hero.jpg';
import css from './styles.module.scss';
import { Majesticons } from '../../assets/svgComponents/Majesticons';
import { useNavigate } from 'react-router-dom';

const Recommend = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <section className={css.RECOMMEND}>
            <h2 className={css.title}>WE RECOMMEND</h2>
            <ul className={css.RECOMMENDList}>
            {[1, 2, 3].map(a => 
                <li key={a} className={css.item}>
                <img src={HeroImg} alt="" width={300} height={300} />
                <div className={css.contentBox}>
                <div className={css.praysBox}>
                    <span className={css.name}>Sets Philadelphia</span>
                    <span className={css.prays}>80$</span>
                </div>
                <div className={css.byBox}>
                    <span>(California, Bonito, Kioto....)</span><Majesticons fill='#000' />
                </div>
                </div>
                </li>
            )}
            </ul>
            <button onClick={() => handleNavigation('/menu')} className={css.btn}>VIEW THE MENU</button>
            <h3 className={css.titleBot}>Dishes that we create with love!</h3>
        </section>
    );
};

export default Recommend;
