import React from 'react';
import Spinner from './Spinner';
import clima from '../assets/clima2.jpg'

//componente que muestra los datos retornados por el sistema
const Card = ({loadingData, showData, weather, forecast}) => {
    //establecimiento de variables
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";
    //muestra el spinner mientras se realiza el proceso de carga
    if(loadingData){
        return  <Spinner />;
    }
    //si hay informacion que mostrar se realiza lo siguiente
    //se establecen los iconos que proporciona openwheater con la url y el clima en cuestion
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">
            {
                //si existe data de la consulta se realiza lo siguiente
                showData === true ? (
                    <div className="container">
                        <div className="card">
                            <div className="general">
                            {/*Div general que muestra el clima de hoy*/}
                                <div className="col3">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h3 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h3>
                                    <img src={iconUrl} alt="icon" height={70} width={70}/>
                                    <p className="card-desc">{weather.weather[0].description}</p>
                                </div>
                                {/*Div que muestra datos mas especificos*/}
                                <div className="col1">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr/>
                                    <div className="col1">
                                        {/*Serie de divs que muestran el pronostico para horas futuras*/}
                                        <div className="col2">
                                            <p>{forecastDate3}h</p>
                                            <img src={iconUrl3} alt="icon"/>
                                            <p className="description">{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col2">
                                            <p>{forecastDate6}h</p>
                                            <img src={iconUrl6} alt="icon"/>
                                            <p className="description">{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col2">
                                            <p>{forecastDate9}h</p>
                                            <img src={iconUrl9} alt="icon"/>
                                            <p className="description">{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ):(
                    //en caso de no existir informacion o busqueda aun se muestra una imagen cualquiera
                    <img src={clima} className="img-fluid rounded-start" alt="..." width={600} height={400}/>
                )
            }
        </div>
    );
}

export default Card;