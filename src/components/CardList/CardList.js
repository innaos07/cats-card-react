import CardItem from "../CardItem/CardItem";
import './CardList.scss';

const CardList = (props) => {
  const { productList, toggleIsActive } = props;

  return (
    <ul className="card__list">
      {productList.map((card) => {
        return <CardItem 
                        key={card.id} 
                        card={card} 
                        toggleIsActive={toggleIsActive} />;
      })}
    </ul>
  );
};

export default CardList;
