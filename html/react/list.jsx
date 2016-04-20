import React, { Component } from 'react';
import { render } from 'react-dom';

// 列表项
const BlackListItem = (props) => <li>{props.name}</li>;

// 列表
const BlackList = (props) => {
	return (
		<ul>
			{props.list.map(function(item) {
				return (
					<BlackListItem name={item} key={item} />
				)
			})}
		</ul>
	);
};

const LIST = ['Kitty', 'Polly', 'Beast', 'Ducky'];

// 渲染至 DOM
render(
	<BlackList list={LIST} />,
	document.getElementById('list')
);