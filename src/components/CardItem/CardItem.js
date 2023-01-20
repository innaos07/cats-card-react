import "./CardItem.scss";
import { useRef } from "react";

const CardItem = (props) => {
  const { card, toggleIsActive } = props;
  const moveElem = useRef(null);
  let isActiveID;

  const handlerToggle =(e)=> {
    e.preventDefault();
    return card.isDefault ? false : toggleIsActive(card.id);
  }

  const handlerMove =(move)=> {
    if(card.isActive) {
      moveElem.current.innerHTML = card.title;
      moveElem.current.style.color = '#666666';      

     return  move === 'mouseLeave'? 
     (moveElem.current.innerHTML = card.selectedTitle, moveElem.current.style.color = '#E62E7A') 
     : null;
    }
  }

  return (
    <li className={card.isDefault ? 'card__item item-card item-card--default' 
      : card.isActive ? 'card__item item-card card__item item-card--active' 
      : 'card__item item-card'}
    >
      <div className='item-card__wrap' 
        onClick={handlerToggle} 
        onMouseLeave={()=>handlerMove('mouseLeave')} 
        onMouseEnter={()=>handlerMove('mouseEnter')}
      >
        <span className="item-card__element"></span>
        <div className="item-card__content">
          <p className="item-card__sub-title" ref={moveElem}>{card.title}</p>
          <h2 className="item-card__title">{card.name}</h2>
          <p className="item-card__stuffing">{card.stuffing}</p>
          <div className="item-card__info">
            <span className="item-card__count">{card.portionCount}</span> порций
          </div>
          <div className="item-card__info">
            <span className="item-card__count">{card.gifts?.count}</span>{" "}
            <span>{card.gifts.nameOne}</span>
            <span className="item-card__gift item-card__gift--two">{card.gifts?.nameTwo}</span>
          </div>
        </div>
        <div className={card.isDefault ? 'item-card__weight item-card__weight--default' : 'item-card__weight'}>
            <span className="item-card__value">{card.weight}</span>
            <span className="item-card__kg">кг</span>
          </div>
          <div className="item-card__image">
            <img src={require(`../../images/${card.img}.png`)} alt={card.img}/>
          </div>
      </div>

    {card.isDefault ? (
     <p className="item-card__description">
      Печалька, {card.stuffing} закончился.
    </p>
    ) : card.isActive ? (
      <p className="item-card__description">{card.description}</p>
    ): ( 
      <p className="item-card__description">
        Чего сидишь? Порадуй котэ,{" "}
        <a href={card.link} className="item-card__link" onClick={handlerToggle}>
          купи.
        </a>
      </p>
    )}
    </li>
  );
};

export default CardItem;
