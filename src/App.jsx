import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LogOut } from './components/button/button';
import { SingUp } from './pages/singUp/singUp';
import { SingIn } from './pages/singIn/singIn';
function App() {
  return (
    <div className='app'>
      <SingIn />
    </div>

  );
}

export default App;
