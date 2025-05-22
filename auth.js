

const authentication = ({username , password})=>{

    if(username!=="teest"){
        console.log("Unauthorized")
    }

    if(password.length < 3){
        console.log("Weak Password")
    }

    return true;
    
}


 authentication({
    username : "teest",
    password : "test@123"
})  ? console.log("Logged In") : console.log("Unauthenticated");