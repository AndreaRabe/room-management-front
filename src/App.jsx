import { SingUp } from './pages/singUp/singUp';
import { SingIn } from './pages/singIn/singIn';
import { Home } from './pages/home/home';
import { RoomList } from './pages/room_list/room_list';
import { UserList } from './pages/user_list/user_list';
import { ReserveRoom } from './pages/reserve_room/reserve_room';
import { ReservationList } from './pages/reservation_list/reservation_list';
import { AddRoom } from './pages/add_room/add_room';
import { ReservationListForAdmin } from './pages/reservation_list/reservation_list_admin';
import { createBrowserRouter } from "react-router-dom";


export function App() {
  return (
    <div className='app'>
      <RoomList />
    </div>

  );
}