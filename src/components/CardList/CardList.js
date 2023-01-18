import CardItem from "../CardItem/CardItem";
import './CardList.scss';

const CardList = (props) => {
  const { productList } = props;

  return (
    <ul className="card__list">
      {productList.map((card) => {
        return <CardItem key={card.id} card={card} />;
      })}
    </ul>
  );
};

export default CardList;
