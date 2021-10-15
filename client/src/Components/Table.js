import React from 'react'

import Chair from './Chair'
import '../Styles/Table.css'

const Table = ({id}) => {

	return (
		<div>
			Table {id}
			
			<div className='chairs'>
				<Chair id={id +'_1'}/>
				<Chair id={id +'_2'}/>
				<Chair id={id +'_3'}/>
				<Chair id={id +'_4'}/>
			</div>
		</div>
	)
}

export default Table
