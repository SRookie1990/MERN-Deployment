import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/List';

const Main = () => {

    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    return (
        <>
            <List pets={pets} />
        </>
    )
}

export default Main;