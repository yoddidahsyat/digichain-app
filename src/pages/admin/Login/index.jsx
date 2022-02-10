import React from "react";
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../utils/AppContext';
import { API, setAuthToken } from '../../../config/api';

const Login = () => {
  const [state, dispatch] = useContext(AppContext);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isLogin && state.user.role === 'admin') {
      navigate('/admin')
    }
  })

  const [formData, setFormData] = useState({
      email: '',
      password: '',
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const body = JSON.stringify(formData);

          const config = {
              headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Headers": "*"
              },
          };

          const response = await API.post("/login", body, config);
          // console.log(response);

          // urutannya setAuthToken dulu baru dispatch gak boleh ketuker
          setAuthToken(response.data.data.token);
          dispatch({
              type: "LOGIN",
              payload: response.data.data,
          });
          navigate("/admin/token");

      } catch (err) {
          // console.log(err)
          if(err.response.status === 400) {
              setAlert(true);
          }
      }
      // navigate('/');
  }

  return (
    <div className="wrapper vh-100 d-flex align-items-center justify-content-center">
      <div className="card card-secondary w-50">
        <div className="card-header">
          <h3 className="card-title">Digichain Admin</h3>
        </div>
        <form className="form-horizontal">
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
                Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div className="form-group row">
              <div className="offset-sm-3 col-sm-9">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Remember me
                  </label>
                </div>
              </div>
            </div> */}
          </div>
          <div className="card-footer">
            <button onClick={handleSubmit} className="btn btn-secondary float-right">
              Log in
            </button>
          </div>
        </form>
        { alert && <div class="alert alert-danger mx-3" role="alert">
          Your email or password is wrong!
        </div>}
      </div>
    </div>
  );
};

export default Login;
