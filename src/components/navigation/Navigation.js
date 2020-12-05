import './Navigation.css';

function Navigation({isSigned, onChangeRoute}) {
	if(isSigned){
		  return (
		    <nav className="Navigation flex justify-end f4 mr3">
		      <p className="dim pointer link" onClick={()=>onChangeRoute('signin')}> Cerrar sessión</p>
		    </nav>
		    );

	} else {
		return(
		<nav className="Navigation flex justify-end f4 mr3">
		      <p className="dim pointer link" onClick={()=>onChangeRoute('signin')}> Login</p>
		      <p className="dim pointer link ml4" onClick={()=>onChangeRoute('register')} > Register</p>
		 </nav>
		 );
	}
  
}

export default Navigation;