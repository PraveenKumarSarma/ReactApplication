import { useState } from "react";

function ProductDetailsState()
{

const [name,setName] = useState("");
const [unitPrice,setUnitPrice] = useState(1);
const [quantity,setQuantity] = useState(1);
const [result,setResult] = useState("");

function buttonClick()
{

setResult("Total Amount :"+ unitPrice * quantity);
}


return(
    <>
        <h1>Event handling in Product Details.....</h1>
        <hr/>

        <br/>
        <fieldset>
            <legend>Product Login</legend>

            Product Name:
            <input type = "text" onChange={(e) => setName(e.target.value)}/>
            <p></p>
            Unit Price:
            <input type = "number" onChange={(e) => setUnitPrice(e.target.value)}/>
            <p></p>
            Quantity :
            <input type = "number" onChange={(e) => setQuantity(e.target.value)}/>
            <p></p>
            <input type="button" value="Get Total" onClick={buttonClick}/>
            <p>{result}</p>
        </fieldset>
    
    </>




)

}
export default ProductDetailsState