const hello = () => {
    alert('Hello, world!');
};

const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button onClick={hello} id="wd-hello-world-click">Hello World!</button>
            <button onClick={() => lifeIs('Good!')}>Life is Good!</button>
            <button onClick={() => lifeIs('Great!')}>Life is Great!</button>
        </div>
    )
};