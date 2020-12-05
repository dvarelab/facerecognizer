import logo from './logo.svg';
import './App.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Banner from './components/banner/Banner';
import ImageInput from './components/imageInput/ImageInput';
import FaceRecognition from './components/facerecognition/FaceRecognition'
import Signin from './components/Signin/Signin';
import Register from './components/register/Register'
import {particlesParams} from './particles-config';
import Clarifai from 'clarifai'
import FadeIn from 'react-fade-in';
 
const app = new Clarifai.App({
 apiKey: '3d6f4030053340ad8346ca7432fd83ff'
});

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			'input': '',
			'imageURL': 'http://pngimg.com/uploads/face/face_PNG5645.png',
			'box': {},
			'route': 'signin',
			'isSigned': false
		}

	}

	onInputChange = (event) => {
		this.setState({'input': event.target.value});
	}

	resetState = () => {
		this.setState({
			'input': '',
			'imageURL': 'http://pngimg.com/uploads/face/face_PNG5645.png',
			'box': {},
			'route': 'signin',
			'isSigned': false,
			'faceData': null
			});
	}

	paintSquare = (boundary) => {
		const imgWidth = document.getElementById("face-img").width;
		const imgHeight = document.getElementById("face-img").height;
		const box = {};
		box.top = boundary.top_row * imgHeight;
		box.bottom = (1 - boundary.bottom_row) * imgHeight;
		box.left = boundary.left_col * imgWidth;
		box.right = ( 1- boundary.right_col ) * imgWidth;
		this.setState({box});
	}

	calculateFaceData = (concepts) => {
		let faceData = {
			'age_appearance': { prob: 0, value: ''},
			'gender_appearance': { prob: 0, value: ''},
			'multicultural_appearance': { prob: 0, value: ''}
		};
		for (let concept of concepts) {
			if(concept.value > faceData[concept.vocab_id].prob){
				faceData[concept.vocab_id].prob = concept.value;
				faceData[concept.vocab_id].value = concept.name;
				console.log(concept);
			}
		}
		return faceData;

	}
	onInputSubmit = () => {
		console.log("click");
		this.setState({'imageURL': this.state.input})
		app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
		  .then((response) => {
		  	console.log("Respuesta");
		  	this.paintSquare(response.outputs[0].data.regions[0].region_info.bounding_box);
		  	const faceData = this.calculateFaceData(response.outputs[0].data.regions[0].data.concepts);
		  	console.log("FaceData",faceData)
		  	this.setState({faceData})
		  })
		  .catch((err)=>{
		  	console.log(err);
		  });
	}

	onChangeRoute = (route) => {
		route === 'home' ? this.setState({isSigned: true}) : this.resetState(); 
		this.setState({route});
	}

  	render() {
  		let content;
  		if ( this.state.route === 'signin' ){
  			content = <Signin onChangeRoute={this.onChangeRoute} />
  		} else if( this.state.route === 'register') {
  			content = <Register onChangeRoute={this.onChangeRoute} />
  		} else {
  			content = <div>
					        <Logo></Logo>
					        <Banner></Banner>
					        <ImageInput onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit} />
					        <FaceRecognition imageURL={this.state.imageURL} box={this.state.box} faceData={this.state.faceData}/>
					       
					   </div>
  		}
	    return(
	      <div className="App">
	      <FadeIn>
	        <Navigation isSigned={this.state.isSigned} onChangeRoute={this.onChangeRoute}></Navigation>
	        {content}
	       </FadeIn>
	         <Particles className="background-particles" params={particlesParams}/>
	      </div>
	  );
  }
}

export default App;
