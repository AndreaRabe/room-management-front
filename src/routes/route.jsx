import { SingUp } from '../pages/singUp/singUp';
import { SingIn } from '../pages/singIn/singIn';
import { Home } from '../pages/home/home';
import { RoomList } from '../pages/room_list/room_list';
import { UserList } from '../pages/user_list/user_list';
import { ReserveRoom } from '../pages/reserve_room/reserve_room';
import { ReservationList } from '../pages/reservation_list/reservation_list';
import { AddRoom } from '../pages/add_room/add_room';
import { ReservationListForAdmin } from '../pages/reservation_list/reservation_list_admin';
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from './privateRoute';

// const navigate= useNavigate()
// navigate("/")

const router = createBrowserRouter([
                    {
                      path: "/",
                      element: <Home />,
                    
                    },
                    {
                      path: "/singIn",
                      element: <SingIn />,
                    },
                    {
                      path: "/singUp",
                      element: <SingUp />,
                    },
                    {
                      path: "/AddRoom",
                      element: <PrivateRoute element={<AddRoom />} />
                    },
                    {
                      path: "/RoomList/:index",
                      element: <RoomList />,
                    },
                    {
                      path: "/RoomList",
                      element: <RoomList />,
                    },
                    {
                      path: "/UserList",
                      element: <PrivateRoute element={<UserList />} />
                    },
                    {
                      path: "/ReserveRoom/:index",
                      element: <PrivateRoute element={<ReserveRoom />} />
                    },
                    {
                      path: '/ReservationList',
                      element: <PrivateRoute element={<ReservationList />} />
                    },
                    {
                      path: "/ReservationListAdmin",
                      element: <PrivateRoute element={<ReservationListForAdmin />} />
                    },
]);

export default router;
