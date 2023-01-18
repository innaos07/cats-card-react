const CardItem =(props)=> {
    const { card } = props;
    console.log(card)

    return (
        <li>
            <div>
                <p>{card.title}</p>
                <h2>{card.name}</h2>
                <p>{card.staffing}</p>
                <span>{card.portionCount} + 'порций'</span>
                { card.gifts.map(gift=>(<span>{gift}</span>)) }
                <span>{card.weight}</span>

            </div>
        </li>
    )
}

export default CardItem;