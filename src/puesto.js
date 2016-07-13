import React, { Component, PropTypes } from 'react'

class Puesto extends Component {
  constructor (props) {
    if (typeof props.puesto.nombre !== 'string' || typeof props.puesto.ocupado !== 'boolean') {
      throw 'Puesto debe tener nombre ("string") y ocupado ("boolean")'
    }
    super(props)
  }
  render () {
    return (
      <h1>Hola mundo</h1>
    )
  }
}

Puesto.propTypes = {
  puesto: PropTypes.shape({
    nombre: PropTypes.string,
    ocupado: PropTypes.bool
  }).isRequired
}

export default Puesto
