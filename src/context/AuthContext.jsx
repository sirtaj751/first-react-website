 import { useState } from "react";
 import { AuthContext } from "./auth-context";
 export default function AuthProvider({children}){
    const [user,setuser]=useState(localStorage.getItem("currentUserEmail")?{email:localStorage.getItem("currentUserEmail")}:null);
    function signUp(email,password){
        const users =JSON.parse(localStorage.getItem("users")||"[]")
        if (users.find(u=>u.email===email)){
            return { success:false ,error:"Email Already Exists"}
        }
        const newUser ={email,password}
        users.push(newUser)
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("currentUserEmail",email);
        setuser({ email });
        return {success:true};
    };
    function login(email,password){
          const users =JSON.parse(localStorage.getItem("users")||"[]")
          const user = users.find(u=>u.email===email && u.password === password)
        if(!user){
            return {success:false,error:"Ivalid credentials"}
        }
         localStorage.setItem("currentUserEmail",email);
        setuser({ email });
        return{success:true}
    }
    function logout(){
        localStorage.removeItem("currentUserEmail");
        setuser(null);    }
    return <AuthContext.Provider value={{signUp,user,logout,login}}>{children}</AuthContext.Provider>
 }