function Button({className, onClick, ...others}){

    return (
        <button className={className} onClick={onClick} {...others}>
            {className==='checked'&&<i className='fas fa-check'/>}
            {className==='deleted'&&<i className='fas fa-trash'/>}
            {className==='todo-button'&&<i className='fas fa-plus-square'/>}
        </button>
    )
}

export default Button