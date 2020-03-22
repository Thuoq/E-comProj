import React from 'react';
import MenuItem from '../Menu-item/Menu-item.components';
import {connect} from 'react-redux';
import {selectSections} from '../../redux/directory/directory.selector';
import './directory.styles.scss'
	const Directory = ({sections}) => {
		
		return (
			<div className = 'directory-menu'>
				{
					sections.map( ({id,...othersSections}) =>(
						<MenuItem key = {id} {...othersSections}/>

					))
				}  
			</div>
		);
	}
	
const mapStateToProps = state => ({
	sections : selectSections(state)
})

export default connect(mapStateToProps)(Directory);