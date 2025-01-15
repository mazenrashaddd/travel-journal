import "./Header.css";
import globeIcon from '../../assets/icons/earth2.png'

export default function Header() {
  return (
    <nav className = 'navbar'>
        <img className= "globeIcon" src={globeIcon} alt="globe icon" />
        <h3>Travel Journal</h3>
    </nav>
  );
}
