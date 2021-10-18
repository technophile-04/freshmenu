import React from 'react';
import { Link } from 'react-router-dom';

const DetailCard = (props) => {
	return (
		<>
			<div className="col-12 col-lg-4 col-sm-6">
				<div className="card mb-4 mx-auto" style={{ width: '90%' }}>
					<div className="py-2">{props.topContent}</div>
					<div className="img-hover-zoom">
						<img src={props.img} className="card-img-top" alt="poto" />
					</div>
					<div>Best offers</div>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<div className="d-flex flex-row justify-content-between">
							<h3>₹{props.cost}</h3>
							<div>
								<Link to="" className="btn btn-gradient fw-bold">
									Buy
								</Link>
							</div>
						</div>
						<p className="fw-bold card-p">Available from 10:45 am</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailCard;
