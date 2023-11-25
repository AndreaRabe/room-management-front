import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { LogOut } from './components/button/button';
import { SingUp } from './pages/singUp/singUp';
import { SingIn } from './pages/singIn/singIn';
import { Home } from './pages/home/home';
import { RoomList } from './pages/room_list/room_list';
function App() {
  return (
    <div className='app'>
      <RoomList />
    </div>

  );
}

export default App;
