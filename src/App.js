import { useMemo, useState } from "react";
import "./App.css";

function App() {
    const [input, setInput] = useState("");

    const checkIfValid = (string) => {
        const numbers = /^\d+$/;
        return numbers.test(Number(string));
    };

    const onChange = (ev) => {
        setInput(ev.target.value);
    }

    const validator = useMemo(() => {
        return checkIfValid(input);
    }, [input]);

    console.log(validator);

    return (
        <div className="App">
            <div className="control has-icons-right">
                <input
                    className="input is-large"
                    type="text"
                    placeholder="Enter number..."
                    value={input}
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

