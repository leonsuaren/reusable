import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as lay from '../../page-layout';
import * as styled from './index';

export const MacroComponent = ({ id }) => {
  const [macroComponent, setMacroComponent] = useState([]);
  const params = useLocation();
  console.log(id);

  useEffect(() => {
    const user = [{ shape: 'avatar', position: 'one' }, { shape: 'details', position: 'two' }, { shape: 'description', position: 'three' }];
    const product = [{ shape: 'product', position: 'one' }, { shape: 'details', position: 'two' }, { shape: 'description', position: 'three' }];
    const highQuality = [{ shape: 'product', position: 'one' }, { shape: 'stars', position: 'two' }, { shape: 'description', position: 'three' }];
    const error = [{ shape: 'error', position: 'two' }];
    if (params.pathname === '/u' || params.pathname === `/u`) {
      setMacroComponent(user);
    } else if (params.pathname === '/error') {
      setMacroComponent(error);
    } else if (params.pathname === '/p') {
      setMacroComponent(product);
    } else if (params.pathname === '/h') {
      setMacroComponent(highQuality)
    } 

  }, [params]);
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