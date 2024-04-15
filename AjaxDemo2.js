import axios from "axios";
import { useState } from "react";

function AjaxDemo2()
{
    const [usersArray, setUsersArray] = useState([]);

    function getDataClick()
    {       
        let url= "https://reqres.in/api/users"
        axios.get(url).then( (resData) => 
        {
              //  console.log(resData);
              //  console.log(resData.data);
              //  console.log(resData.data.records);
                setUsersArray(resData.data.data);
        });
        // other code 
    }

    let resultsArray = usersArray.map( (item, index) => 
    <tr  key={index}>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.first_name}</td> 
        <td>{item.last_name}</td>
        <td>
            <img src = {item.avatar} width = "50" height = "50"/>
        </td>
        
    </tr>
    );

    return (
    <>
       <h3>Server Communication in React JS using AXIOS</h3>
       <hr/>

        <input type="button" value="Get Data" onClick={getDataClick} />

        <table  border="2"  width="500">
            <tr>
                <th>user id</th>
                <th>user email</th>
                <th>user firstName </th>
                <th>user lastName</th>
                <th>user avatar</th> 
            </tr>

            {resultsArray}

        </table>    
    </>);
}

export default AjaxDemo2;