import './ImageInput.css';

function ImageInput() {
  return (
    <form className="ImageInput">
    	<div className="ImageInput__container w-40 shadow-1 br3">
    		<input className="w-80" type="text" placeholder="URL de la imagen" />
    		<button className="w-20 link white bg-light-purple grow" >Analizar</button>
    	</div>
    </form>
  );
}

export default ImageInput;