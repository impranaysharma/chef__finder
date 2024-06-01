import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div><div class="whole" id='login'>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" class="input"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true" class="label">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" class="input"/>
					<input type="email" name="email" placeholder="Email" required="" class="input"/>
          <input type="number" name="broj" placeholder="BrojTelefona" required="" class="input"/>
					<input type="password" name="pswd" placeholder="Password" required="" class="input"/>
					<button class="button">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true" class="label">Login</label>
					<input type="email" name="email" placeholder="Email" required="" class="input"/>
					<input type="password" name="pswd" placeholder="Password" required="" class="input" />
					<button class="button">Login</button>
				</form>
			</div>
	</div>
  </div></div>
  )
}

export default Login