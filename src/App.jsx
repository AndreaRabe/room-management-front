import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LogOut } from './components/button/button';
import { SingUp } from './pages/singUp/singUp';
function App() {
  return (
    <div className='app'>
      <SingUp />
    </div>

  );
}

export default App;
