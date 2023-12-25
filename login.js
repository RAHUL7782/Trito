function loginform(){
    let email = document.getElementById('email').value;

    let password = document.getElementById('password').value;
     let repass = document.getElementById('repass').value;
console.log =(email,password,repass);

let email1 ='rk4191822@gmail.com';
 let pass = '123456789';

 if(email === email1 && password === pass){
    alert("yes");

    if(password === repass){
        window.location.href='index.html';
    }
    else{
        alert("re enter password is not correct")
    }
 }
 else{
    alert("username and password not found");
 }
 
}