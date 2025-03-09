import { useState } from "react";

export default function EventObject() {
    const [event, setEvent] = useState(null);

    const handleClick = (e: any) => {
        e.target = e.target.outerHTML; // e.target is a circular structure, so we need to convert it to a string
        delete e.view;
        setEvent(e);
    };

    return (
        <div>
            <h2>Event Object</h2>
            <button onClick={(e) => handleClick(e)}
                className="btn btn-primary"
                id="wd-display-event-obj-click">
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre> //JSON.stringify() is used to convert a JavaScript object to a string
            <hr />
        </div>)

}