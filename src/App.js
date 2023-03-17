import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as utils from './utils';
import * as layout from './page-layout/container';
import * as vie from './views';

function App() {
  let { id } = useParams();
  console.log(id)
  return (
    <ThemeProvider theme={utils.theme} >
      <layout.Container>
        <utils.GlobalStyles />
        <Router>
          <Routes>
            <Route path='p' element={<vie.Products id={id} />}>
              <Route path='p/:id' element={<vie.Products id={id} />} />
            </Route>
            <Route path='u' element={<vie.Users />}>
              <Route path=':id' element={<vie.Users />} />
            </Route>
            <Route path='h' element={<vie.HighQuality />}>
              <Route path=':id' element={<vie.HighQuality />} />
            </Route>
            <Route path='error' element={<vie.Error />} />
            <Route path='*' element={<Navigate to='/error' replace={true} />} />
          </Routes>
        </Router>
      </layout.Container>
    </ThemeProvider>
  );
}

export default App;
