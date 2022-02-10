import {Navigate, Outlet} from 'react-router-dom';
import {useContext} from "react";
import {AppContext} from "../utils/AppContext";
// import Swal from 'sweetalert2';

const AdminRoute = () => {
    const [state] = useContext(AppContext);
    
    return (state.isLogin && state.user.role === "admin") ? <Outlet /> : <Navigate to='/admin/login' />
       
};

export default AdminRoute;