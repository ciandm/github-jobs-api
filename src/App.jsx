import ThemeProvider from './theme/ThemeProvider';
import Form from './components/Form/Form';
import AppContainer from './App.styled';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <AppContainer>
        <Form />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
