import React from 'react'

function Form1() {
  return (
    <div className="form1">
        <div>
            <h3>Get Your Questions Answered</h3>
            <h3>by our counsaltants</h3>
            <h3>from your home</h3>
        </div>
        <div>
            <h5>Child's Name</h5>
            <input type="text" placeholder="Alice" />
        </div>
        <div>
            <h5>Child's Date of Birth</h5>
            <input type="date" />
        </div>
        <div>
            <h5>Born before 37 weeks?</h5>
            <input type="radio" />NO
            <input type="radio" />YES
        </div>
        <div>
            <h5>Child Weight</h5>
            <input type="text" placeholder="0.0" />
            <h5>Weight Unit</h5>
                <select>
                    <option>kg</option>
                    <option>pounds</option>
                </select>
        </div>
        <div>
            <h5>Child Height</h5>
            <input type="text" placeholder="0.0" />
            <h5>Height Unit</h5>
                <select>
                    <option>cm</option>
                    <option>feet</option>
                </select>
        </div>
        <div>
            <h5>Email Address</h5>
            <input type="email" placeholder="Alice@example.com" />
        </div>
        <div>
            <h5>Phone Number</h5>
            <input type="tel" placeholder="0123456789" />
        </div>
    </div>
  )
}

export default Form1