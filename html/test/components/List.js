import React, {Component, PropTypes} from 'react';

const List = ({
    items
}) => {
    console.log(items);
    return (
        <ul>
        { items.gists.length !== 0 &&
            items.gists.map((value, index) => {
                return <li key={index}>
                    {value.username}：{value.lastGistUrl}
                </li>
            })
        }
        </ul>
    );
};

export default List;

// class List extends Component {
//     constructor(props) {
//         super(props);

//     }

//     componentWillMount() {

//     }

//     componentDidMount() {

//     }

//     componentWillReceiveProps(nextProps) {

//     }

//     shouldComponentUpdate(nextProps, nextState) {

//     }

//     componentWillUpdate(nextProps, nextState) {

//     }

//     componentDidUpdate(prevProps, prevState) {

//     }

//     componentWillUnmount() {

//     }

//     getList() {
//         return this.props.items.map((item, index) => {
//             console.log(item);
//             return <li key={index}>{item.title}</li>
//         })
//     }

//     render() {
//         return (
//             <ul>
//                 {
//                     this.getList()
//                 }
//             </ul>
//         );
//     }
// }

// export default List;