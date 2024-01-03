import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';
//Funcion o componente que realiza las operaciones logicas or medio de estados
const WeatherPanel = () => {
    //declaracion de variables
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=b4468520c3ed59c63cebc202fcd707b7&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=b4468520c3ed59c63cebc202fcd707b7&lang=es"
    //declaracion de estados
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //url que se pasara
        urlWeather = urlWeather + cityUrl + loc;
        //busqueda del clima actual por medio de estados
        //el fetch es el het que posteriormente se convierte a response.json
        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            alert("Ciudad no encontrada o datos invalidos");
            setLoading(false);
            setShow(false);
        });

        //url que se pasara
        urlForecast = urlForecast + cityUrl + loc;
        //busqueda del pronostico del clima para horas posteriores
        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });      
    }
    //el componente regresa el formulario y la card donde se mostraran dichos datos
    return(
        <React.Fragment>
            <Form
                newLocation = {getLocation}
            />
            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {forecast}
            />
        </React.Fragment>
    );
}

export default WeatherPanel;
