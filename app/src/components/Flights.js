import React from 'react';
import './Flights.css';

function Flights(props) { 
    return(
        <div className="flights">
            <table>
                <thead>
                    <tr>
                        <th>Quote ID</th>
                        <th>Price</th>
                        <th>Direct Flight</th>
                        {/* <th>Region ID</th>
                        <th>City ID</th>
                        <th>Country Name</th> */}
                    </tr>
                </thead>
                <tbody>
                    {props.flights.map(flight => {
                        return (<tr id={flight.QuoteId}>
                            <th>{flight.QuoteId}</th>
                            <th>{flight.MinPrice}</th>
                            <th>{flight.Direct ? "Yes" : "No"}</th>
                            {/* <th>{flight.CountryId}</th>
                            <th>{flight.RegionId}</th>
                            <th>{flight.CityId}</th>
                            <th>{flight.CountryName}</th> */}
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Flights;