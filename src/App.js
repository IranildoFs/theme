import ThemeProvider from './context/Theme';
import Mensagem from './page/Mensagem'
function App() {
  return (
    <ThemeProvider>
      <Mensagem></Mensagem>
    </ThemeProvider>
  );
}

export default App;
