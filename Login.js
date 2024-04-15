import {useState}  from 'react';

function Login()
{
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");


    function loginClick()
    {
           if(uname == "admin" && password == "admin123") 
           {
                setResult("Welcome to Admin");
           }
           else
           {
            setResult("Invalid User Id or password");
           }
    }

    return (<>

        <h3>Working with State in React JS</h3>
        <hr/>

       <fieldset>
            <legend>User Login</legend>

            User Name :  
            <input  type="text"  onChange={ (e) => setUname(e.target.value) } />
            
            <br/><br/>
            Password:
            <input  type="password"  onChange={ (e) => setPassword(e.target.value) } />
        <br/><br/>
        <input type="button"  onClick={loginClick}  value="Login" />
       <p>{result}</p>
       </fieldset>
        
    
    
    </>);

}


export default Login;