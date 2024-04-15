import {useState} from 'react';

function EventDemo2()
{
    const [uname, setUname] = useState("");
    const [result, setResult] = useState("");

    function buttonClick()
    {  
        let message = "Welcome " + uname;
       setResult(message);
    }

    
    return (
    <>
        <h3>Event Handling in React JS</h3>
        <hr/> 
        
        User Name :  
        <input type="text" onChange={ (e) =>  setUname(e.target.value)  }   />
        <input type="button" onClick={buttonClick} value="Get Message" />
        
        <h1>{result}</h1>
    </>);
}

export default EventDemo2;