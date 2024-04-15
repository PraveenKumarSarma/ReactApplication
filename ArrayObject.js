  function  ArrayObject()
  {  

    let empObj = { empno : 10256, ename :  "Scott", job : "Manager" , deptno : 10 };

    

    return  (
      <>
          <h3>Developing React JS Applications</h3> 
          <hr/>

           <div>
              <h3>Employee Details</h3>
              Employee Id  :  {empObj.empno}  <br/>
              Employee Name  :  {empObj.ename}  <br/>
              Employee Job  :  {empObj.job}  <br/>
              Employee Deptno  :  {empObj.deptno}  <br/>
           </div>
                  
      </>      
    );
  }

  export default ArrayObject;