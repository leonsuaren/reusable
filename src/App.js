import { ThemeProvider } from 'styled-components';

import * as utils from './utils';

function App() {
  return (
    <ThemeProvider theme={utils.theme} >
      <utils.GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
