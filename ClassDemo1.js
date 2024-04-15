import React from 'react';

class ClassDemo1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {uname : "Scott", message  :  "Welcome Guest User"};
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick()
    {
       // alert(this.state.uname);
      // alert(this.state.message);
      
        this.setState({message:  "Welcome " + this.state.uname + " User"});

    }

    render(){
        return (<>
        <div  style={  {backgroundColor : this.props.backColor, border : "2px solid black"}    }>

      
            <h3>Working with Class Components</h3>
            <hr/>
            <input type="button"  value="Get Data" onClick={this.buttonClick} />
            <p>
                {this.state.message}
            </p>
            </div>  

        </>);
    }
}

export default ClassDemo1;