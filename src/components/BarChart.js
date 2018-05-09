import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(188, 0, 0, 0.5)',
            borderColor: 'rgba(188, 0, 0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [20,30,10,25]
        },
        {
            label: 'test1',
            data: [50,10,30,20],
            backgroundColor: 'rgba(0, 221, 255, 0.5)',
            borderColor: 'rgba(0, 221, 255,1)',
            borderWidth: 1,
        },
        {
            label: 'test2',
            data: [30,10,25,20],
            backgroundColor: 'rgba(72, 175, 3, 0.5)',
            borderColor: 'rgba(72, 175, 3,1)',
            borderWidth: 1,
        },
        {
            label: 'test3',
            data: [20,30,10,10],
            backgroundColor: 'rgba(255, 216, 0, 0.5)',
            borderColor: 'rgba(255, 216, 0,1)',
            borderWidth: 1,
        },
    ]
};

export default class BarChart extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.title}>{this.props.title}</h2>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        scales: {
                            xAxes: [{
                                stacked: true
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        }
                    }}
                />
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