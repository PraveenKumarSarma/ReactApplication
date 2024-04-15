
import { useState } from "react";
import axios from 'axios';
 
function AjaxSir2() { 
    
    const [deptsArray, setDeptsArray ] = useState([]); 
    
    // For reading data from user through textboxes
    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");

    function getDeptsClick()
    {     
        let url = "http://localhost:3500/depts"; 
        axios.get(url).then( (resData) => 
        {
            setDeptsArray(resData.data);
        });       
    }

    function addDeptClick()
    {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;

        let url= "http://localhost:3500/depts";
        axios.post(url,  deptObj ).then( (resData) => 
        { 
			 // logic 
             alert("New Detp details are inserted in server");
             getDeptsClick();
        });

        clearFields();
    }


    function deleteDeptClick(dno)
    { 
        let flag =  window.confirm("Do you want to delete?");

        if(flag == false)
        {
            return;
        }

        let url= "http://localhost:3500/depts/" + dno;
        axios.delete(url).then( (resData) => 
        {	              
              alert("Detp details are deleted from server");
              getDeptsClick();
        });
    }

    function selectDeptClick(dno)
    { 
        let url= "http://localhost:3500/depts/" + dno;
        axios.get(url).then( (resData) => 
        {   
            let deptObj =  resData.data;
           
            setDeptno(deptObj.deptno);
            setDname(deptObj.dname);
            setLoc(deptObj.loc);              
              
        });
        
         
    }


    function updateDeptClick()
    {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;

        let url= "http://localhost:3500/depts/" + deptObj.deptno;
        axios.put(url,  deptObj ).then( (resData) => 
        { 
			 alert("Dept details are updated in server");
             getDeptsClick();
        });
    }



    function clearFields()
    {
        setDeptno("");
        setDname("");
        setLoc("");
    }


 
    let resultArray = deptsArray.map((item, index) =>  
        <tr key={index}>
            <td>   {item.deptno}  </td>
            <td>   {item.dname}  </td>
            <td>   {item.loc}  </td> 
            <td>
                    <a  href="#" onClick={() => selectDeptClick(item.deptno) }>Select</a>|
                    <a  href="#" onClick={() => deleteDeptClick(item.deptno) }>Delete</a>
            </td>
        </tr>
     );

    return (
        <>
            <h3>Server Communication using AXIOS (CRUD on JSON Server)</h3>
            <hr />

            <input  type="text" value={deptno}  onChange={ (e) => setDeptno(e.target.value) } />
            <input  type="text" value={dname} onChange={ (e) => setDname(e.target.value) } />
            <input  type="text" value={loc}  onChange={ (e) => setLoc(e.target.value) } />
            <hr/>
 
            <input type="button" value="Get Depts" onClick={getDeptsClick} />
            <input type="button" value="Add Dept" onClick={addDeptClick} />
            <input type="button" value="Update Dept" onClick={updateDeptClick} />
            <hr/>

            <table border="2" width="600" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Dept Number</th>
                    <th>Dept Name</th>
                    <th>Location</th>
                    <th></th>
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default AjaxSir2;