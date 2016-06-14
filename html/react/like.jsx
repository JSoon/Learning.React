//
// ECMAScript 2015 (ES6) syntax
//==================================================================

import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

class LikeButton extends Component {
	// 初始化 this.state 的值，只在组件装载之前调用一次
	constructor(props) {
		super(props);
		this.state = {
			liked: this.props.liked
		};
	}

	// 点击事件，注意这里的 event 是一个 SyntheticMouseEvent，不是原生的 onclick 事件
	handleClick(param, event) {
		console.log(param);
		console.log(event);
		this.setState({
			liked: !this.state.liked
		});
		console.log(this.state.liked);
	}

	// Virtual DOM，它返回一个 LikeButton 组件的实例，并不是一个真正的 DOM 结构
	// 这样可以避免直接输出 HTML 串可能遭受的 XXS 攻击
	render() {
		const text = this.state.liked ? 'liked' : 'haven\'t liked';
		return (
			<p onClick={this.handleClick.bind(this, 'hehe') }>
				You {text} this.Click to toggle.
			</p>
		);
	}

	//
	// 生命周期函数
	//==================================================================

	// 只会在装载之前调用一次，在 render 之前调用
	// 你可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
	componentWillMount() {
		const that = this;
		// setTimeout(function() {
		// 	that.setState({
		// 		liked: true
		// 	});
		// }, 2000);
	}

	// 只会在装载完成之后调用一次，在 render 之后调用
	// 从这里开始可以通过 react-dom 的 findDOMNode(this) 获取到组件的 DOM 节点
	componentDidMount() {
		console.log(findDOMNode(this));
		// console.log(findDOMNode(this).innerText);
	}
}

// 组件默认属性
LikeButton.defaultProps = {
	liked: false
};

// 渲染实例化后的组件，将其注入到相应的 DOM 节点中去（第二个参数）
// 该方法只能在组件定义后被调用一次
render(
	<LikeButton />,
	document.getElementById('example')
);