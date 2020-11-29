
import Tilt from 'react-tilt';

function FaceRecognition({imageURL}) {
  return (
    <div className="f-center">
    	<Tilt className="Tilt  mt4 pointer" options={{ max : 25 }} >
 			<div className="Tilt-inner "> 
 				<img src={imageURL} alt="face-image" width="400px" height="auto" />
 			</div>
		</Tilt>
    </div>
    
  );
}

export default FaceRecognition;