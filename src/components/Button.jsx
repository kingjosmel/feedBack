import { useState } from "react";

export default function Button ({setReverse, reverse}) {
    const handleToggle = () => {
        setReverse(!reverse)
    }
    const [toggled, setToggled] = useState(false);
    return (
        <button className={`toggle-btn ${toggled ? 'toggled' : ''}`} onClick={() => setToggled(!toggled)} onClickCapture={handleToggle}>
        <div className="thumb"></div>
      </button>
    )
}