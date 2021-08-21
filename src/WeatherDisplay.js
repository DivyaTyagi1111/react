import {useState} from 'react'
import axios from 'axios';
import './WeatherDisplay.css'

function WeatherDisplay(){
    let [sunrise, setSunrise] = useState('')
    let [sunset, setSunset] = useState('')
    let [moonrise, setMoonrise] = useState('')
    let [moonset, setMoonset] = useState('')
    let [loader, setLoader] = useState(true)

    const dateHandler = (e) => {
        let api = 'http://api.weatherapi.com/v1/astronomy.json?key=cec4cad6bf2f4df6bc241617212108&q=INDIA&dt='
        api = api.concat(e.target.value)
        console.log(api)
        axios.get(api)
        .then(response => response.data.astronomy.astro)
        .then((data) => {
            setLoader(false)
            setSunrise(data.sunrise);
            setSunset(data.sunset);
            setMoonrise(data.moonrise);
            setMoonset(data.moonset);
    })
    setLoader(true);
    }

    if (loader === true){
        return (
            <>
            <h2>Weather Data</h2>
            <form>
                <label htmlFor="date">Choose Date: </label>
                <input type="date" id="date" name="date" onChange = {dateHandler}/>
            </form>
            <h4>Loading...</h4>
            </>
        )
    }

    return (
        <>
            <h2>Weather Data</h2>
            <form>
                <label htmlFor="date">Choose Date: </label>
                <input type="date" id="date" name="date" onChange = {dateHandler}/>
            </form>
            <br/>
            <div>
                <span className='rise'>SUNRISE : {sunrise}</span>
                <span>SUNSET : {sunset}</span>
            </div>
            <div>
                <span className='rise'>MOONRISE : {moonrise}</span>
                <span>MOONSET : {moonset}</span>
            </div>
        </>
    )
}

export default WeatherDisplay