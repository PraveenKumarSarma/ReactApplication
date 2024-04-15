function ProductDetails()
{

    let ProductDetails = [
        {"pid" : 121, "pname" : "laptop" , "price" : 40000,"qty" : 2,"category" : "lenovo"},
        {"pid" : 122, "pname" : "laptop" , "price" : 30000, "qty" : 3,"category" : "samsung"},
        {"pid" : 125, "pname" : "mobile" , "price" : 45000, "qty" : 2,"category" : "nokia"}
    ]

    let productResult = ProductDetails.map(item =>
        <tr>
            <td>{item.pid}</td>
            <td>{item.pname}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.category}</td>
        </tr>)

    return (
    

        <table border="5" width = "500">
            <tr>
                <th>pid</th>
                <th>pname</th>
                <th>price</th>
                <th>qty</th>
                <th>category</th>
            </tr>

            {productResult}



        </table>
    )
    }


export default ProductDetails
