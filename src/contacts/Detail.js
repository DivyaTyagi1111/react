function Detail({detail, backHandler}){
    return (
        <div>
                <div><b>Name : </b>{detail.name}</div>
                <div><b>Phone : </b>{detail.phone}</div>
                <div><b>Mail : </b>{detail.email}</div>
                <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default Detail