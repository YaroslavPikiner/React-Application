import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Radar, PolarArea, Bubble } from 'react-chartjs-2';
import { IChart } from './interfaceChar';
import { motion } from "framer-motion"

interface Prop {
    data: IChart
}

const Charts: React.FC<Prop> = () => {
    const [lengthOfChartLabel, setLengthOfChartLabel] = useState<number>(6);
    const [data, setData] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: Array.from({ length: lengthOfChartLabel }, () =>
                    Math.floor(Math.random() * 40)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        setInterval(() => {
            setData(prev => ({
                ...prev,
                datasets: [
                    {
                        label: '# of Votes',
                        data: Array.from({ length: lengthOfChartLabel }, () =>
                            Math.floor(Math.random() * 140)),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })
            )
        }, 3000)
    }, [])

    const add = (): void => {
        setLengthOfChartLabel(lengthOfChartLabel + 1)
        setData(prev => ({
            ...prev,
            labels: [...data.labels, lengthOfChartLabel.toString()],
            data: {
                datasets: [{
                    data: Array.from({ length: lengthOfChartLabel }, () =>
                        Math.floor(Math.random() * 1120)),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                }]
            },
        }));
    }


    const remove = (): void => {
        setLengthOfChartLabel(lengthOfChartLabel - 2)
        setData(prev => ({
            ...prev,
            data: {
                labels: [...prev.labels.splice(-1, 1)],
            },
        }));
    };

    const randomize = () => {
        setData(prev => ({
            ...prev,
            datasets: [
                {
                    label: '# of Votes',
                    data: Array.from({ length: lengthOfChartLabel }, () =>
                        Math.floor(Math.random() * 140)),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        })
        )
    }


    return (

        <div className='container mt2'>
            <div className="row center-align">
                <a className="waves-effect waves-light btn indigo lighten-2" onClick={randomize}>randomize</a>
                <a className="waves-effect waves-light btn indigo lighten-2" onClick={add}><i className="material-icons left">add</i>add</a>
                <a className="waves-effect waves-light btn indigo lighten-2" onClick={remove}><i className="material-icons left">delete</i>delete</a>
            </div>
            <div className="row">
                <motion.div
                    className="col s12 m6"
                    drag
                    dragConstraints={{
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                    }}
                >
                    <Bar type='bar' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </motion.div>
                <div className="col s12 m6">
                    <Pie type='pie' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </div>
                <div className="col s12 m6">
                    <Line type='line' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </div>
                <div className="col s12 m6">
                    <Radar type='radar' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </div>
                <div className="col s12 m6">
                    <PolarArea type='polarArea' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </div>
                <div className="col s12 m6">
                    <Bubble type='bubble' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    )
}


export default Charts;