function List({item, detailHandler, deleteHandler}){
    return (
        <div className='contact-div'>
            <li className='contact' onClick={()=>detailHandler(item.id)}>{item.name}</li>
            <button onClick={()=>deleteHandler(item.id)}>X</button>
        </div>
    )
}

export default List