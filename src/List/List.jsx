import React from "react"
import "./List.css"

function List({ submittedData }) {
	return (
		<div className="submitted-data">
			<h3>Submitted Data:</h3>
			{submittedData.map((data, index) => (
				<p key={index}>
					<strong>Name:</strong> {data.name}
					<br />
					<strong>Age:</strong> {data.age}
				</p>
			))}
		</div>
	)
}

export default List
