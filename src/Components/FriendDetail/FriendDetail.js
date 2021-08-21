import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';


const FriendDetail = () => {
    const {id} = useParams()

    const [friend, setFriend] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data=> {
            setFriend(data)
            setLoading(false)
        })
        .catch(err => console.error(err))
    }, [])

    
    return (
        <div>
       
        {
            loading ? (<h1> <center>Loading..</center> </h1>) :(<div>
            <p>Friend id: {id}        <NavLink to='/' ><button>Home</button></NavLink></p>
            <h3>Name: {friend.name}</h3>
            <h3>Username: {friend.username}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>City: {friend.address?.city}</h3>
            <h3>Zipcode: {friend.address?.zipcode}</h3>
            <h3>Location<p>lat: {friend.address?.geo?.lat}</p><p>lng: {friend.address?.geo?.lng}</p> </h3>
             </div>)
        }

        </div>
    );
};

export default FriendDetail;