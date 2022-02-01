import data from "../../../data/data.json";
import StatisticsList from "../StatisticsList/StatisticsList";
import s from "./statistics.module.css";

const Statistics = () => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {data.map(({ id, ...item }) => {
          return <StatisticsList key={id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
