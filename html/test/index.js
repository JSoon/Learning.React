import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(
    <App source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('list')
)