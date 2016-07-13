jest.unmock('../src/puestos');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Puesto from '../src/puestos'

describe('Componente de puestos', function () {
  it('Recibe puestos que debe ser un array de puestos', function () {
    const puestoFactory = () => {
      TestUtils.renderIntoDocument(
        <Puestos/>
      );
    }

    expect(puestoFactory).toThrow()
  }) 

  it('Recibe puestos que debe ser un array de puestos', function () {
    const puestos = TestUtils.renderIntoDocument(
        <Puestos puestos={[{nombre: 'A14', ocupado: true }]}/>
      );
    const nodePuesto = ReactDOM.findDOMNode(puestos);

    expect(nodePuesto).not.toBeNull()

    expect(result.props.children).toEqual([    
      <Puesto puesto={{nombre: 'A14', ocupado: true}}/>
    ]);
  }) 
})
