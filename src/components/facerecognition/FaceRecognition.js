
import Tilt from 'react-tilt';
import './FaceRecognition.css';
function FaceRecognition({imageURL, box, faceData}) {
	let imageContent = <div></div>;
	if( faceData ) {
		imageContent = <div className="flex justify-center items-center">
			<Tilt className="Tilt  mt4 pointer" options={{ max : 25 }} >
	 			<div className="Tilt-inner "> 
	 				<img id="face-img" src={imageURL} alt="face-image" width="400px" height="auto" />
	 				<div class="boundary" style={box}></div>
	 			</div>
			</Tilt>
			<div className="faceData ml5">
				<h3> Age: {faceData.age_appearance.value}</h3>
				<h3> Gender: {faceData.gender_appearance.value}</h3>
				<h3> Culture: {faceData.multicultural_appearance.value}</h3>
			</div>
		</div>
	} else {
		 imageContent = <div>
			<Tilt className="Tilt  mt4 pointer" options={{ max : 25 }} >
	 			<div className="Tilt-inner "> 
	 				<img id="face-img" src={imageURL} alt="face-image" width="400px" height="auto" />
	 				<div class="boundary" style={box}></div>
	 			</div>
			</Tilt>
			</div>
	}
  return (
    <div className="f-center">
    	{imageContent}
    </div>
    
  );
}

export default FaceRecognition;