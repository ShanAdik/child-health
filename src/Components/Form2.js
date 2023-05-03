import React,{ useState } from 'react'

function Form2() {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const handleClick1 = () => {
    setActive1(!active1);
    };
    const handleClick2 = () => {
    setActive2(!active2);
    };
    const handleClick3 = () => {
    setActive3(!active3);
    };
    const handleClick4 = () => {
    setActive4(!active4);
    };
    const handleClick5 = () => {
    setActive5(!active5);
    };   
    const handleClick6 = () => {
    setActive6(!active6);
    }; 
return (
    <div className="form1">
    <div>
        <h3>Child needs help with </h3>
    </div>
    <div>
    <button
        onClick={handleClick1}
        style={{ backgroundColor: active1 ? "skyblue" : "white" }}
        
    >
        Speech and Communication
    </button>
    </div>
    <div>
    <button
        onClick={handleClick2}
        style={{ backgroundColor: active2 ? "skyblue" : "white" }}
        
    >
        Food and Nutrition
    </button>
    </div>
    <div>
    <button
        onClick={handleClick3}
        style={{ backgroundColor: active3 ? "skyblue" : "white" }}
        
    >
        Developmental Issues
    </button>
    </div>
    <div>
    <button
        onClick={handleClick4}
        style={{ backgroundColor: active4 ? "skyblue" : "white" }}
        
    >
        Skin,Allergies,Sleep...
    </button>
    </div>
    <div>
    <button
        onClick={handleClick5}
        style={{ backgroundColor: active5 ? "skyblue" : "white" }}
        
    >
        Gross motor and Movement
    </button>
    </div>
    <div>
    <button
        onClick={handleClick6}
        style={{ backgroundColor: active6 ? "skyblue" : "white" }}
        
    >
        Behaviour and social
    </button>
    </div>
    </div>
)
}

export default Form2