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
            <Route path='/' element={<com.Skeleton/>} />
            <Route path='/error' element={<com.MacroComponent shape="error" position='two'/>} />
            <Route path='*' element={<Navigate to='/error'  replace={true}/>} />
          </Routes>
        </Router>
      </layout.Container>
    </ThemeProvider>
  );
}

export default App;
