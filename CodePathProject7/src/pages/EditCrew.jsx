import supabaseService from "../database/supabaseService";
import { useState } from "react";
import { useData } from '../database/DataProvider.jsx';
import './pageStyles/editCrew.css';
import { useNavigate } from 'react-router-dom';

function EditCrew() {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [speed, setSpeed] = useState('');
    const navigate = useNavigate();

    function handleNameChange(e) {
        console.log(e.target.value)
        setName(e.target.value);
    }

    function handleColorChange(e) {
        console.log(e.target.value);
        setColor(e.target.value);
    }

    function handleSpeedChange(e) {
        console.log(e.target.value);
        setSpeed(e.target.value);
    }
    
    const { data } = useData();

    function handleSubmitEdit(e) {
        e.preventDefault();
        console.log(name);
        console.log(color);
        console.log(speed);
        let crew = {
            id: data.id,
            name: name,
            color: color,
            speed: parseInt(speed),
        }
        supabaseService.editCrew(crew);
        navigate('/viewCrew');
    }

    function handleSubmitDelete(e) {
        e.preventDefault();
        console.log(name);
        console.log(color);
        console.log(speed);
        let crew = {
            id: data.id,
            name: name,
            color: color,
            speed: parseInt(speed),
        }
        supabaseService.deleteCrew(crew);
        navigate('/viewCrew');
    }

    return (
        <div className="create-form">
            <h1>Edit Crew Member</h1>
            <div className="Previous-Crew">
                <h4>Old Name: {data.Name}</h4>
                <h4>Old Color: {data.Color}</h4>
                <h4>Old Speed: {data.Speed}</h4>
            </div>
            <div className="input-container">
                <input type="text" placeholder='Enter New Name' value={name} onChange={handleNameChange}/>
                <input type="text" placeholder='Enter New Speed' value={speed} onChange={handleSpeedChange}/>
                <li className="color">
                    <input type="radio" id="red" name="color" value="Red" onChange={handleColorChange}/>
                    <label htmlFor="red">Red</label>
                    <input type="radio" id="blue" name="color" value="Blue" onChange={handleColorChange}/>
                    <label htmlFor="blue">Blue</label>
                    <input type="radio" id="green" name="color" value="Green" onChange={handleColorChange}/>
                    <label htmlFor="green">Green</label>
                    <input type="radio" id="yellow" name="color" value="Yellow" onChange={handleColorChange}/>
                    <label htmlFor="yellow">Yellow</label>
                    <input type="radio" id="orange" name="color" value="Orange" onChange={handleColorChange}/>
                    <label htmlFor="orange">Orange</label>
                    <input type="radio" id="brown" name="color" value="Brown" onChange={handleColorChange}/>
                    <label htmlFor="brown">Brown</label>
                    <input type="radio" id="black" name="color" value="Black" onChange={handleColorChange}/>
                    <label htmlFor="black">Black</label>
                    <input type="radio" id="white" name="color" value="White" onChange={handleColorChange}/>
                    <label htmlFor="white">White</label>
                    <input type="radio" id="pink" name="color" value="Pink" onChange={handleColorChange}/>
                    <label htmlFor="pink">Pink</label>
                    <input type="radio" id="cyan" name="color" value="Cyan" onChange={handleColorChange}/>
                    <label htmlFor="cyan">Cyan</label>
                </li>
                <div className="button-container">
                    <button type="submit" onClick={handleSubmitEdit}>Update Crew</button>
                    <button type="submit" onClick={handleSubmitDelete}>Delete Crew</button>
                </div>
            </div>
        </div>
    );

}

export default EditCrew;