import React from 'react';
import './Flights.css';

function Flights(props) {
    return (
        <div className="flights">
            <table id="flightResults">
                <thead>
                    <tr>
                        <th>Flight ID</th>
                        <th>Price</th>
                        <th>Direct Flight</th>
                    </tr>
                </thead>
                <tbody>
                    {props.flights.map(flight => {
                        return (<tr id={flight.QuoteId}>
                            <th>{flight.QuoteId}</th>
                            <th>{flight.MinPrice}</th>
                            <th>{flight.Direct ? "Yes" : "No"}</th>
                        </tr>)
                    })};
                </tbody>
            </table>
        </div>
    )
}

export default Flights;