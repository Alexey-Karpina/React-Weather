import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { days } from "../../../services/days";
const WeatherInfo = ({ list }) => {
  if (!list || list === undefined) return null;
  let startDate = 0;
  const labels = list.filter((item) => {
    const date = new Date(item.dt_txt).getDate();
    if (date > startDate) {
      startDate = date;
      return {
        day: new Date(item.dt_txt).getDate(),
      };
    }
  });

  const temperature = labels.map((item) => item.main.temp);
  const mappedLabels = [];
  for (let i = 0; i < 6; i++) {
    mappedLabels.push(
      `${days[new Date(labels[i].dt_txt).getDay()]}: ${new Date(
        labels[i].dt_txt
      ).getDate()}`
    );
  }

  const data = {
    labels: mappedLabels,
    datasets: [
      {
        label: "Temperature",
        data: [...temperature],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <section>
      <Bar data={data} options={options} />
    </section>
  );
};

WeatherInfo.propTypes = {
  list: PropTypes.array,
};

export default WeatherInfo;
