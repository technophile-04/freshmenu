import React from 'react';
import { MultiCarousel, DetailCard } from './';

const Home = () => {
	return (
		<>
			<MultiCarousel />
			<div className="container-fluid nav_bg border-bottom">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row">
							<DetailCard
								topContent="top content"
								img="https://d3gy1em549lxx2.cloudfront.net/f55829ab-eacf-4636-984c-d0ca7e83acd7.jpg"
								name="Food ka fancy naam"
								cost="XXX"
							/>

							<DetailCard
								topContent="top content"
								img="https://d3gy1em549lxx2.cloudfront.net/c147774b-3037-4213-adfc-b37088280205.jpg"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
							<DetailCard
								topContent="top content"
								img="https://picsum.photos/500/290"
								name="Food ka fancy naam"
								cost="XXX"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
