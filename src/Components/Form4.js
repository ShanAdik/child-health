import React,{useState } from 'react'

function Form4() {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const handleClick1 = () => {
    setActive1(!active1);
    };
    const handleClick2 = () => {
    setActive2(!active2);
    };
  return (
    <div className="form1">
        <div>
            <h3>Scedule an Appointment.</h3>
        </div>
        <div>
            <h5>Select Date</h5>
            <input type="date" />
        </div>
        <div>
            <h5>Select Time</h5>
            <input type="time" />
        </div>
        <div>
    <button
        onClick={handleClick1}
        style={{ backgroundColor: active1 ? "skyblue" : "white" }}
        
    >
        Video Call
    </button>
    </div>
    <div>
    <button
        onClick={handleClick2}
        style={{ backgroundColor: active2 ? "skyblue" : "white" }}
        
    >
        Audio Call
    </button>
    </div>
    </div>
  )
}

export default Form4