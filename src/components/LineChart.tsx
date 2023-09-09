import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



const LineChart = ({ data }: { data: any[] }) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);



  useEffect(() => {
    if (Array.isArray(data) && data.length > 0 && chartContainer.current) {
      const labels = data.map((item: any) => item.date); // Replace 'date' with your actual X-axis data property
      const ctx = chartContainer.current.getContext('2d');

    //   console.log('LineChart useEffect running with data:', data);

      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Cases', // Replace with your dataset label
                data: data.map((item: any) => item.cases), // Replace 'cases' with your actual Y-axis data property
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: 'time', // You might need to adjust this based on your X-axis data
                time: {
                  unit: 'day',
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data]);

  return <canvas ref={chartContainer} width={400} height={200}/>;
};

export default LineChart;
