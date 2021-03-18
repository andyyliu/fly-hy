import React, {useState} from 'react';
import './AirportInfo.css';
import Flights from "./Flights";

function AirportInfo() { 
    const [flights,setFlights] = useState([])
    const [showPlaces,setShowPlaces] = useState(false)
    const [currency,setCurrency] = useState("")
    const [from,setFrom] = useState("")
    const [to,setTo] = useState("")
    const [inbound,setInbound] = useState("")
    const [outbound,setOutbound] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
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
            console.log(response.Quotes)
            setFlights(response.Quotes)
        }
        fetchMyAPI()
        setShowPlaces(true)
    }

    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Currency:</label>
                <input id="queryInput" value={currency} onChange={e => setCurrency(e.target.value)} required/>
                <label htmlFor="queryInput">Origin:</label>
                <input id="queryInput" value={from} onChange={e => setFrom(e.target.value)} required/>
                <label htmlFor="queryInput">Destination:</label>
                <input id="queryInput" value={to} onChange={e => setTo(e.target.value)} required/>
                <label htmlFor="queryInput">Start Date:</label>
                <input id="queryInput" value={inbound} onChange={e => setInbound(e.target.value)} required/>
                <label htmlFor="queryInput">End Date:</label>
                <input id="queryInput" value={outbound} onChange={e => setOutbound(e.target.value)} />
                <button className="search">Submit</button>
           </form>
           { showPlaces ? <Flights flights={flights}></Flights> : <></>}
        </div>
    )
}

export default AirportInfo;