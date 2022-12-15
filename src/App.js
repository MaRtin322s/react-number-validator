import { useMemo, useState } from "react";
import "./App.css";

function App() {
    const [text, setText] = useState("");

    const checkIfValid = (string) => {
        const numbers = /^\d+$/;
        return numbers.test(string);
    };

    const onChange = (ev) => {
        setText(ev.target.value);
    }

    const validator = useMemo(() => checkIfValid(text), [text]);

    return (
        <div className="App">
            <div className="control has-icons-right">
                <input
                    className="input is-large"
                    type="text"
                    placeholder="Enter number..."
                    value={text}
                    onChange={(ev) => onChange(ev)}
                />
                <span className="icon is-small is-right">
                    <i className={validator ? "fa-check" : "fas fa-times"} />
                </span>
            </div>
        </div>
    );
}

export default App;

