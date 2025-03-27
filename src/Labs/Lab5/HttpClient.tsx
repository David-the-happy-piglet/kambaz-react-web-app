import { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;// REMOTE_SERVER is the remote server that is used to fetch the data from the server

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");


    const fetchWelcomeOnClick = async () => { // fetchWelcomeOnClick is an asynchronous function that fetches the welcome message from the server
        const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`); // axios.get is used to fetch the data from the server
        setWelcomeOnClick(response.data); // setWelcomeOnClick is used to set the welcome message to the state
    };

    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3> <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button> <br />
            Response from server: <b>{welcomeOnClick}</b>

            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />
        </div>
    );
}
