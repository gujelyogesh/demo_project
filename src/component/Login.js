import React, { useState } from "react";
import './Login.css';
import axios from "axios";
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroruserName, setErroruserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  // create handleupdate function;
  const handleupdate = async(event) => {
    event.preventDefault();

    if(email == ""){
      await setErroruserName("Enter the Email");
    }
    if(password ==""){
     await setErrorPassword("Enter the Password");
    }
    

  }
  // create function handleApi;
  const handleApi = async() =>{
    console.log({email,password});
    
    await axios.post('https://reqres.in//api/login', {
      email:email,
      password:password

    })
     .then(result =>{
      console.log(result.data);
      localStorage.setItem('token', result.data.token);
      
    })
    .catch(error=>{
      console.log(error);
      
    })
  }
  return (
    <>
      <section className="gradient-form" style={{ backgroundcolor: "#eee" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                   <div className="card-body">
                      <div className="text-center">
                        <img className="img" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo" />
                        <h4 className="lotus ">We are The
                          Lotus Team</h4>
                      </div>
                      <div className="">
                        <p className="pd">Please login to your account</p>
                      </div>
                      <form onSubmit={handleupdate}>

                        <div className="form-outline">
                          <label className="form-label" for="form2Example11">Email</label>
                          <input type="email" id="form2Example11" className="form-control"
                            placeholder="Email address" value={email} onChange={((e) => {setEmail(e.target.value)
                              setErroruserName("");
                             })} />
                        </div>
                             <div className="error">{erroruserName}</div>

                        <div className="form-outline mt-2">
                          <label className="form-label" for="form2Example22">Password</label>
                          <input type="password" id="form2Example22" className="form-control" value={password} onChange={((e) => {setPassword(e.target.value);
                            setErrorPassword("");
                           })} />
                        </div>
                           <div className="error">{errorPassword}</div>

                        <div className="text-center pt-4 mb-5 pb-1 ">
                          <button className="btn btn-block fa-lg gradient-custom-2 m" type="submit" onClick={handleApi}>Log
                            in</button>
                          <a className="text-muted text-center" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login;
