import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const List = ({ pets, setPets }) => {
  // console.log(pets.petName);

  // Delete onClick function
  const deletePet = (deletedID) => {
    console.log(deletedID);

    axios
      .delete(`http://localhost:8000/api/pets/${deletedID}`)
      .then((res) => {
        console.log(res.data);
        // Navigates back home
        navigate("/");
        // remove product from the DOM after success
        setPets(pets.filter((pet) => pet._id !== deletedID));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Pet Shelter</h1>

      <Link to={"/pets/new"}>Add an pet</Link>
      <br />
      <br />

      <h2>These pets are looking for a good home</h2> 

      {pets.map((pet) => {
        return (
          <table style={{margin: "auto"}} key={pet._id}>
            <thead>
                <tr>
                    <th>Pet</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
              <tr>
                  <td style={{textAlign: "left"}}>
                    {pet.name}
                  </td>
                  <td>
                    {pet.type}
                  </td>
                  <td>
                    <Link to={`/pets/${pet._id}`}>Details</Link> |&#160;
                    <Link to={`/pets/edit/${pet._id}`}>Edit</Link> 
                  </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default List;
