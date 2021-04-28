import React, { useState } from 'react';
import { Formik, Field, FieldArray } from 'formik';

export default function NewLactoFerment(props) {
	return (
		<div className="newLactofermentForm">
			<h1>New Fermentation</h1>
			<Formik
				initialValues={{
					name: '',
					description: '',
					volume: {
						value: 0.0,
						unit: 'unit'
					},
					ferment: {
						temp: 20,
						duration: 'x - weeks'
					},
					ingredients: {
						main: [
							{
								name: 'name',
								value: 0.0,
								unit: 'unit'
							}
						],
						salt: {
							value: 0,
							unit: 'unit'
						},
						other: [
							{
								name: 'name',
								value: 0.0,
								unit: 'unit'
							}
						]
					}
				}}
				onSubmit={async values => {
					alert(values.json());
					// try {
					// 	const response = await fetch('/api/lactoferments', {
					// 		method: 'POST',
					// 		headers: {
					// 			'Content-Type': 'application/json'
					// 		},
					// 		body: JSON.stringify(values)
					// 	});
					// } catch (error) {
					// 	console.error(error);
					// } finally {
					// 	window.location.assign('/');
					// }
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit
				}) => (
					<form onSubmit={handleSubmit}>
						<label> Name:</label>
						<input
							type="string"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						<label> Description:</label>
						<input
							type="string"
							name="description"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.description}
						/>
						<label> Volume:</label>
						<input
							type="float"
							name="volume.value"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.volume.value}
						/>
						<input
							type="string"
							name="volume.unit"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.volume.unit}
						/>

						<label>Ferment</label>
						<label>temp</label>
						<input
							type="string"
							name="ferment.temp"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.ferment.temp}
						/>
						<label>duration</label>
						<input
							type="string"
							name="ferment.duration"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.ferment.duration}
						/>
						{/* //////////////////HERE*/}
						<label> ingredients:</label>
						{/* array feild */}
						<label> Main:</label>
						<FieldArray
							name="ingredients.main"
							render={arrayHelpers => (
								<div>
									{values.ingredients.main &&
									values.ingredients.main.length > 0 ? (
										values.ingredients.main.map((ingredient, index) => (
											<div key={index} className="field-container">
												<label> Name:</label>
												<Field name={`ingredients.main.${index}.name`} />
												<label> val:</label>
												<Field name={`ingredients.main.${index}.value`} />
												<label> unit:</label>
												<Field name={`ingredients.main.${index}.unit`} />
												<button
													type="button"
													onClick={() => arrayHelpers.remove(index)}
												>
													-
												</button>
												<button
													type="button"
													onClick={() =>
														arrayHelpers.push({
															name: '',
															value: 0.0,
															unit: 'unit'
														})
													}
												>
													+
												</button>
											</div>
										))
									) : (
										<button type="button" onClick={() => arrayHelpers.push('')}>
											Add ingredients
										</button>
									)}
								</div>
							)}
						/>
						<label> salt</label>
						<input
							type="float"
							name="ingredients.salt.value"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.ingredients.salt.value}
						/>
						<input
							type="string"
							name="ingredients.salt.unit"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.ingredients.salt.unit}
						/>
						<label> {'Spices & aromatics:'} </label>
						<FieldArray
							name="ingredients.other"
							render={arrayHelpers => (
								<div>
									{values.ingredients.other &&
									values.ingredients.other.length > 0 ? (
										values.ingredients.other.map((ingredient, index) => (
											<div key={index} className="field-container">
												<label> Name:</label>
												<Field name={`ingredients.other.${index}.name`} />
												<label> val:</label>
												<Field name={`ingredients.other.${index}.value`} />
												<label> unit:</label>
												<Field name={`ingredients.other.${index}.unit`} />
												<button
													type="button"
													onClick={() => arrayHelpers.remove(index)}
												>
													-
												</button>
												<button
													type="button"
													onClick={() =>
														arrayHelpers.push({
															name: '',
															value: 0.0,
															unit: 'unit'
														})
													}
												>
													+
												</button>
											</div>
										))
									) : (
										<button type="button" onClick={() => arrayHelpers.push('')}>
											{'Add Aromatics & Spices'}
										</button>
									)}
								</div>
							)}
						/>
						<button type="submit">Submit</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
