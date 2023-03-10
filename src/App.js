import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as utils from './utils';
import * as layout from './layout';
import * as com from './components';

function App() {
  return (
    <ThemeProvider theme={utils.theme} >
      <layout.Layout>
        <utils.GlobalStyles />
        <Router>
          <Routes>
            <Route path='/' element={<com.Skeleton />} />
          </Routes>
        </Router>
      </layout.Layout>
    </ThemeProvider>
  );
}

export default App;
