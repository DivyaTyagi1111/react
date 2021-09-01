import {Link} from 'react-router-dom'
import {useEffect} from 'react'

function List({item, deleteHandler, detailHandler}){

    return (
        <div className='contact-div'>
            <li className='contact'>
                <Link to={`/${item.id}`} onClick={()=>detailHandler(item.id)}> {item.name} </Link>
            </li>
            <button onClick={()=>deleteHandler(item.id)}>X</button>
        </div>
    )
}

export default List