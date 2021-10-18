import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center bg-light"
			style={{ minHeight: '100vh', backgroundColor: '#b3b3b3' }}
		>
			<div
				className="w-100 p-4 shadow bg-white rounded"
				style={{ maxWidth: 350 }}
			>
				<form>
					<div className="row mb-3">
						<div className="col-md-6 d-flex justify-content-center">
							<button
								type="submit"
								className="btn btn-block w-100 mb-2"
								style={{ backgroundColor: '#4267B2', borderRadius: 3 }}
							>
								<i className="fab fa-facebook-f" style={{ color: 'white' }}></i>
							</button>
						</div>
						<div className="col-md-6 d-flex justify-content-center ">
							<button
								type="submit"
								className="btn btn-block w-100 mb-2"
								style={{ backgroundColor: '#4285F4', borderRadius: 3 }}
							>
								<i className="fab fa-google" style={{ color: 'white' }}></i>
							</button>
						</div>
					</div>
					<div className="strike mb-3">
						<span> OR USE EMAIL </span>
					</div>

					<div className="form-outline mb-4">
						<input
							type="text"
							className="form-control"
							placeholder="First Name"
						/>
					</div>
					<div className="form-outline mb-4">
						<input
							type="text"
							className="form-control"
							placeholder="Last Name"
						/>
					</div>
					<div className="form-outline mb-4">
						<input
							type="email"
							className="form-control"
							placeholder="10 digit Mobile Number"
						/>
					</div>
					<div className="form-outline mb-4">
						<input type="email" className="form-control" placeholder="Email" />
					</div>
					<div className="form-outline mb-4">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
						/>
					</div>

					<button
						type="submit"
						className="btn btn-block mb-3 w-100 login-button"
					>
						Send OTP
					</button>
					<hr />
					<div className="text-center">
						<p>
							Already have an account?{' '}
							<Link to="/login" style={{ color: '#e85826' }}>
								Login
							</Link>
						</p>
					</div>
					<div className="text-center">
						<p>
							Back to{' '}
							<Link to="/" style={{ color: '#e85826' }}>
								Home
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
