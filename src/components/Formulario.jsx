import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = (e) => {
        e.preventDefault()

        if(!nombre.trim() || isNaN(cantidad) || cantidad < 1 ){
            setError(true)
            return
        }
        setError(false)

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        setGasto(gasto)
        setCrearGasto(true)

        setNombre('')
        setCantidad(0)
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            <div className="campo">
                {
                    error && <Error mensaje="Ingrese un valor valido"/>
                }
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Cine"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 1500"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario
