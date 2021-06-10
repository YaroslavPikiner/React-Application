
export interface IChart {
    id?: string;
    className?: string;
    height?: number;
    width?: number;
    redraw?: boolean;
    type: string;
    data: {
        labels?: string | number[],
        datasets: [{
            label: string,
            data: number | string[],
            backgroundColor: string[],
            borderColor: string[],
            borderWidth: number,
        }],
        options: {
            scales: {
                y: {
                    beginAtZero: boolean
                }
            }
        }
    }
}

