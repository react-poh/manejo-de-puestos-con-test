import React from 'react'
import ReactDOM from 'react-dom'
import Puesto from './puesto'

const app = document.getElementById('react-app')
ReactDOM.render(<Puesto puesto={{ nombre: 'A14', ocupado: false }}/>, app)
