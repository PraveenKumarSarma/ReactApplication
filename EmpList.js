import { useState } from "react";

function EmpList()
{
    

    let empsArray =  [
		{"empno":6589,"ename":"SRIRAM","job":"MANAGER"},
		{"empno":7369,"ename":"SMITH","job":"CLERK"},
		{"empno":7499,"ename":"ALLEN","job":"SALESMAN"},
        {"empno":6589,"ename":"SRIRAM","job":"MANAGER"},
		{"empno":7369,"ename":"SMITH","job":"CLERK"},
		{"empno":7499,"ename":"ALLEN","job":"SALESMAN"},
	];

    let resultsArray = empsArray.map( (item, index) => 
        <tr  key={index}>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td> 
            <td>{index+1}</td>
        </tr>
        );


    return (
    <>
       <h3>Collection of Employee List</h3>
       <hr/>

        <table  border="2"  width="500">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th> 
                <th>Index</th>
            </tr>

            {resultsArray}

        </table>    

    </>);
}

export default EmpList;