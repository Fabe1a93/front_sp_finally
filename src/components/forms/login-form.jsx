import React from 'react';
import '../../css/login-form.css';
import userIcon from '../../assets/img/person-fill.svg';
import passwordIcon from '../../assets/img/lock-fill.svg';

function LoginForm(props) {
	return (
		<div>
			<form action="/" className='mb-3 form'>
				<h1 className='display-6'>!Enter Your Credentials¡</h1>
					<div className="input">
						<input className="form-control" type="text" name="user" id="user" placeholder='User'/>
						<span className="icon">
						<i class="bi bi-person-fill">
							<img src={userIcon} alt="user-icon" />
						</i>
      			</span>	
					</div>
					<div className="input">
						<input className="form-control" type="password" name="password" id="password" placeholder='Password'/>
						<span className="icon">
							<i class="bi bi-person-fill">
								<img src={passwordIcon} alt="password-icon" />
							</i>
      			</span>
					</div>
				<div className="buttons">
						<button type="submit" className='btn btn-primary m-2 mt-4 mb-4 p-2.5'>Ok</button>
						<button className='btn btn-primary m-2 mt-4 mb-4 p-2.5'>Cancel</button>
				</div>
			</form>
		</div>
	)
}


export { LoginForm }

