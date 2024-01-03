import React from 'react';
//spinner de carga o espacio solo estetico
const Spinner = () => {

    return(
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;