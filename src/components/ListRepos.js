import React from 'react';

function ListRepos({ repo }) {
	return (
		<div className="list">
			<>
				{repo.map((item) => {
					<ul>{item.name}</ul>;
				})}
			</>
		</div>
	);
}

export default ListRepos;
