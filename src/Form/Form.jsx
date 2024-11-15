import React from 'react'
import "./Form.css"

function Form({ name, age, setName, setAge, handleSubmit }) { 

  return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="age">Age:</label>
					<input
						id="age"
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
  )
}

export default Form