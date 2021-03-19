import React from 'react';
import './Flights.css';

function Flights(props) {
    
    // Return data pulled from Skyscanner API
    return (
        <div className="flights">
            <table id="flightResults">
                <thead>
                    <tr>
                        <th>Flight ID</th>
                        <th>Price</th>
                        <th>Direct Flight</th>
                        <th>Carrier ID</th>
                        <th>Departure Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.flights.map(flight => {
                        return (<tr id={flight.QuoteId}>
                            <td>{flight.QuoteId}</td>
                            <td>{flight.MinPrice}</td>
                            <td>{flight.Direct ? "Yes" : "No"}</td>
                            <td>{flight.OutboundLeg.CarrierIds}</td>
                            <td>{flight.OutboundLeg.DepartureDate.slice(0, 10)}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Flights;