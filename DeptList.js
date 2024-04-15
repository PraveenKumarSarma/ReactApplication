import { useState } from "react";

 
function DeptList() { 
    
    const [deptsArray, setDeptsArray ] = useState([]); 
    
    // For reading data from user through textboxes
    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");

    function getDeptsClick()
    {
        let dataArray = [
            { deptno: 10, dname: "Accounts", loc: "Hyd" },
            { deptno: 20, dname: "Sales", loc: "Pune" },
            { deptno: 30, dname: "Marketing", loc: "Hyd" },
            { deptno: 40, dname: "Operations", loc: "Chennai" },
        ];

        setDeptsArray(dataArray);
    }

    function addDeptClick()
    {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;

        let tempArray = [...deptsArray];
        tempArray.push(deptObj);        
        setDeptsArray( tempArray );

        clearFields();
    }


    function deleteDeptClick(dno)
    { 
        let flag =  window.confirm("Do you want to delete?");

        if(flag == false)
        {
            return;
        }

        let tempArray = [...deptsArray];
        let index =  tempArray.findIndex( item => item.deptno == dno);
        tempArray.splice(index, 1);
        setDeptsArray( tempArray );
    }

    function selectDeptClick(dno)
    {         
        let deptObj =  deptsArray.find( item => item.deptno == dno);
        // console.log(deptObj);
        setDeptno(deptObj.deptno);
        setDname(deptObj.dname);
        setLoc(deptObj.loc);        
    }


    function updateDeptClick()
    {
        let tempArray = [...deptsArray];
        
        let index =  tempArray.findIndex( item => item.deptno == deptno);
        tempArray[index].dname = dname;
        tempArray[index].loc = loc;

        setDeptsArray( tempArray );
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
            <h3>Working with State in React JS (CRUD on Array of Objects)</h3>
            <hr />

            <input  type="text" value={deptno}  onChange={ (e) => setDeptno(e.target.value) } />
            <input  type="text" value={dname} onChange={ (e) => setDname(e.target.value) } />
            <input  type="text" value={loc}  onChange={ (e) => setLoc(e.target.value) } />
            <hr/>
 
            <input type="button" value="Get Depts" onClick={getDeptsClick} />
            <input type="button" value="Add Dept" onClick={addDeptClick} />
            <input type="button" value="Update Dept" onClick={updateDeptClick} />
            <hr/>

            <table border="2" width="400" cellspacing="0" cellpadding="5">
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

export default DeptList;