import React, { useState, useEffect } from 'react';

const Ejercicio2 = () => {
    const Data =
        {
            fecha: new Date(),
            edad: 0,
            nombre: 'Martín',
            apellidos: 'San José'
        }

    const [data, setData] = useState(Data);

    useEffect(() => {
        const intervalID = setInterval(() => {
            tick();
        }, 1000)

        return(() => {
            clearInterval(intervalID)
        })
    }, [])

    return(
        <div>
            <h2>
                Hora Actual:
                {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    )

    function tick(){
        setData((prevState) => {
            let edad = prevState.edad + 1;
            return{
                ...prevState,
                fecha: new Date(),
                edad
            }
        })
    }
}

export default Ejercicio2;