import { Outlet } from 'react-router-dom';
import './pageStyles/Layout.css';
import { useNavigate } from 'react-router-dom';

function Layout() {

    const navigate = useNavigate();

    function goToHome() {
        navigate('/');
    }

    function goToCreateCrew() {
        navigate('/createCrew');
    }

    function goToViewCrew() {
        navigate('/viewCrew');
    }

    return (
        <div className='layout'>
            <li className='menu'>
                {/* each of these should link to a new page */}
                <h1 onClick={goToHome}>Home</h1>
                <h1 onClick={goToCreateCrew}>Create Crew</h1>
                <h1 onClick={goToViewCrew}>View Crew</h1>
            </li>
            <Outlet />
        </div>
    );
}

export default Layout;