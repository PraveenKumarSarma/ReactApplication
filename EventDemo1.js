import {useState} from 'react';

function EventDemo1()
{
    const [count, setCount] = useState(1);

    function buttonClick()
    {  
       setCount(count + 1);
    }

    
    return (
    <>
        <h3>Event Handling in React JS</h3>
        <hr/> 
        
        <input type="button" onClick={buttonClick} value="Update Count " />
        
        <h1>Counter :  {count}</h1>
    </>);
}

export default EventDemo1;