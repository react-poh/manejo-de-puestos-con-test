
jest.unmock('../src/puesto');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Puesto from '../src/puesto'

describe('Componente Puesto', () => {
  it('Un puesto necesita Nombre del puesto y estado del puesto', function() {
    const puestoFactory = () => {
      TestUtils.renderIntoDocument(
        <Puesto/>
      );
    }

    expect(puestoFactory).toThrow()
  })

  it('Un puesto necesita Nombre del puesto y estado del puesto', function() {
    const puestoFactory = () => {
      TestUtils.renderIntoDocument(
        <Puesto puesto={{cualquiervaina: ''}}/>
      );
    }

    expect(puestoFactory).toThrow()
  })

it('Un puesto necesita Nombre del puesto y estado del puesto', function() {
    const puestoFactory = () => {
      TestUtils.renderIntoDocument(
        <Puesto puesto={{ nombre: 123123, ocupado: false }}/>
      );
    }

    expect(puestoFactory).toThrow()
  })

  it('Un puesto necesita Nombre del puesto y estado del puesto', function() {
    const puestoFactory = () => {
      TestUtils.renderIntoDocument(
        <Puesto puesto={{ nombre: 'a14', ocupado: 'nojoda' }}/>
      );
    }

    expect(puestoFactory).toThrow()
  })

  it('Si puesto tiene nombre y estado debe crear el componente', function () {
    const puesto = TestUtils.renderIntoDocument(
      <Puesto puesto={{ nombre: 'A14', ocupado: false}}/>
    );

    const nodePuesto = ReactDOM.findDOMNode(puesto);

    expect(nodePuesto).not.toBeNull()

  })
})
