import React, { useState } from 'react';
import './FlightInfo.css';
import Flights from "./Flights";

function AirportInfo() {
    
    // Set variables to use for API call
    const [flights, setFlights] = useState([])
    const [showPlaces, setShowPlaces] = useState(false)
    const [currency, setCurrency] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [inbound, setInbound] = useState("")
    const [outbound, setOutbound] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {

            // Call Skyscanner API
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": "359296051emshb0fc111a532c1adp17946ejsn7d7cec06afca",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            let trueOutbound = (outbound ? "/" + outbound : "")
            let endpoint = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/" + currency + "/en-US/" + from + "/" + to + "/" + inbound + trueOutbound
            let response = await fetch(endpoint, reqOptions)
            response = await response.json()
            setFlights(response.Quotes)
        }
        fetchMyAPI()
        setShowPlaces(true)
    }

    // Display results in table format
    return (
        <div className="airportinfo">
            <form onSubmit={handleSubmit}>
                <table id="formSubmit">
                    <tbody>
                        <tr>
                            <td><label htmlFor="queryInput">Currency:</label></td>
                            <td><input id="queryInput" value={currency} onChange={e => setCurrency(e.target.value)} placeholder="Enter currency symbol (ex. USD):" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="queryInput">Origin:</label></td>
                            <td><input id="queryInput" value={from} onChange={e => setFrom(e.target.value)} placeholder="Enter airport code (ex. JFK-sky):" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="queryInput">Destination:</label></td>
                            <td><input id="queryInput" value={to} onChange={e => setTo(e.target.value)} placeholder="Enter airport code (ex. LAX-sky):" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="queryInput">Start Date:</label></td>
                            <td><input id="queryInput" value={inbound} onChange={e => setInbound(e.target.value)} placeholder="Enter date in YYYY-MM-DD format:" required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="queryInput">End Date:</label></td>
                            <td><input id="queryInput" value={outbound} onChange={e => setOutbound(e.target.value)} placeholder="Enter date in YYYY-MM-DD format:" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button className="search">Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            { showPlaces ? <Flights flights={flights}></Flights> : <></>}
        </div>
    )
}

export default AirportInfo;