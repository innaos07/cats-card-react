import CardItem from '../CardItem/CardItem';

const CardList=(props)=> {
    const { productList } = props;
    
    return (
        <ul>
            {productList.map(card => {
                return (
                    <CardItem key={card.id} card={card}/>
                )
            })}
        </ul>
    )
}

export default CardList;