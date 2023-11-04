import superbaseService from '../database/supabaseService';
import { useState, useEffect } from 'react';
import CrewCard from '../components/CrewCard';
import './pageStyles/ViewCrew.css';

function ViewCrew() {
    const [crews, setCrews] = useState([]); // [{}] array of objects

    useEffect(() => {
      superbaseService.getCrew().then((data) => {
        setCrews(data);
      });
    }, []);

    return (
      <div className='crewContainer-main'>
        <h1>View Crew</h1>
        { crews ? <div className='crewContainer'>
          {crews.map((crew) => (
            <CrewCard
              key={crew.id}
              id={crew.id}
              Name={crew.name}
              Color={crew.color}
              Speed={crew.speed}
            />
          ))}
        </div> : <div>No Crews</div> }

      </div>
    );
  }

  export default ViewCrew;