import Button from './components/Button/Button';
import ThemeProvider from './theme/ThemeProvider';
import Form from './components/Form/Form';

function App() {
  return (
    <ThemeProvider>
      <Button />
      <Form />
    </ThemeProvider>
  );
}

export default App;
