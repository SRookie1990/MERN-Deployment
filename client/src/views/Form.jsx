import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Form = (props) => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [likes, setLikes] = useState(0)
  const [dbErrors, setDbErrors] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/pets", {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        likes
      })
      .then((res) => {
        console.log(res);
        // Set back to default after creation
        setName("");
        // Navigate back to Main.jsx
        navigate("/");
      })
      .catch((err) => {
        const { errors } = err.response.data;
        const messages = Object.keys(errors).map((error) => errors[error].message);
        // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        // const errorArr = []; // Define a temp error array to push the messages in
        // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        //     errorArr.push(errorResponse[key].message)
        // }
        // Set Errors
        setDbErrors(messages);
      });
  };

  // Cancel submission and go back to the Main.jsx
  //   const cancelSubmission = () => {
  //     navigate("/");
  //   };
  // Used Linked button instead

  return (
    <div>
      {dbErrors.map((err, idx) => (<p style={{ color: "red" }} key={idx}>{err}</p>))}

      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="">Pet Name:</label>&#160;&#160;&#160;
          <input type="text" onChange={(e) => setName(e.target.value)}value={name}/>
        </p>
        {/* Client-side validation */}
        {
            (name.length !== 0 && name.length < 3) ?
            <p style={{color:'red'}}>Client Validation Error: Author's name must be atleast 3 characters!</p> :
                ''
          }
        <p>
          <label htmlFor="">Pet Type:</label>&#160;&#160;&#160;
          <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
        </p>
        <p>
          <label htmlFor="">Pet Description:</label>&#160;&#160;&#160;
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </p>

        <h3>Skills (optional):</h3>

        <p>
          <label htmlFor="">Skill 1:</label>&#160;&#160;&#160;
          <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
        </p>
        <p>
          <label htmlFor="">Skill 2:</label>&#160;&#160;&#160;
          <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2}/>
        </p>
        <p>
          <label htmlFor="">Skill 3:</label>&#160;&#160;&#160;
          <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3}/>
        </p>

        {/* Link tag inside around a button tag */}
        <Link to={"/"}><button>Cancel</button></Link>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
