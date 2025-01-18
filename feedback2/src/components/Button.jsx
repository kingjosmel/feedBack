import { useState } from "react";

export default function Button () {
    const [toggled, setToggled] = useState(false);
    return (
        <button className={`toggle-btn ${toggled ? 'toggled' : ''}`} onClick={() => setToggled(!toggled)}>
        <div className="thumb"></div>
      </button>
    )
}