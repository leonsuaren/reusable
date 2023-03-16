import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as utils from './utils';
import * as layout from './page-layout/container';
import * as vie from './views';
import * as com from './components';

function App() {
  return (
    <ThemeProvider theme={utils.theme} >
      <layout.Container>
        <utils.GlobalStyles />
        <Router>
          <Routes>
            <Route path='/p' element={<vie.Products />} />
            <Route path='/p/:id' element={<vie.Products />} />
            <Route path='/u' element={<vie.Users />} />
            <Route path='/u/:id' element={<vie.Users />} />
            <Route path='/h' element={<vie.HighQuality />} />
            <Route path='/h/:id' element={<vie.HighQuality />} />
            <Route path='/error' element={<vie.Error />} />
            <Route path='/*' element={<Navigate to='/error' replace={true} />} />
          </Routes>
        </Router>
      </layout.Container>
    </ThemeProvider>
  );
}

export default App;
