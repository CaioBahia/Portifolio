import Portfolio from './components/Portfolio';
import { LanguageProvider } from './i18n/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

export default App;