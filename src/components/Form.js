import React, {useState} from 'react';
//el componente formulario de la barra de busqueda que establece la ciudad que se buscara el clima
const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city){
            alert("No ingrese campo vacio");
            return;
        }
        newLocation(city);
    }

    return(
        <div className="container2">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;