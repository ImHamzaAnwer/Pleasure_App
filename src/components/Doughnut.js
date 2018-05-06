import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Happy',
        'Not Happy',
        'Angry',
        'Very Angry'
    ],
    datasets: [{
        data: [300, 50, 100, 20],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            "orange"
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            "orange"
        ]
    }]
};

export default class DoughnutChart extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>{this.props.title}</h2>
                <Doughnut data={data} />
            </div>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        marginTop: 5,
        marginBottom: 15,
        boxShadow: "1px 3px 1px #9E9E9E"
    },
    title: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 30
    }
}