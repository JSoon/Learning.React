import React, {Component} from 'react';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gists: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = [];
            result.map((value, index) => {
                lastGist.push({
                    username: value.owner.login,
                    lastGistUrl: value.html_url
                })
            })
            this.setState({
                gists: lastGist
            });
        }.bind(this));
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                <List items={this.state} />
            </div>
        );
    }
}

export default App;