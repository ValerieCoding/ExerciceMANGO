const Item = ({item}) => {
    
    return (
        <div className='item'>
            <h3>
               {item.title}
            </h3>
            <p>
                {item.description}
            </p>
        </div>
    )
}

export default Item
