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
						<label> Name: </label>
						<input
							type="string"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						<label> Style:</label>
						<input
							type="string"
							name="style"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.style}
						/>
						<label> Description:</label>
						<input
							type="string"
							name="description"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.description}
						/>
						{/* beer specs */}
						<label> ABV:</label>
						<input
							type="float"
							name="abv"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.abv}
						/>
						<label> IBU:</label>
						<input
							type="float"
							name="ibu"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.ibu}
						/>

						{/* volume */}

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
						{/* method */}

						<label> Method: </label>
						<label> Mash:</label>
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
						<label> wort: </label>
						<input
							type="String"
							name="method.wort"
							onChange={handleChange}
							onBlur={handleBlur}
							vlaue={values.method.wort}
						/>
						<label> Ferment: </label>
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

						{/* Dynamic inputs start here */}
						<label> Malts / Grain Bill</label>
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
										<button type="button" onClick={() => arrayHelpers.push('')}>
											+ Add Malt
										</button>
									)}
								</div>
							)}
						/>
						<label> Hops: </label>
						{/* name: '',
								value: 0,
								unit: '',
								sched: '' */}
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
										<button type="button" onClick={() => arrayHelpers.push('')}>
											+ Add Hop
										</button>
									)}
								</div>
							)}
						/>
						<label>Yeast:</label>
						<input
							type="string"
							name="ingredients.yeast"
							onChange={handleChange}
							onBlur={handleBlur}
							vlaue={values.ingredients.yeast}
						/>
						<button type="submit">Submit</button>
					</form>
				)}
			</Formik>
			{/* <form onSubmit={handleSubmit}>
				<label>
					Brew Name
					<input type="text" ref={name} />
				</label>
				<label>
					Style
					<input type="text" ref={style} />
				</label>
				<label>
					Description
					<input type="text" ref={description} />
				</label>
				<label>
					abv
					<input type="number" ref={abv} />
				</label>
				<label>
					ibu
					<input type="number" ref={ibu} />
				</label>
				<label>
					Volume amount
					<input type="number" ref={volumeVal} />
				</label>
				<label>
					Volume unit
					<input type="text" ref={volumeUnit} />
				</label>
				<label>
					Boil amount
					<input type="number" ref={boilValue} />
				</label>
				<label>
					Boil unit
					<input type="text" ref={boilUnit} />
				</label>
				<label>
					Mash tempature
					<input type="number" ref={mashTemp} />
				</label>
				<label>
					Mash duration {'(mins)'}
					<input type="number" ref={mashDuration} />
				</label>
				<label>
					Fermentaion temp {`(C)`}
					<input type="text" ref={fermentTemp} />
				</label>
				<label>
					Fermentation duration
					<input type="text" ref={fermentDuration} />
				</label>
				<label>
					Malt name
					<input type="text" ref={maltName} />
				</label>
				<label>
					Malt amount
					<input type="number" ref={maltValue} />
				</label>
				<label>
					Malt unit
					<input type="text" ref={maltunit} />
				</label>
				<label>
					Hop Name
					<input type="text" ref={hopName} />
				</label>
				<label>
					Hop amount
					<input type="number" ref={hopValue} />
				</label>
				<label>
					Hop unit
					<input type="text" ref={hopUnit} />
				</label>
				<label>
					Hop add
					<input type="text" ref={hopAdd} />
				</label>
				<label>
					Hop attribute
					<input type="text" ref={hopAttr} />
				</label>
				<label>
					yeast
					<input type="text" ref={yeast} />
				</label>
				<span className="button">
					<label>
						Create beer recipe
						<input type="submit" />
					</label>
				</span>
			</form> */}
		</div>
	);
}
