import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './utils/AppContext';
import { API, setAuthToken } from './config/api';
import Loading from './components/Loading';
import AdminRoute from './routes/AdminRoute';

// pages
import Home from './pages/Home';
import Admin from './pages/admin';
import Token from './pages/admin/Token';
import Launchpad from './pages/admin/Launchpad';
import Login from './pages/admin/Login';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    const [state, dispatch] = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    
    const loadUser = async () => {
        try {
            setLoading(true);
            const response = await API('/auth');

            dispatch({
                type: "USER_LOADED",
                payload: response.data.data,
            });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            dispatch({
                type: "AUTH_ERROR"
            });
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        // loading ? <Loading /> : <AppRoutes />
        // <AppRoutes />
        loading ? <Loading /> :
        <Router>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/admin/login" element={<Login /> } />
                <Route path="/admin" element={<AdminRoute />} >
                    <Route path="/admin" element={<Admin />}>
                        <Route index element={<Token />} />
                        <Route path="launchpad" element={<Launchpad />} />
                        <Route path="token" element={<Token />} />
                    </Route>
                </Route>
                {/* <AdminRoute exact path="/addproduct" component={AddProduct} />
                <AdminRoute exact path="/addtopping" component={AddTopping} />
                <AdminRoute exact path="/transaction" component={Transaction} />
                <Route component={NotFound} /> */}
            </Routes>
        </Router>
    )
}

export default App;