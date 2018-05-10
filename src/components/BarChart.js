import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



export default class BarChart extends Component {
    render() {
        let happyData = [];
        let satisfiedData = [];
        let dissatisfiedData = [];
        let angryData = [];
        if (this.props.location === 'tariq-road') {
            angryData = [25, 15, 10, 30, 8]
            dissatisfiedData = [15, 11, 20, 16, 6]
            satisfiedData = [18, 12, 11, 20, 20];
            happyData = [25, 22, 9, 15, 25];
        }
        else if (this.props.location === 'askari') {
            angryData = [9, 22, 15, 31, 17]
            dissatisfiedData = [26, 19, 13, 7, 12]
            satisfiedData = [23, 19, 26, 31, 7];
            happyData = [31, 21, 16, 33, 17];
        }
        else if (this.props.location === 'gulshan-e-iqbal') {
            angryData = [20, 15, 30, 18, 5]
            dissatisfiedData = [12, 20, 18, 4, 16]
            satisfiedData = [26, 17, 31, 32, 9];
            happyData = [33, 38, 24, 19, 5];
        }
        else if (this.props.location === 'nazimabad') {
            angryData = [28, 18, 8, 32, 3]
            dissatisfiedData = [17, 26, 36, 9, 6]
            satisfiedData = [24, 19, 13, 16, 10];
            happyData = [27, 9, 17, 20, 7];
        }
        else {
            angryData = [0,0,0,0,0]
            dissatisfiedData = [0,0,0,0,0]
            satisfiedData = [0,0,0,0,0];
            happyData = [0,0,0,0,0];
        }

            const data = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        label: 'Angry',
                        backgroundColor: '#ff0000',
                        borderColor: '#ff0000',
                        borderWidth: 1,
                        hoverBackgroundColor: '#ff0000',
                        hoverBorderColor: '#ff0000',
                        data: angryData
                    },
                    {
                        label: 'Dissatisfied',
                        data: dissatisfiedData,
                        backgroundColor: '#36A2EB',
                        borderColor: '#36A2EB',
                        borderWidth: 1,
                    },
                    {
                        label: 'Satisfied',
                        data: satisfiedData,
                        backgroundColor: '#009900',
                        borderColor: '#009900',
                        borderWidth: 1,
                    },
                    {
                        label: 'Happy',
                        data: happyData,
                        backgroundColor: '#ffcc00',
                        borderColor: '#ffcc00',
                        borderWidth: 1,
                    },
                ]
            };
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
        boxShadow: "1px 3px 1px #9E9E9E",
        borderRadius: 8
    },
    title: {
        textAlign: "center",
        marginTop: 5,
        marginBottom: 30
    }
}