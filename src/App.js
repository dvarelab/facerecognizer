import logo from './logo.svg';
import './App.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Banner from './components/banner/Banner';
import ImageInput from './components/imageInput/ImageInput';
import FaceRecognition from './components/facerecognition/FaceRecognition'
import {particlesParams} from './particles-config';


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			'input': '',
			'imageURL': 'http://pngimg.com/uploads/face/face_PNG5645.png'
		}

	}

	onInputChange = (event) => {
		this.setState({'input': event.target.value});
	}

	onInputSubmit = () => {
		this.setState({'imageURL': this.state.input})
	}

  	render() {
	    return(
	      <div className="App">
	        
	        <Navigation></Navigation>
	        <Logo></Logo>
	        <Banner></Banner>
	        <ImageInput onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit} />
	        <FaceRecognition imageURL={this.state.imageURL} />
	        <Particles className="background-particles" params={particlesParams}/> 


	      </div>
	  );
  }
}

export default App;
