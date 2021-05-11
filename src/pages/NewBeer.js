import React, { useState, useRef } from 'react';
import { Formik, Field, FieldArray } from 'formik';

export default function NewBeerForm(props) {
	return (
		<div className="newbeerForm">
			<h1> New Beer Recipe</h1>
			<Formik
				initialValues={{
					name: '',
					style: '',
					description: '',
					abv: 0,
					ibu: 0,
					volume: {
						value: 0.0,
						unit: 'unit'
					},
					method: {
						mash: {
							temp: 0,
							duration: ''
						},
						wort: '',
						ferment: {
							temp: 0,
							time: ''
						}
					},
					ingredients: {
						malt: [
							{
								name: '',
								value: 0,
								unit: ''
							}
						],
						hops: [
							{
								name: '',
								value: 0,
								unit: '',
								sched: ''
							}
						],
						yeast: ''
					}
				}}
				onSubmit={async values => {
					// alert(values.json());
					try {
						const response = await fetch('/api/beers', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(values)
						});
					} catch (error) {
						console.error(error);
					} finally {
						window.location.assign('/');
					}
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
						<div className="name-field">
							<label> Name:</label>
							<input
								type="string"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
						</div>
						<div className="style-field">
							<label>Style: {'       '}</label>
							<input
								type="string"
								name="style"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.style}
							/>
						</div>
						<div className="desc-field">
							<label>Description:</label>
							<input
								type="string"
								name="description"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.description}
							/>
						</div>
						<div>
							{/* beer specs */}
							<label>ABV:</label>
							<input
								type="float"
								name="abv"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.abv}
							/>
						</div>
						<div>
							<label>IBU:</label>
							<input
								type="float"
								name="ibu"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.ibu}
							/>
						</div>

						{/* volume */}
						<div>
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
						</div>
						{/* method */}
						<div>
							<label> Method: </label>
							<label>Mash:</label>
							<label> temp:</label>
							<input
								type="float"
								name="method.mash.temp"
								onChange={handleChange}
								onBlur={handleBlur}
								vlaue={values.method.mash.temp}
							/>
							<label> duration:</label>
							<input
								type="String"
								name="method.mash.duration"
								onChange={handleChange}
								onBlur={handleBlur}
								vlaue={values.method.mash.duration}
							/>
						</div>
						<div>
							<label>wort:</label>
							<input
								type="String"
								name="method.wort"
								onChange={handleChange}
								onBlur={handleBlur}
								vlaue={values.method.wort}
							/>
						</div>
						<div>
							{/* Dynamic inputs start here */}
							<label>Malts / Grain Bill</label>
							<FieldArray
								name="ingredients.malt"
								render={arrayHelpers => (
									<div>
										{values.ingredients.malt &&
										values.ingredients.malt.length > 0 ? (
											values.ingredients.malt.map((ingredient, index) => (
												<div key={index} className="field-container">
													<label> Name:</label>
													<Field name={`ingredients.malt.${index}.name`} />
													<label> val:</label>
													<Field name={`ingredients.malt.${index}.value`} />
													<label> unit:</label>
													<Field name={`ingredients.malt.${index}.unit`} />
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
											<button
												type="button"
												onClick={() => arrayHelpers.push('')}
											>
												+ Add Malt
											</button>
										)}
									</div>
								)}
							/>{' '}
						</div>
						<div>
							<label>Hops:</label>
							<FieldArray
								name="ingredients.hops"
								render={arrayHelpers => (
									<div>
										{values.ingredients.hops &&
										values.ingredients.hops.length > 0 ? (
											values.ingredients.hops.map((ingredient, index) => (
												<div key={index} className="field-container">
													<label> Name:</label>
													<Field name={`ingredients.hops.${index}.name`} />
													<label> val:</label>
													<Field name={`ingredients.hops.${index}.value`} />
													<label> unit:</label>
													<Field name={`ingredients.hops.${index}.unit`} />
													<label> Schedule:</label>
													<Field name={`ingredients.hops.${index}.sched`} />
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
											<button
												type="button"
												onClick={() => arrayHelpers.push('')}
											>
												+ Add Hop
											</button>
										)}
									</div>
								)}
							/>{' '}
						</div>
						<div>
							<label>Yeast:</label>
							<input
								type="string"
								name="ingredients.yeast"
								onChange={handleChange}
								onBlur={handleBlur}
								vlaue={values.ingredients.yeast}
							/>
						</div>
						<div>
							<label>Ferment: </label>
							<label>temp:</label>
							<input
								type="float"
								name="method.ferment.temp"
								onChange={handleChange}
								onBlur={handleBlur}
								vlaue={values.method.ferment.temp}
							/>
							<label> duration:</label>
							<input
								type="String"
								name="method.ferment.time"
								onChange={handleChange}
								onBlur={handleBlur}
								vlaue={values.method.ferment.time}
							/>
						</div>
						<button type="submit">Submit</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
