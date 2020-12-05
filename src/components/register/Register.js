

function Register({onChangeRoute}) {
  return (
    <div className="pa4 black-80 mw6 center br3 pa3 pa4-ns mv3 ba b--black-10 tc f5 shadow-5 ba bw2 b--black-90">
		  <div className="measure center f-center">
		  <div>
		    <fieldset id="register" className="ba b--transparent ph0 mh0 mw5">
		      <legend className="f2 fw6 ph0 mh0">Register</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy " htmlFor="user-name">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="user-name"  id="r-user-name" />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy " htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="r-email-address" />
		      </div>
		      <div className="mv3 ">
		        <label className="db fw6 lh-copy " htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="r-password" />
		      </div>
		    </fieldset>
		    <div className="">
		      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={()=>onChangeRoute('home')} value="Register" />
		    </div>
		    </div>
		  </div>
</div>
  );
}

export default Register;