import { v4 as uuidv4 } from 'uuid';
import Bonito from './assets/img/Bonito.jpg';
import California from './assets/img/California.jpg';
import CocaCola from './assets/img/Coca-Cola.jpg';
import FutomakiSalmon from './assets/img/FutomakiSalmon.jpg';
import GoldDragon from './assets/img/GoldDragon.jpg';
import GreenDragon from './assets/img/GreenDragon.jpg';
import HotSalmon from './assets/img/HotSalmon.jpg';
import Makiavocado from './assets/img/Makiavocado.jpg';
import Makicucumber from './assets/img/Makicucumber.jpg';
import Makimango from './assets/img/Makimango.jpg';
import Makisalmon from './assets/img/Makisalmon.jpg';
import Mango from './assets/img/Mango.png';
import OrangeJuice from './assets/img/OrangeJuice.jpg';
import PhiladelphiaS from './assets/img/PhiladelphiaS.jpg';
import Samurai from './assets/img/Samurai.jpg';
import SmellPh from './assets/img/SmellPh.jpg';
import Smoked from './assets/img/Smoked.jpg';
import Sprite from './assets/img/Sprite.jpg';
import Sushi from './assets/img/Sushi.jpg';
import TempuraELL from './assets/img/Tempura ELL.jpg';
import TempuraSalmon from './assets/img/Tempura Salmon.jpg';
import TempuraShrimpSalmon from './assets/img/Tempura Shrimp-Salmon.jpg';
import TempuraShrimp from './assets/img/Tempura Shrimp.jpg';
import Tiger from './assets/img/Tiger.jpg';
import Tuna from './assets/img/Tuna.jpg';

const generateUniqueId = () => {
    return uuidv4();
};
export const ArrSocial = {
  facebook: 'https://www.facebook.com/profile.php?id=61556543102887&mibextid=uzlsIk',
  instagram: 'https://www.instagram.com/fosso.sushi.studio?igsh=d2J1dnZoN2JoYnEx',
  tiktok: 'https://www.tiktok.com/@fosso.sushi.restaurant?_t=8lRN9jihYrW&_r=1',
}
  


export const ArrSETS = [
    {
      id: generateUniqueId(),
      name: 'SETS ‘Phila’',
      price: '72',
      description: 'Philadephia Classic, Philadephia Smell, Philadephia Mango, Philadephia Smoked (32pcs.)',
    },
    {
      id: generateUniqueId(),
      name: 'SETS ‘I end Y’',
      price: '76',
      description: 'Philadephia Smell, Philadephia Mango, Gold Dragon, Samurai (32pcs.)',
    },
    {
      id: generateUniqueId(),
      name: 'SETS ‘Family’',
      price: '100',
      description: 'Philadephia Classic, California, Green Dragon, Maki salmon, Maki mango, Hot Salmon, Tempura Shrimp',
    },
    {
      id: generateUniqueId(),
      name: 'SETS ‘Friends’',
      price: '145',
      description: 'Philadephia Classic, Philadephia Smoked, Gold Dragon, Tiger, Tuna, Yoco, Maki ell, Tempura Salmon, Tempura Srimp',
    },
    {
      id: generateUniqueId(),
      name: 'SETS ‘Heat’',
      price: '76',
      description: 'Philadephia Smell, Philadephia Mango, Gold Dragon, Samurai (32pcs.)',
    },
  ]
