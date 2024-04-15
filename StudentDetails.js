function StudentDetails()
{

    let studentObject = { "sid" : 107,"sname" : "praveen","course" : "react js","age" : 28,"total" : 45};


    return(
        <>
        Student Id : {studentObject.sid}<br/>
        Student Name : {studentObject.sname}<br />
        Student Course : {studentObject.course}<br/>
        Student Age : {studentObject.age}<br/>
        Student Total : {studentObject.total}<br />
        
        </>

    )

}


export default StudentDetails