import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as utils from './utils';
import * as layout from './page-layout/container';
import * as com from './components';

function App() {
  return (
    <ThemeProvider theme={utils.theme} >
      <layout.Container>
        <utils.GlobalStyles />
        <Router>
          <Routes>
            <Route path='/p/:id' element={<com.MacroComponent />} />
            <Route path='/u/:id' element={<com.MacroComponent />} />
            <Route path='/h/:id' element={<com.MacroComponent />} />
            <Route path='/p' element={<com.MacroComponent />} />
            <Route path='/u' element={<com.MacroComponent />} />
            <Route path='/h' element={<com.MacroComponent />} />
            <Route path='/error' element={<com.MacroComponent />} />
            <Route path='/*' element={<Navigate to='/error'  replace={true}/>} />
          </Routes>
        </Router>
      </layout.Container>
    </ThemeProvider>
  );
}

export default App;
