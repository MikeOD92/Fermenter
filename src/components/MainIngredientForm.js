import React from 'react';

const MainIngredientForm = props => {
	return (
		<>
			<label>
				Main ingredient {props.index + 1}
				<input
					type="text"
					ref={`mainName${props.index + 1}`}
					defaultValue={props.name || ''}
				/>
			</label>
			<label>
				Main amount {props.index + 1}
				<input
					type="text"
					//ref={mainValue}
					defaultValue={props.amount || ''}
				/>
			</label>
			<label>
				Main unit {props.index + 1}
				<input
					type="text"
					//ref={mainUnit}
					defaultValue={props.unit || ''}
				/>
			</label>
		</>
	);
};
export default MainIngredientForm;
