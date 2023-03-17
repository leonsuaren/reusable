import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as lay from '../../page-layout';
import * as styled from './index';

export const MacroComponent = ({ elements }) => {
  const [macroComponent, setMacroComponent] = useState([]);
  const params = useLocation();

  /* 
    paso uno: determinar cual de los 3 valores dados es menor y cual es el mayor
      comparando los 3 valores
    paso dos: comparar los valores dados y determinar cual valor le corresponde a cada posicion
    paso tres: pasar el valor en el orden determinada a la posicion.
  */

  useEffect(() => {
    if (params.pathname === '/u' || params.pathname === `/p` || params.pathname === '/h' || params.pathname === '/error') {
      setMacroComponent(elements);
    } 
  }, [elements, params]);
  return (
    <lay.Layout>
      {
        macroComponent.map((component, key) => {
          return (
              <styled.MacroComponentStyled shape={component.shape} position={component.position} key={key}/>
          )
        })
      }
    </lay.Layout>
  )
}