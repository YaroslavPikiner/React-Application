import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie, Radar, PolarArea } from 'react-chartjs-2';
import { IChart } from './interfaceChar';

interface Prop {
    data: IChart
}

const Charts: React.FC<Prop> = () => {

    const [data, setData] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 7, 3],
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

    return (
        <div className='container'>
            <div className="row">
                <div className="col s12 m6">
                    <Bar type='bar' height={300} width={400} data={data} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    )
}

export default Charts;