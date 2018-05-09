import React, { Component } from 'react';

export default class InformationBox extends Component {
    render() {
        return (
            <div style={styles.container}>
                <img
                    style={styles.icon}
                    src={this.props.iconURL}
                />
                <h5 style={styles.title}>{this.props.title}</h5>
                <h3 style={styles.numbers}>{this.props.numbers}</h3>
            </div>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        padding: 15,
        marginTop: 10,
        marginBottom: 15,
        boxShadow: "1px 3px 1px #9E9E9E",
        height: 220,
        borderRadius: 8
    },
    icon: {
        width: 100,
        height: 'auto',
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    },
    title: {
        textAlign: "center",
        fontSize: 13,
        color: "#9d9d9c"
    },
    numbers: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 35
    }
}