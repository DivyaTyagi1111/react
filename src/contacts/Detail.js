import {Link} from 'react-router-dom'
import {useEffect} from 'react'

function Detail({detail, match}){

    useEffect(()=>console.log(match), [match])

    return (
        <div>
            <div><b>Name : </b>{detail.name}</div>
            <div><b>Phone : </b>{detail.phone}</div>
            <div><b>Mail : </b>{detail.email}</div>
            <button><Link to='/'>Back</Link></button>
        </div>
    )
}

export default Detail