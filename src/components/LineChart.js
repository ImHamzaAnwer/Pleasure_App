import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 100]
        },
        {
            label: 'My Second dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,122,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [100, 49, 30, 11, 26, 45, 70, 23]
        },
    ]
};

export default class LineClass extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>{this.props.title}</h2>
                <Line data={data} />;
            </div>
        )

    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        marginTop: 5,
        marginBottom: 5,
        paddingBottom: 20,
        boxShadow: "1px 3px 1px #9E9E9E"
    },
    title: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 30
    }
}