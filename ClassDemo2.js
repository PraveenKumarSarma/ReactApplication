import React from 'react';
import axios from 'axios';

class ClassDemo2 extends React.Component {

  constructor() {
    super();
    this.state = { customersArray: [] };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick()  {

    let url = "https://www.w3schools.com/angular/customers.php";
        axios.get(url).then(resData => 
            {
                this.setState({ customersArray : resData.data.records});
            });
  }


  render(){

    var resultArray = this.state.customersArray.map((item, index) =>
    <tr key={index}>
      <td> {item.Name}  </td>
      <td> {item.City}  </td>
      <td> {item.Country}  </td>
    </tr>);


        return (<>
        
        
        <h3>Server Communication in React JS</h3>
        <hr />
        <button onClick={this.buttonClick}>Get Data</button>
        <hr />

        <table border="2" cellpadding="5" cellSpacing="0" width="700">
          <tr>
            <th>Customer Name</th>
            <th>City Name</th>
            <th>Country Name</th>
          </tr>
          {resultArray}
        </table>
        
        
        </>);

  }

}

export default ClassDemo2;