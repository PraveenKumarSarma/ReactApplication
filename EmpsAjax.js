import { useState } from "react";
import axios from 'axios';
 
function EmpsAjax() { 
    
    const [empsArray, setEmpsArray ] = useState([]); 
    
    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");

    function getEmpsClick()
    {     
        let url = "http://localhost:3500/emps"; 
        axios.get(url).then( (resData) => 
        {
            setEmpsArray(resData.data);
        });       
    }

    function addEmpClick()
    {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;

        let url= "http://localhost:3500/emps";
        axios.post(url,  empObj ).then( (resData) => 
        { 
			 // logic 
             alert("New Emp details are inserted in server");
             getEmpsClick();
        });

        clearFields();
    }


    function deleteEmpClick(eno)
    { 
        let flag =  window.confirm("Do you want to delete?");

        if(flag == false)
        {
            return;
        }

        let url= "http://localhost:3500/emps/" + eno;
        axios.delete(url).then( (resData) => 
        {	              
              alert("Emp details are deleted from server");
              getEmpsClick();
        });
    }

    function selectEmpClick(eno)
    { 
        let url= "http://localhost:3500/emps/" + eno;
        axios.get(url).then( (resData) => 
        {   
            let empObj =  resData.data;
           
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);              
              
        });
        
         
    }


    function updateEmpClick()
    {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;

        let url= "http://localhost:3500/emps/" + empObj.empno;
        axios.put(url,  empObj ).then( (resData) => 
        { 
			 alert("Emp details are updated in server");
             getEmpsClick();
        });
    }



    function clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
    }


 
    let resultArray = empsArray.map((item, index) =>  
        <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td> 
            <td>
                    <a  href="#" onClick={() => selectEmpClick(item.empno) }>Select</a>|
                    <a  href="#" onClick={() => deleteEmpClick(item.empno) }>Delete</a>
            </td>
        </tr>
     );

    return (
        <>
            <h3>Server Communication using AXIOS (CRUD on JSON Server)</h3>
            <hr />

            <input  type="text" value={empno}  onChange={ (e) => setEmpno(e.target.value) } />
            <input  type="text" value={ename} onChange={ (e) => setEname(e.target.value) } />
            <input  type="text" value={job}  onChange={ (e) => setJob(e.target.value) } />
            <hr/>
 
            <input type="button" value="Get Emps" onClick={getEmpsClick} />
            <input type="button" value="Add Emp" onClick={addEmpClick} />
            <input type="button" value="Update Emp" onClick={updateEmpClick} />
            <hr/>

            <table border="2" width="600" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Job</th>
                    <th></th>
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default EmpsAjax;