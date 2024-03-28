import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    console.log(props.datapoints,'props.datapoints')
    const dataPointValues = props.dataPoints.map(dataPoint => parseInt(dataPoint.value));
    console.log(dataPointValues,'insidechartjs')
    const totalMaximum = Math.max(...dataPointValues);
    console.log(totalMaximum)
    
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            )}
        </div>
    );
};

export default Chart;