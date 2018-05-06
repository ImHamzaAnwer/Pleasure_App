import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
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
                        maintainAspectRatio: true
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