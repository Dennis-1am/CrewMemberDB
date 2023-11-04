import { useData } from '../database/DataProvider.jsx';
import './pageStyles/CrewDetail.css';
import { useNavigate } from 'react-router-dom';

const CrewDetail = () => {

    const { data } = useData();
    const navigate = useNavigate();
    const name = data.Name;
    const color = data.Color;
    const speed = data.Speed;

    function goToEditCrew() {
        navigate('/editCrew/'+data.id);
    }

    return (
        <div className='detailed-info'>
            <h1>{name}</h1>
            <h2>Stats:</h2>
            <p>Color: {color}</p>
            <p>Speed: {speed}</p>
            {
                data.Speed >= 100 ? <p>{name} is very faster than 100mph</p> : <p>{name} is slower than 100mph</p>
            }
            <button onClick={goToEditCrew}>
                Edit Crew Member
            </button>
        </div>
    );
};

export default CrewDetail;
