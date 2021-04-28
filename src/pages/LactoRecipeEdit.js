import { set } from 'mongoose';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
	Formik,
	Field,
	FieldArray,
	values,
	handleSubmit,
	handleChange,
	handleBlur
} from 'formik';

export default function EditLactoFerment(props) {
	const [lactoFerment, setlactoFerment] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/lactoferments/${props.match.params.id}`
				);
				const data = await response.json();
				setlactoFerment(data);
			} catch (error) {
				console.error(error);
			} finally {
				console.log(lactoFerment.name);
			}
		})();
	}, []);
	const greet = e => {
		e.preventDefault();
		console.log(values);
	};
	return (
		<div className="lactofermentEditForm">
			<Formik initialValues={lactoFerment}>
				<form onSubmit={greet}>
					<label> Name:</label>
					{lactoFerment.name ? (
						<input
							type="string"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={lactoFerment.name}
						/>
					) : (
						''
					)}
					<button type="submit">Submit</button>
				</form>
			</Formik>
		</div>
	);
}
