import React, { useState, useEffect } from 'react';
import API from '../../api/api-config';


const AddTravel = (props) => {
    const [state, setState] = useState({
        addressStart: '',
        addressEnd: '',
        transport: '',
        kilometers: 0,
        numWorkers: 1,
        isRoundTrip: false

    });
    const [workersName, setWorkersName] = useState({});
    const [workers, setWorker] = useState(1);
    const [transport, setTransport] = useState({
        transport: '',
        factorCO2: '',
    })

    const handleChange = (e) => {
        const  { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleWorkers = (e) => {
        if (parseInt(e.target.value) >= 1) {
            setWorker(parseInt(e.target.value));
        }
    }

    const handleWorkersName = (e) => {
        const  { name, value } = e.target;
        setWorkersName(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    const handleTransport = (e) => {
        const  { options, selectedIndex, value } = e.target;
        const option = options[selectedIndex];

        setTransport({
            transport: value,
            factorCO2: option.dataset.value

        })
    }

    const calculoCO2 = (parseFloat(transport.factorCO2) * parseInt(state.kilometers) * ((state.isRoundTrip === 'true' ? 1 : 0) + 1));

    const onSubmit = async (e) => {
        e.preventDefault();
        const values = Object.assign(state,
            { workers: workersName },
            transport,
            {
                calculoCO2,
            }
        )
        const create = await API('travels','','POST', {...values});

        if (create) {
            if (confirm('Registro agregado: ¿ Regresar a la Lista ?  ')) {
                window.history.back();
            } else {
                window.location.reload();
            }
        }


    }
    return(
        <div className="form-content">
            <form action="#" onSubmit={onSubmit}>
                <div className="form-elements">
                    <label htmlFor="addressStart">Dirección de partido</label>
                    <input type="text" name="addressStart" id="addressStart" placeholder="Avenida Ricardo Lyon 1060, Providencia" onChange={handleChange} required/>
                </div>
                <div className="form-elements">
                    <label htmlFor="addressEnd">Dirección de destino</label>
                    <input type="text" name="addressEnd" id="addressEnd"  placeholder="La niña 3175, Los condes" onChange={handleChange} required/>
                </div>
                <div className="form-elements">
                    <label htmlFor="transport">Medio de transporte</label>
                    {/*<input type="text" name="transport" id="transport"  onChange={handleChange} required/>*/}
                    <select name="transport" id="transport" onChange={handleTransport}  required>
                        <option value="0">Seleccione una opción</option>
                        <option data-value="0.21" value="Auto">Auto (Gasolina)</option>
                        <option data-value="0.033" value="Metro (Tren, Subway, Subterráneo)">Metro (Tren, Subway, Subterráneo)</option>
                        <option data-value="0.249" value="Camioneta">Camioneta</option>
                        <option data-value="0.092" value="Motocicleta">Motocicleta (Gasolina)</option>
                        <option data-value="0.039" value="Bus Transantiago">Bus Transantiago (Transporte público)</option>
                        <option data-value="0.012" value="Bus (Vehículo privado)">Bus (Vehículo privado)</option>
                        <option data-value="0.279" value="Avión (Chile)">Avión (Chile)</option>
                        <option data-value="0.179" value="Avión (Internacional)">Avión (Internacional)</option>
                        <option data-value="0" value="Caminando">Caminando</option>

                        {
                            /*
                            *  <option value="0">Seleccione una opción</option>
                        <option data-value="0.21" value={{ type: 'Auto', CFE: '0.21'}}>Auto</option>
                        <option data-value="0.092" value={{type: 'Moto', CFE: '0.092'}}>Moto</option>
                        <option data-value="0.279" value={{type: 'Avión', CFE: '0.279'}}>Avión</option>
                            * */
                        }
                    </select>
                </div>
                <div className="form-elements">
                    <label htmlFor="kilometers">Cantidad de kilometros</label>
                    <input type="number" name="kilometers" id="kilometers"  placeholder="0" onChange={handleChange} required/>
                </div>
                <div className="form-elements">
                    <label htmlFor="numWorkers">Numero de trabajadores en el viaje</label>
                    <input type="number" name="numWorkers" id="numWorkers"  defaultValue={ state.numWorkers } onChange={handleWorkers}/>
                </div>

                <div  className="form-elements">
                    <label htmlFor="numWorkersName">Nombre de trabajadores en el viaje</label>
                    {
                        [...Array(workers).keys()].length > 0 && [...Array(workers).keys()].map((val, key)=>{
                            return(
                                <>
                                <input type="text" key={key}
                                        placeholder={`Pasajero ${key+1}`}
                                       name={`workername_${key+1}`}
                                       id={`workername_${key+1}`}
                                       onChange={handleWorkersName}/><br/></>
                            )
                        })
                    }
                </div>

                <div className="form-elements">
                    <label htmlFor="">
                        ¿ Es viaje redondo ?
                    </label>
                    {/*<button className="isRoundTrip">Si</button>*/}
                    <div className="form-option">
                        <div className="option">
                            <label htmlFor="isRoundTrip_0">Si</label>
                            <input type="radio" value={ true } name="isRoundTrip" id="isRoundTrip_0"  onChange={handleChange} required/>
                        </div>
                        <div className="option">
                            <label htmlFor="isRoundTrip_1">No</label>
                            <input type="radio" value={ false } name="isRoundTrip" id="isRoundTrip_1"  onChange={handleChange} required/>
                        </div>
                    </div>
                </div>
                <div className="form-elements">
                    <label htmlFor="factorCO2">Calculo Factor Emision C02</label>
                    <input type="text" id="factorCO2" name="factorCO2" value={calculoCO2 ? `${calculoCO2} Kg CO2` : 0} disabled/>
                </div>
                <button>Registrar</button>
            </form>
        </div>
    );
}
export default AddTravel;