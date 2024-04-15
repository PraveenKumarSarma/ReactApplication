import axios from "axios";
import { useState } from "react";

function AjaxDemo1()
{
    const [customersArray, setCustomersArray] = useState([]);

    function getDataClick()
    {       
        let url= "https://www.w3schools.com/angular/customers.php";
        axios.get(url).then( (resData) => 
        {
              //  console.log(resData);
              //  console.log(resData.data);
              //  console.log(resData.data.records);
                setCustomersArray(resData.data.records);
        });
        // other code 
    }

    let resultsArray = usersArray.map( (item, index) => 
    <tr  key={index}>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td> 
    </tr>
    );

    return (
    <>
       <h3>Server Communication in React JS using AXIOS</h3>
       <hr/>

        <input type="button" value="Get Data" onClick={getDataClick} />

        <table  border="2"  width="500">
            <tr>
                <th>User id</th>
                <th>User email</th>
                <th>User firstName </th> 
                <th>User lastName</th>

            </tr>

            {resultsArray}

        </table>    
    </>);
}

export default AjaxDemo1;