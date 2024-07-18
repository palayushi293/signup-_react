import React ,{useState} from 'react';

export default function Color()

{
    const p={
        backgroundImage:'url(C:\Users\palay\OneDrive\Desktop\react\back\react_si_back.webp)',
        backgroundSize:"cover"
    };
    const [heading, setHeading] = useState('Sign Up');
const [name,setemail]=useState('Name')
const [email,passwor]=useState('Email')
const [password,con]=useState('password')

    const change = () => {
        setHeading("Login");
        setemail("Name")
        passwor("Email")
        con("password")
    };
    const cp = () => {
        setHeading("Sign Up");
        setemail("Name")
        passwor("Email")
        con("password")

    };
    const  handle=()=>
    {
        setemail('Email')
        passwor('password')
        con("Confirm Password")
        setHeading("Forget ")

    }

    
    
return(
<div style={p}>
    <div style={{backgroundColor:"black",height:500,marginTop:50,width:600,marginLeft:180}}>
        <div>
            <h1  style={{color:"blue",textDecorationLine:"underline",textAlign:"center",marginTop:6}} >
                <b>{heading}</b>
            </h1>
            <br/>
           
                <br/>
                <div style={{marginLeft:190}}>
            <input type="text" placeholder={name} style={{width:300,textAlign:"center",borderLeft:"6px",marginLieft:155,paddingBottom:8,height:40}} />
            <br/>
            <br/>
            <input type="text" placeholder={email} style={{width:300,textAlign:"center",height:40}} />
            <br/>
            <br/>
            <input type="password" placeholder={password} style={{width:300,textAlign:"center",height:40}} />
           </div>
        </div>
        <h6 style={{color:"white",marginLeft:201,}}>Have you forget your password? <a href="#" onClick={handle}>Click</a></h6>
    <div style={{marginTop:50,marginLeft:150}}>
       <button type="button"  onClick={change} className="btn btn-primary mx-3 my-2" style={{borderRadius:4,height:60,width:150}}>Log in</button>
       <button type="button" onClick={cp} className="btn btn-success" style={{borderRadius:4,width:150,height:60}}>SignUp</button>
    </div>
    </div>
    </div>

); 
}