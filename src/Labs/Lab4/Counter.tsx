import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div id="wd-counter-use-state">

            <h2>Counter:{count}</h2>
            <button onClick={() => { setCount(count + 1); console.log(count) }} className="btn btn-primary" id="wd-counter-up-click" style={{ backgroundColor: 'green', color: '#fff' }}>Up</button>
            <button onClick={() => { setCount(count - 1); console.log(count) }} className="btn btn-primary" id="wd-counter-down-click" style={{ backgroundColor: 'red', color: '#fff' }}>Down</button>
        </div>

    );

}