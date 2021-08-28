import './Contact.css'
import {useState} from 'react'
import List from './List'
import Detail from './Detail'

function Contact({contact, getData}){
    const[detail, setDetail]=useState({})
    const[view, setView]=useState('list')

    async function deleteHandler(id){
        await fetch(`http://laozi.in:8000/contacts/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        getData();
    }

    async function detailHandler(id){
        const response=await fetch(`http://laozi.in:8000/contacts/${id}`)
        const data=await response.json()
        setDetail(data)
        setView('detail')
    }

    return (
        <>
        {view==='list' && (contact.map(item=>(<List key={item.id} item={item} detailHandler={detailHandler} deleteHandler={deleteHandler}/>)))}
        {view==='detail' && <Detail detail={detail} backHandler={()=>setView('list')}/>}
        </>
    )
}

export default Contact