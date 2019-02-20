import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Example.scss';

export default class Example extends Component {
    render() {
        return (
            <div className={styles.example}>Testing component!</div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
