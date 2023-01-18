import CardList from "../CardList/CardList";
import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Нямушка",
      title: "Сказочное заморское яство",
      selectedTitle: "Котэ не одобряет?",
      stuffing: "с фуа-гра",
      gifts: {
        count: '',
        nameOne: "мышь в подарок",
      },
      portionCount: 10,
      weight: "0.5",
      description: "Печень утки разварная с артишоками.",
      isActive: false,
      isDefault: false,
      link: '#'
    },
    {
      id: 2,
      name: "Нямушка",
      title: "Сказочное заморское яство",
      selectedTitle: "Котэ не одобряет?",
      stuffing: "с рыбой",
      giftCount: 2,
      gifts: {
        count: 2,
        nameOne: "мыши в подарок",
      },
      portionCount: 40,
      weight: "2",
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      isActive: false,
      isDefault: false,
      link: '#'
    },
    {
      id: 3,
      name: "Нямушка",
      title: "Сказочное заморское яство",
      selectedTitle: "Котэ не одобряет?",
      stuffing: "с курой",
      gifts: {
        count: 5,
        nameOne: "мышей в подарок",
        nameTwo: "заказчик доволен",
      },
      portionCount: 100,
      weight: "5",
      description: "Филе из цыплят с трюфелями в бульоне.",
      isActive: false,
      isDefault: false,
      link: '#'
    },
  ]);

  return (
    <div className="app">
        <div className="app__wrap">
          <h1 className="app__title">Ты сегодня покормил кота?</h1>
          <CardList productList={productList} />
        </div>
    </div>
  );
}

export default App;
