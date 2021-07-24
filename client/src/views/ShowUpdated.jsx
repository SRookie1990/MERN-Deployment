import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ShowUpdated = ({id}) => {
    
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState([]);
    const [skill2, setSkill2] = useState([]);
    const [skill3, setSkill3] = useState([]);
    const [dbErrors, setDbErrors] = useState([]);

    useEffect(() => {
        // Getting the current vals by id
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                console.log(res.data.skill);
            })
            // Bonus Feature+++++++++++++++++++++++++++++
            .catch(err => navigate("/404"))
    }, [id])

    const updateHandler = e => {
        e.preventDefault();
        // Setting the new vals on form submission
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => {
            console.log(res)
            navigate("/");
        })
        .catch((err) => {
            const {errors} = err.response.data;
            const messages = Object.keys(errors).map(error => errors[error].message);
            // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            // const errorArr = []; // Define a temp error array to push the messages in
            // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            //     errorArr.push(errorResponse[key].message)
            // }
            // // Set Errors
            setDbErrors(messages);
          });
    }

    return (
        <div>
            {dbErrors.map((err, idx) => <p style={{color: "red"}} key={idx}>{err}</p>)}
           
            <h1>Pet Shelter</h1>

            <h2>Edit {name}</h2>

            <form onSubmit={updateHandler}>
                <p>  
                    <label htmlFor="">Pet Name:</label>&#160;&#160;&#160;
                    <input type="text" onChange={ (e) => setName(e.target.value) } value={name} />
                </p>
                {/* Client-side validation */}
                {
                    (name.length !== 0 && name.length < 3) ?
                    <p style={{color:'red'}}>Client Validation Error: Author's name must be atleast 3 characters!</p> :
                        ''
                }
                <p>  
                    <label htmlFor="">Pet Type:</label>&#160;&#160;&#160;
                    <input type="text" onChange={ (e) => setType(e.target.value) } value={type} />
                </p>
                <p>  
                    <label htmlFor="">Pet Description:</label>&#160;&#160;&#160;
                    <input type="text" onChange={ (e) => setDescription(e.target.value) } value={description} />
                </p>

                <h3>Skills (optional):</h3>
                
                <p>  
                    <label htmlFor="">Skill 1:</label>&#160;&#160;&#160;
                    <input type="text" onChange={ (e) => setSkill1(e.target.value) } value={skill1} />
                </p>
                <p>  
                    <label htmlFor="">Skill 2:</label>&#160;&#160;&#160;
                    <input type="text" onChange={ (e) => setSkill2(e.target.value) } value={skill2} />
                </p>
                <p>  
                    <label htmlFor="">Skill 3:</label>&#160;&#160;&#160;
                    <input type="text" onChange={ (e) => setSkill3(e.target.value) } value={skill3} />
                </p>
                {/* Link tag inside around a button tag */}
                <Link to={"/"}><button>Cancel</button></Link>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ShowUpdated;
