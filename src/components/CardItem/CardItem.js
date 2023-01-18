import "./CardItem.scss";

const CardItem = (props) => {
  const { card } = props;

  return (
 
    <li className="card__item item-card">
      <div className="item-card__wrap">
        <p className="item-card__sub-title">{card.title}</p>
        <h2 className="item-card__title">{card.name}</h2>
        <p className="item-card__stuffing">{card.stuffing}</p>
        <div className="item-card__info">
          <span className="item-card__count">{card.portionCount}</span> порций
        </div>
        <div className="item-card__info">
         <span className="item-card__count">{card.gifts.count}</span> <span>{card.gifts.nameOne}</span>
         <span className="item-card__gift item-card__gift--two">{card.gifts.nameTwo}</span>
        </div>

        <div className="item-card__weight">
          <span className="item-card__value">{card.weight}</span>  
          <span className="item-card__kg">кг</span>
        </div>
      </div>

      <div className="item-card__description">
        Чего сидишь? Порадуй котэ, <a href={card.link} className="item-card__link">купи.</a>
      </div>
    </li>
  
  );
};

export default CardItem;
