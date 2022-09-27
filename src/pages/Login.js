import React, {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../css/Login.css';

function Login() {
    const baseUrl="https://localhost:44363/api/accounts";
    const cookies= new Cookies();
   
    const [form, setForm]=useState({
        username:'',
        password:''
    });
    const handleChange=e=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });       
    } 
    
    const Loginz=async()=>{
     
        await axios.get(baseUrl+`/${form.username}/${(form.password)}`)
        .then(response=>{
             return response.data
        }).then(response=>{
            if(response.length>0){
                var res=response[0];
                cookies.set('id', res.id, {path:'/'});
                cookies.set('name', res.name, {path:'/'});
                cookies.set('surname', res.surname, {path:'/'});
                cookies.set('phone', res.phone, {path:'/'});
                cookies.set('email', res.email, {path:'/'});
                cookies.set('username', res.username, {path:'/'});
                cookies.set('password', res.password, {path:'/'});
                cookies.set('todo', res.todo, {path:'/'});
                alert('Giriş Başarılı');     
                window.location.href="/Menu"
            } 
            else{
                alert('username or password is not correct')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div className='containerLogin'>
    <form>
    <label class="head" for="form2Example1" >TO DO APP</label>

    <div class="form-outline mb-4">
      <input type="text" onChange={handleChange} name='username' id="form2Example1" class="form-control"  required/>
      <label class="form-label" for="form2Example1" >Username</label>
    </div>
  
    <div class="form-outline mb-4">
      <input type="password" onChange={handleChange} name='password' id="form2Example2" class="form-control"  required/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
   
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
      
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
          <h class="remember">Remember me</h>
        </div>
      </div>
  
  
    </div>
  
  <button name='btn' type="button" class="btn btn-primary btn-block mb-4" onClick={()=>Loginz()}>Login</button>
    
  
    <div class="text-center">
   
      
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
  </div>
  )
}
export default Login;
