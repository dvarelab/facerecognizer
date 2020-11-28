import Tilt from 'react-tilt';
import logo from '../../images/brain-icon.png'
import './Logo.css'

function Logo() {
  return (
    <Tilt className="Logo Tilt bg-gray f-center ml4 pointer" options={{ max : 45 }} style={{ height: 125, width: 125 }} >
 		<div className="Tilt-inner "> <img src={logo} alt="brain-logo" /> </div>
	</Tilt>
  );
}

export default Logo;