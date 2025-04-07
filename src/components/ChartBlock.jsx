import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Filler } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const ChartBlock = () => {
  const { data, isLoading, error } = useSelector((store) => store.weather);
  const arr = data.temperature;

  let chartData = {
    labels: arr?.map((item) => item.time),
    datasets: [
      {
        data: arr.map((item) => item.temp),
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  };

  // chart options
  let axesConfig = {
    grid: {
      display: false,
    },
    border: {
      display: false,
    },
    ticks: {
      display: false,
    },
  };
  let chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: axesConfig,
      y: axesConfig,
    },
    layout: {
      padding: {
        top: 30,
        right: 30,
        left: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        font: { size: 15 },
        align: "top",
        offset: 5,
      },
    },
  };

  return (
    <>
      {isLoading || error || (
        <div className="flex place-items-center w-full h-60 my-10">
          <Line
            data={chartData}
            options={chartOptions}
            plugins={[ChartDataLabels]}
          />
        </div>
      )}
    </>
  );
};

export default ChartBlock;
