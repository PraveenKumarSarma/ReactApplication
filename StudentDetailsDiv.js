function StudentDetailsDiv()
{

let studentObject = [
    {"sid" : 111,"sname" : "praveen" , "course" : "java", "age" : 28,"total" :80 },
    {"sid" : 112, "sname" : "kumar" , "course" : "spring" ,"age" : 30, "total" :90},
    {"sid" : 113, "sname" : "sarma" , "course" : "springboot" , "age": 25,"total":58}

]


let studentResult = studentObject.map(item => 
   <tr>
    <td>{item.sid}</td>
    <td>{item.sname}</td>
    <td>{item.course}</td>
    <td>{item.age}</td>
    <td>{item.total}</td>
   </tr> 
    
    )



return (

<table border={5} width={500}>
<tr>
<th>sid</th>
<th>sname</th>
<th>course</th>
<th>age</th>
<th>total</th>
</tr>

{studentResult}


</table>


)


}

export default StudentDetailsDiv