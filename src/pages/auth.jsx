import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export default function Auth(){
    const{signUp,logout,login}=useContext(AuthContext)
    const [mode,setmode]=useState("signup");
    const [error, seterror] = useState(null);
    const{register,handleSubmit,formState:{errors}}=useForm();
    const navigate = useNavigate();
    function onSumit(data){
        seterror(null);
        let result;
        if(mode==="signup"){
           result= signUp(data.email,data.password)
        }else{
         result = login(data.email,data.password)
        }
        if (result.success) {
            navigate("/")
        }else{
            seterror(result.error)
        }
    }
    return <div className="page">
        <div className="container">
            <div className="auth-container">
                <button onClick={()=>logout()}>LOGOUT</button>
                <h1 className="page-title">{mode==="signup" ? "SignUp":"Login"}</h1>
                <form className="auth-form" onSubmit={handleSubmit(onSumit)}>
                    {error&& <div className="error-message">{error}</div> }
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input type="email" className="form-input" id="email" {...register('email',{required:"Email is required"})} />
                        {errors.email &&(
                            <span className="form-error">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" className="form-input" id="password" {...register('password', { required: "password is required", minLength: { value: 6, message: "Password must be atleast of 6 letters" }, maxLength: { value: 12, message: "Password must be atmost of 12 leters" } })} />
                         {errors.password &&(
                            <span className="form-error">{errors.password.message}</span>
                        )}
                    </div>
                    <button className="btn btn-primary" type="submit">{mode==="signup" ? "SignUp":"Login"}</button>
                </form>
                <div className="auth-switch">
                    {mode==="signup"?(<p>
                    Already Have an Account? <span className="auth-link" onClick={()=>setmode('login')}>Login</span>
                    </p>):(
                        <p>Dont't Have an Account? <span className="auth-link" onClick={()=>setmode('signup')}>SignUp</span></p>
                    )}
                    </div>
            </div>
        </div>
    </div>
}