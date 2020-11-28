import logo from './logo.svg';
import './App.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Banner from './components/banner/Banner';
import ImageInput from './components/imageInput/ImageInput';
import {particlesParams} from './particles-config';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Navigation></Navigation>
        <Logo></Logo>
        <Banner></Banner>
        <ImageInput/>
        <Particles className="background-particles" params={particlesParams}/>
      </div>
  );
  }
}

export default App;
