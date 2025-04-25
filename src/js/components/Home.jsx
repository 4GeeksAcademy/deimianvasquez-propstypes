import React from "react";
import { NewsMessage } from "./NewsMessage";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row border border-danger">
				<h1>Hola ¿qué tal?</h1>
				<NewsMessage
					text="Esta es la noticia"
					style="text-success"
					number={3}
				/>
				<NewsMessage
					text="Esta es la noticia número dos"
					style="text-danger"
					number={5}
				/>
				<NewsMessage
					text="Esta es la noticia número tres"
					style="text-secondary"
					number={10}
				/>
			</div>
		</div>
	);
};

export default Home;