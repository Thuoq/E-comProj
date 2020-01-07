import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.components'
const Collection = ({title, items}) => (
	<div className = 'collection-preview'>
		<h1 className ='title'>{title.toUpperCase()}</h1>
		<div className = 'preview'>
			{
				items
				.filter((item, idx) => idx<4)
				.map(({id, ...othersItemsProps}) =>(
					<CollectionItem key = {id} {...othersItemsProps} />
				))

				
			}
		</div>
	</div>
)
export default Collection;