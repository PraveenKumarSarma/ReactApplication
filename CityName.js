function CityName()
{

    let cityNames = ["hyderabad","nellore","betamcherla","banaganepalle","switzerland"]

    let resultCities     = cityNames.map(item => <li>{item}</li>);

    return(

        <ul>
            {resultCities}
        </ul>


    )



}

export default CityName