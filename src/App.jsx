import ThemeProvider from './theme/ThemeProvider';
import Form from './components/Form/Form';
import AppContainer from './App.styled';
import Header from './components/Header/Header';
import JobBoard from './components/JobBoard/JobBoard';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <AppContainer>
        <JobBoard />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
