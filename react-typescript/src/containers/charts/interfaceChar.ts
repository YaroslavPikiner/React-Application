
export interface IChart {
    id?: string;
    className?: string;
    height?: number;
    width?: number;
    redraw?: boolean;
    type: string;
    data: {
        labels: string[],
        datasets: IDatasets,
        options: {
            scales: {
                y: {
                    beginAtZero: boolean
                }
            }
        }
    }
}

interface IDatasets {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}