import React, {useState} from 'react'
import '../Styles/Chair.css'


const Chair = ({id}) => {
	const [selected, setselected] = useState(true);

	const swapSelected = () => {
		if (selected === false) {
			setselected(true);
			colorElement('aquamarine');
		}
		else{
			setselected(false);
			colorElement('red');
		}
	}

	const colorElement = (newColor) => {
		let el = document.getElementById(id);
		el.style.backgroundColor =  newColor;
	}
	return (
		<div>
			<button className='chair_button' id={id} onClick={() =>{ swapSelected()}}>
				{id}
			</button>
		</div>
	)
}

export default Chair
