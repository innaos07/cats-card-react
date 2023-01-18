import CardList from './CardList/CardList';
import { useState, useEffect } from 'react';


function App() {
   const [productList, setProductList] = useState([
    {
      id: 1,
      name: 'Нямушка',
      title: 'Сказочное заморское яство',
      selectedTitle: 'Котэ не одобряет?',
      stuffing: 'с фуа-гра',
      gifts: ['мышь в подарок'],
      portionCount: 10,
      weight: '0.5',
      description: 'Печень утки разварная с артишоками.',
      isActive: false,
      isDefault: false,  
    },
    {
      id: 2,
      name: 'Нямушка',
      title: 'Сказочное заморское яство',
      selectedTitle: 'Котэ не одобряет?',
      stuffing: 'с рыбой',
      gifts: ['2 мыши в подарок'],
      portionCount: 40,
      weight: '2',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      isActive: false,
      isDefault: false,  
    },
    {
      id: 3,
      name: 'Нямушка',
      title: 'Сказочное заморское яство',
      selectedTitle: 'Котэ не одобряет?',
      stuffing: 'с курой',
      gifts: ['5 мышей в подарок','заказчик доволен'],
      portionCount: 100,
      weight: '5',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      isActive: false,
      isDefault: false,  
    },
   ])



  return (
    <div className="App">
      <CardList productList={productList}/>
    </div>
  );
}

export default App;
