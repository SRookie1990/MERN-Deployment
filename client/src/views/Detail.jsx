import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Detail = ({id}) => {

    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
              setPet(res.data);
              setLikes(res.data);
            })
    }, [id]);

    // Delete onClick function
  const adoptPet = (deletedID) => {
    console.log(deletedID);

    axios.delete(`http://localhost:8000/api/pets/${deletedID}`)
      .then((res) => {
        console.log(res.data);
        // Navigates back home
        navigate("/");
        // remove product from the DOM after success
        setPet(pet.filter((x) => x._id !== deletedID));
      })
      .catch((err) => console.log(err));
  };
    //Like onClick function
  const likePet = (e) => {
    // e.preventDefault(id);
    // console.log(likeID);

    axios.put(`http://localhost:8000/api/pets/${id}`,{
            likes
        })
      .then((res) => console.log(res.data.likes))
      .catch((err) => console.log(err));
  };
  

    return (
        <div>
            <h1>Pet Shelter</h1>

            <h2>Details about: {pet.name}</h2>

            <button style={{backgroundColor: 'red', color: 'white'}} onClick={(e) => {adoptPet(pet._id)}}>Adopt {pet.name}</button>

            <p>Pet Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills:</p>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
            <br />
            <br />
            <br />
            <button style={{backgroundColor: 'green', color: 'white'}} onClick={(e) => likePet(setLikes(likes + 1))}>Like {pet.name}</button>
            <p>{pet.likes} like(s)</p>
            <Link to="/">back to home</Link> |&#160;
            <Link to={"/pets/edit/" + pet._id }>Edit</Link>
            {/* <button onClick={ (e) => {deletePet(pet._id)}}>Delete</button>  */}
        </div>
    )
}

export default Detail;