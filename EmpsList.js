import { useState } from "react";

 
function EmpsList() { 
    
    const [empsArray, setEmpsArray ] = useState([]); 
    
    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal,setSal] = useState(1);
    const [deptno,setDeptno] = useState(1);

    function getEmpsClick()
    {
        let dataArray = [
            { empno: 10, ename: "Praveen", job: "Hyd",sal:20000,deptno:21 },
            { empno: 20, ename: "Kumar", job: "Pune" ,sal:30000,deptno:22},
            { empno: 30, ename: "Sarma", job: "Hyd" ,sal:40000,deptno:23},
            { empno: 40, ename: "Krishna", job: "Chnnai",sal:35000,deptno:24 },
        ];

        setEmpsArray(dataArray);
    }

    function addEmpsClick()
    {
        let EmpsObj = {};
        EmpsObj.empno = empno;
        EmpsObj.ename = ename;
        EmpsObj.job = job;
        EmpsObj.sal = sal;
        EmpsObj.deptno = deptno;


        let tempArray = [...empsArray];
        tempArray.push(EmpsObj);        
        setEmpsArray( tempArray );

        clearFields();
    }


    function deleteEmpsClick(eno)
    { 
        let flag =  window.confirm("Do you want to delete?");

        if(flag == false)
        {
            return;
        }

        let tempArray = [...empsArray];
        let index =  tempArray.findIndex( item => item.empno == eno);
        tempArray.splice(index, 1);
        setEmpsArray( tempArray );
    }

    function selectEmpsClick(eno)
    {         
        let empsObj =  empsArray.find( item => item.empno == eno);
        // console.log(empsObj);
        setEmpno(empsObj.empno);
        setEname(empsObj.ename);
        setJob(empsObj.job);
        setSal(empsObj.sal);
        setDeptno(empsObj.deptno);
    
    }


    function updateEmpsClick()
    {
        let tempArray = [...empsArray];
        
        let index =  tempArray.findIndex( item => item.empno == empno);
        tempArray[index].ename = ename;
        tempArray[index].job = job;
        tempArray[index].sal = sal;
        tempArray[index].deptno = deptno;

        setEmpsArray( tempArray );
    }



    function clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


 
    let resultArray = empsArray.map((item, index) =>  
        <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>    {item.sal}</td>
            <td>    {item.deptno}</td>
            <td>
                    <a  href="#" onClick={() => selectEmpsClick(item.empno) }>Select</a>|
                    <a  href="#" onClick={() => deleteEmpsClick(item.empno) }>Delete</a>
            </td>
        </tr>
     );

    return (
        <>
            <h3>Working with State in React JS (CRUD on Array of Objects)</h3>
            <hr />

            <input  type="text" value={empno}  onChange={ (e) => setEmpno(e.target.value) } />
            <input  type="text" value={ename} onChange={ (e) => setEname(e.target.value) } />
            <input  type="text" value={job}  onChange={ (e) => setJob(e.target.value) } />
            <input  type="number" value={sal}  onChange={ (e) => setSal(e.target.value) } />
            <input  type="number" value={deptno}  onChange={ (e) => setDeptno(e.target.value) } />
            
 
 
 
            <hr/>
 
            <input type="button" value="Get Emps" onClick={getEmpsClick} />
            <input type="button" value="Add Emp" onClick={addEmpsClick} />
            <input type="button" value="Update Emp" onClick={updateEmpsClick} />
            <hr/>

            <table border="2" width="400" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Deptno</th>
                    <th></th>
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default EmpsList;