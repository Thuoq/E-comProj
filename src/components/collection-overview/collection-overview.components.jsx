import React from 'react';
import {connect} from 'react-redux';
import "./collection-overview.styles.scss";
import CollectionPreView from '../collection-preview/collection-preview.components';
import {selectCollections} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';

const CollectionOverView = ({collections}) => (
    <div className = "collections-overview">
		<div className = 'shop-page'> 
			{
				collections.map( ({id, ...otherCollectionProps}) => (
					<CollectionPreView key ={id} {...otherCollectionProps}/>
				))
			}
		</div>
	</div>
)
const mapStateToProps = createStructuredSelector({
	collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverView)