import { Link } from 'react-router-dom';
import '../styles/gamepagebutton.css';

const GamepageButton = ({ buttonText, link }) => {
  return (
    <Link to={link}>
      <button className="gamepage-btn">{buttonText}</button>
    </Link>
  );
};

export default GamepageButton;