export const ArrSushi = [
    {
      id: generateUniqueId(),
      name: 'Philadephia Classic',
      price: '18',
      description: 'Rice, nori, Philadelphia cheese, cucumber, salmon. (8pcs.)',
      img: PhiladelphiaS
    },
    {
      id: generateUniqueId(),
      name: 'Philadephia Smell',
      price: '19',
      description: 'Rice, nori, Philadelphia cheese, cucumber, salmon burned. (8pcs.)',
      img: SmellPh
    },
    {
      id: generateUniqueId(),
      name: 'Philadephia Mango',
      price: '18',
      description: 'Rice, nori, Philadelphia cheese, mango, salmon. (8pcs)',
      img: Mango
    },
    {
      id: generateUniqueId(),
      name: 'Philadephia Smoked',
      price: '18',
      description: 'Rice, nori, Philadelphia cheese, mango, salmon. (8pcs)',
      img: Smoked
    },
    {
      id: generateUniqueId(),
      name: 'Gold Dragon',
      price: '19',
      description: 'Rice, nori, Philadelphia cheese, cucumber, shrimp, unagi sauce, tobiko caviar. (8pcs)',
      img: GoldDragon
    },
    {
      id: generateUniqueId(),
      name: 'Samurai',
      price: '19',
      description: 'Rice, nori, Philadelphia cheese, ell, avocado, cucumber, unagi sauce. (8pcs)',
      img: Samurai
    },
    {
      id: generateUniqueId(),
      name: 'Tiger',
      price: '18',
      description: 'Rice, nori, Philadelphia cheese, shrimp, cucumber, tobico, spicy sauce. (8pcs)',
      img: Tiger
    },
    {
      id: generateUniqueId(),
      name: 'Tuna',
      price: '19',
      description: 'Rice, nori, Philadelphia cheese, tuna, avocado, cucumber. (8pcs)',
      img: Tuna
    },
    {
      id: generateUniqueId(),
      name: 'California',
      price: '19',
      description: 'Rice, nori, Philadelphia cheese, crab, cucumber, tobiko.(8psc)',
      img: California
    },
    {
      id: generateUniqueId(),
      name: 'Tokyo',
      price: '19',
      description: 'Rice, nori, tempura shrimp, cheese, mango, mango-chill sauce, sesame.(8pcs)',
    },
    {
      id: generateUniqueId(),
      name: 'Yoco',
      price: '17',
      description: 'Rice, nori, avocado, smoke salmon, cucumber, sesame.(8pcs)',
    },
    {
      id: generateUniqueId(),
      name: 'California Vegan',
      price: '15',
      description: 'Rice, nori, avocado, cucumber, sesame.(8pcs)',
    },
     {
      id: generateUniqueId(),
      name: 'Green Dragon',
      price: '15',
      description: 'Rice, nori, avocado, tempura shrimp, Philadelphia cheese, tobiko.(8pcs)',
      img: GreenDragon
    },
    {
      id: generateUniqueId(),
      name: 'Kyoto',
      price: '15',
      description: 'Rice, nori, avocado, canned tuna, tuna flakes, cheese.(8pcs)',
    },
    {
      id: generateUniqueId(),
      name: 'Bonito',
      price: '17',
      description: 'Rice, nori, cucumber, tempura salmon, sesame, cheese, souse mango and unagi.(8pcs)',
      img: Bonito
    },
    {
      id: generateUniqueId(),
      name: 'Futomaki Salmon',
      price: '18',
      description: 'Rice, nori, cucumber, tempura salmon, sesame, mango, avocado, lettuce. (8pcs)',
      img: FutomakiSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Futomaki Shrimp',
      price: '18',
      description: 'Rice, nori, cucumber, tempura shrimp, avocado, lettuce, crab.(8pcs)',
    },
    {
      id: generateUniqueId(),
      name: 'Maki salmon',
      price: '7',
      description: 'Rice, nori, salmon.(6pcs)',
      img: Makisalmon
    },
    {
      id: generateUniqueId(),
      name: 'Maki avocado',
      price: '6',
      description: 'Rice, nori, avocado.(6pcs)',
      img: Makiavocado
    },
    {
      id: generateUniqueId(),
      name: 'Maki mango',
      price: '6',
      description: 'Rice, nori, mango.(6pcs)',
      img: Makimango
    },
    {
      id: generateUniqueId(),
      name: 'Maki cucumber',
      price: '5',
      description: 'Rice, nori, cucumber.(6pcs)',
      img: Makicucumber
    },
  ]

