import React from 'react';

const OtherIngredientForm = props => {
	return (
		<>
			<label>
				Spices and Aromatics {props.index + 1}
				<input
					type="text"
					ref={`mainName${props.index + 1}`}
					defaultValue={props.name || ''}
				/>
			</label>
			<label>
				amount {props.index + 1}
				<input
					type="text"
					//ref={mainValue}
					defaultValue={props.amount || ''}
				/>
			</label>
			<label>
				unit {props.index + 1}
				<input
					type="text"
					//ref={mainUnit}
					defaultValue={props.unit || ''}
				/>
			</label>
		</>
	);
};
export default OtherIngredientForm;
