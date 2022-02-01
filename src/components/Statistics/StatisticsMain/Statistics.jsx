import data from "../../../data/data.json";
import StatisticsList from "../StatisticsList/StatisticsList";
import "./statistics.css";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map(({ id, ...item }) => {
          return <StatisticsList key={id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
