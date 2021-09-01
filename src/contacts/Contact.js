import './Contact.css'
import { useState } from 'react'
import List from './List'
import Detail from './Detail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Contact({ contact, getData, detail, setDetail }) {

    async function deleteHandler(id) {
        await fetch(`http://laozi.in:8000/contacts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        getData();
    }

    async function detailHandler(id) {
        const response = await fetch(`http://laozi.in:8000/contacts/${id}`)
        const data = await response.json()
        setDetail(data)
    }

    return (
        <Router>
            <Switch>
            <Route path='/' exact component={() => (
                (contact.map(item => (
                    <List key={item.id} item={item} deleteHandler={deleteHandler} detailHandler={detailHandler} />))))} />
            <Route path='/:id' component={({match})=>(<Detail detail={detail} match={match}/>)} />
            </Switch>
        </Router>
    )
}

export default Contact