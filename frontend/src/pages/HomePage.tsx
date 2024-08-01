import { Link } from 'react-router-dom';
import './HomePage.css';
import TileButton from '../shared/components/UIElements/TileButton';
import '../shared/components/UIElements/TileButton.css';
import '../styles.css';

const HomePage = () => {
  return (
    <div className="tile-container">
      <div className="tile--patient-experience">
        <Link to="/patient-experience">
          <TileButton>Patient Experience</TileButton>
        </Link>
      </div>
      <div className="tile--pharmacy">
        <Link to="/pharmacy">
          <TileButton>Pharmacy</TileButton>
        </Link>
      </div>
      <div className="tile--safety-news">
        <Link to="/safety-news">
          <TileButton>Safety News</TileButton>
        </Link>
      </div>
      <div className="tile--education">
        <Link to="/education">
          <TileButton>Education</TileButton>
        </Link>
      </div>
      <div className="tile--audit-qi">
        <Link to="/audit-qi">
          <TileButton>Audit & QI</TileButton>
        </Link>
      </div>
      <div className="tile--learning-actions">
        <Link to="/learning-actions">
          <TileButton>Learning & Actions</TileButton>
        </Link>
      </div>
      <div className="tile--infection-control">
        <Link to="/infection-control">
          <TileButton>Infection Control</TileButton>
        </Link>
      </div>
      <div className="tile--icu-examplar">
        <Link to="/icu-examplar">
          <TileButton>ICU Examplar</TileButton>
        </Link>
      </div>
      <div className="tile--headlines">
        <Link to="/headlines">
          <TileButton>Headlines</TileButton>
        </Link>
      </div>
      <div className="tile--quality-safety">
        <Link to="/quality-safety">
          <TileButton>Quality & Safety</TileButton>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
