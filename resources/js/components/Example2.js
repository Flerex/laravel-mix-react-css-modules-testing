import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Example2.css';

export default class Example2 extends Component {
    render() {
        return (
            <div className={styles.example}>Testing component (with CSS)!</div>
        );
    }
}

if (document.getElementById('example2')) {
    ReactDOM.render(<Example2 />, document.getElementById('example2'));
}
