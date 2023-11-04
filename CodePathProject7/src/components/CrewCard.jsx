import PropTypes from 'prop-types';
import './componentStyles/CrewCard.css';
import { useNavigate } from 'react-router-dom';
import { useData } from '../database/DataProvider.jsx';

function CrewCard(props) {

    const navigate = useNavigate();

    const { setData } = useData();

    const goToCrewDetail = () => {
        console.log(props.id);
        console.log(props.Name);
        console.log(props.Color);
        console.log(props.Speed);

        setData({
            id: props.id,
            Name: props.Name,
            Color: props.Color,
            Speed: props.Speed,
        });

        navigate('/crewDetail/'+props.id);
    }

    return (
        <div className='crewCardContainer' onClick={goToCrewDetail}>
            {/* src/assets/Red.png */}
            <img src={'src/assets/'+props.Color+'.png'}></img>
            <h1>Name: {props.Name}</h1>
            <h1>Color: {props.Color}</h1>
            <h1>Speed: {props.Speed}</h1>
        </div>
    )
}

CrewCard.propTypes = {
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
    Color: PropTypes.string.isRequired,
    Speed: PropTypes.number.isRequired,
};

export default CrewCard;