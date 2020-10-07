import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import API from '../../api/api-config'

const Home = (props) => {
    const [state, setState] = useState({ data: [] })

    const get = async () => {
        const data = await API('travels');
       setState({
            data
       })
    }

    useEffect(() => {
        get();
    }, []);


    const Travels = () => {
        const { data } = state;
       return(
           <table>
               <thead>
                    <tr>
                        <th>Direccion de partida</th>
                        <th>Direccion de termino</th>
                        <th>Medio de transporte</th>
                        <th>Cantidad de kilometros</th>
                        <th>Nombre de trabajadores</th>
                        <th>Es viaje redondo</th>
                        <th>Calculo CO2 [kgCO2/km]</th>
                    </tr>
               </thead>
               <tbody>
                   {
                        data.map((val,key) => {
                            return(
                                <tr key={ key }>
                                    <td>{ val.addressStart }</td>
                                    <td>{ val.addressEnd }</td>
                                    <td>{ val.transport }</td>
                                    <td>{ val.kilometers }</td>
                                    <td>
                                        <ul>
                                            {
                                                val.workers && Object.keys(val.workers).map((key, i) => {
                                                    return(
                                                        <li key={ i }>{ val.workers[key] }</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </td>
                                    <td>{ val.isRoundTrip ? 'SI' : 'NO'}</td>
                                    <td>{ val.calculoCO2}</td>
                                </tr>
                            );
                        })
                   }
               </tbody>
           </table>
       );
    }

    return(
        <div className="home-content">
            <div className="links">
                <div>Viajes registrados</div>
                <div><Link to="/nuevo-registro">Agregar nuevo</Link></div>
            </div>
            <Travels/>
        </div>
    );
}

export default Home;