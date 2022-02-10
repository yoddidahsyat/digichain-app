import {Route, Navigate, Outlet} from 'react-router-dom';
import {useContext} from "react";
import {AppContext} from "../utils/AppContext";
// import Swal from 'sweetalert2';

const AdminRoute = () => {
    const [state] = useContext(AppContext);
    
    return (state.isLogin && state.user.role === "admin") ? <Outlet /> : <Navigate to='/admin/login' />
        // <Route
        //     {...rest}
            // render = {(props) => {
            //     if  {
            //         return <Component {...props}/>
            //     } else {
            //         Swal.fire(
            //             'Access denied',
            //             'Please login',
            //             'error'
            //         );
            //         // return <Redirect to="/" /> 
            //         
            //     }
            // }}
        // />
    // );
};

export default AdminRoute;