export const ArrHOT_ROLLS = [
    {
      id: generateUniqueId(),
      name: 'Hot Salmon',
      price: '18',
      description: 'Rice, nori, cheese, cheese cap, sauce, sesame, salmon. (8pcs)',
      img: HotSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Hot Eel',
      price: '19',
      description: 'Rice, nori, cheese, cheese cap, sauce, sesame, ell, tuna shavings. (8pcs)',
      img: HotSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Hot Shrimp',
      price: '18',
      description: 'Rice, nori, cheese, cheese cap, sauce, shrimp.',
      img: HotSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Ceasar',
      price: '18',
      description: 'Rice, nori, cheese, cheese cap, sauce, chicken, mango, sesame, lettuce.(8pcs)',
      img: HotSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Hot Crab',
      price: '18',
      description: 'Rice, nori, cheese, cheese cap, sauce, crab.(8pcs)',
      img: HotSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Hot Crab-Shrimp',
      price: '20',
      description: 'Rice, nori, cheese, cheese cap, sauce, crab, shrimp.(8pcs)',
      img: HotSalmon
    },
  ]
export const ArrTEMPURA_ROLLS = [
    {
      id: generateUniqueId(),
      name: 'Tempura Salmon',
      price: '20',
      description: 'Rice, nori, cheese, salmon, avocado, tempura, souse unagi,souse shriracha. (8pcs)',
      img: TempuraSalmon
    },
    {
      id: generateUniqueId(),
      name: 'Tempura Shrimp',
      price: '20',
      description: 'Rice, nori, cheese, shrimp, avocado, tempura, souse unagi,souse shriracha. (8pcs)',
      img: TempuraShrimp
    },
    {
      id: generateUniqueId(),
      name: 'Tempura Tuna',
      price: '19',
      description: 'Rice, nori, cheese, tuna, avocado, tempura, souse shriracha. (8pcs)',
    },
    {
      id: generateUniqueId(),
      name: 'Tempura ELL',
      price: '20',
      description: 'Rice, nori, cheese, ell, avocado, tempura, souse unagi,souse shriracha. (8pcs)',
      img: TempuraELL
    },
    {
      id: generateUniqueId(),
      name: 'Tempura Cheese',
      price: '20',
      description: 'Rice, nori, cheese, tempura, pineapple, driep tomatoes , sauce mango .(8pcs)',
    },
    {
      id: generateUniqueId(),
      name: 'Tempura Shrimp-Salmon',
      price: '22',
      description: 'Rice, nori, cheese, salmon, shrimp, tempura, souse unagi,souse shriracha. (8pcs)',
      img: TempuraShrimpSalmon
    },
  ]
export const ArrDRINKS = [
    {
      id: generateUniqueId(),
      name: 'Coca-Cola',
      price: '2.80',
      description: '',
      img: CocaCola
    },
    {
      id: generateUniqueId(),
      name: 'Sprite',
      price: '2.80',
      description: '',
      img: Sprite
    },
    {
      id: generateUniqueId(),
      name: 'Orange Juice',
      price: '3',
      description: '',
      img: OrangeJuice
    },
]
  
export const ArrSUSHI_BURGER = []

export const ArrReccomended = [
  {
    id: generateUniqueId(),
    name: 'SETS ‘Family’',
    price: '100',
    description: 'Philadephia Classic, California, Green Dragon, Maki salmon, Maki mango, Hot Salmon, Tempura Shrimp (52pcs.)',
  },
  {
    id: generateUniqueId(),
    name: 'SETS ‘Heat’',
    price: '76',
    description: 'Philadephia Smell, Philadephia Mango, Gold Dragon, Samurai (32pcs.)',
  },
  {
    id: generateUniqueId(),
    name: 'SETS ‘Friends’',
    price: '145',
    description: 'Philadephia Classic, Philadephia Smoked, Gold Dragon, Tiger, Tuna, Yoco, Maki ell, Tempura Salmon, Tempura Srimp (70pcs.)',
  }
]