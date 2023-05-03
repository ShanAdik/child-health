import React, { useState } from "react";
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from "./Form4";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Form1", "Form2", "Form3", "Form4"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Form1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Form2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2){
      return <Form3 formData={formData} setFormData={setFormData} />;
    } else {
        return <Form4 formData={formData} setFormData={setFormData} />;

    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "25%" : page == 1 ? "50%" : page == 2 ? "75%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;