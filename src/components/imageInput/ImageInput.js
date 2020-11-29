import './ImageInput.css';

function ImageInput({onInputChange, onInputSubmit}) {
  return (
    <form className="ImageInput">
    	<div className="ImageInput__container w-40 shadow-1 br3">
    		<input className="w-80" type="text" placeholder="URL de la imagen" onChange={onInputChange} />
    		<button className="w-20 white bg-light-purple grow" type="button" onClick={onInputSubmit} >Analizar</button>
    	</div>
    </form>
  );
}

export default ImageInput;