import React from 'react';
import { Link } from 'react-router-dom';

class Depts  extends React.Component
{   
    constructor(   )
    {
       super( );
 
      this.state =  {                        
          deptsArray  :  [
            { Deptno:10,   Dname: "Accounts", Loc : "Hyd" } ,
            { Deptno:20,   Dname: "Sales", Loc : "Pune" } ,
            { Deptno:30,   Dname: "Admin", Loc : "Hyd" } ,
            { Deptno:40,   Dname: "Marketing", Loc : "Mumbai" }
           ]           
        };    
     }       

  
    
	render() {   
        var result = this.state.deptsArray.map( item => 
            <tr>  
               <td> {item.Deptno}  </td> 
               <td> {item.Dname}  </td> 
               <td> {item.Loc}  </td>  
            </tr>);

         

      return (
        <div>   
            <h3>All Deptartments</h3>
           
            <table   border="2"  cellPadding="5"  cellSpacing="0" width="500">
                <thead>
                        <tr>
                                <th>Deptno</th>
                                <th>Dname</th>
                                <th>Location</th>
                        </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
                
            </table>
            <br/>  
            

        </div>  );
    }
}

export default Depts; 
