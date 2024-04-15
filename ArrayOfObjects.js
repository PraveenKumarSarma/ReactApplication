function ArrayOfObject()
{


    let empsArray = [

        {"empno" : 6859,"ename" : "Sriram", "job" : "Manager"},
        {"empno" : 7369,"ename" : "smith" , "job" :"Clerk"},
        {"empno" : 7499,"ename" : "Allen" , "job" : "salesman"}

    ]

    let resultsArray = empsArray.map((item,index) => 
    <tr key={index}>
        <td>{item.empno}</td>
        <td>{item.ename}</td>
        <td>{item.job}</td>
    
    </tr>
    
    
    
    )


    return(


<empsArray/>



    )
}