import Contact from './Contact'
import {useRef, useState, useEffect} from 'react'

const URL='http://laozi.in:8000/contacts'

function App(){

    const name_ref=useRef()
    const ph_ref=useRef()
    const mail_ref=useRef()

    const [contact, setContact]=useState([])

    async function getData(){
        const response=await fetch(URL)
        const data=await response.json()
        setContact(data)
    }

    useEffect(()=>getData(), [])
    useEffect(()=>console.log(contact), [contact])

    async function postData(data = {}) {
        await fetch(URL, {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data) 
        });
        getData()
    }
           
    function addHandler(){
        const name=name_ref.current.value
        const phone=ph_ref.current.value
        const mail=mail_ref.current.value
        postData({name:name, phone:phone, email:mail})
        name_ref.current.value=''
        ph_ref.current.value=''
        mail_ref.current.value=''
    }

    return (
        <>
            <label htmlFor='name'>Name : </label>
            <input ref={name_ref} name='name' type='text'/>
            <label htmlFor='phone'>Phone Number : </label>
            <input ref={ph_ref} name='phone' type='text'/>
            <label htmlFor='mail'>Email :  </label>
            <input ref={mail_ref} name='mail' type='text'/>
            <button onClick={addHandler}>Add</button>
            <Contact contact={contact} getData={getData}/>
        </>
    )
}

export default App