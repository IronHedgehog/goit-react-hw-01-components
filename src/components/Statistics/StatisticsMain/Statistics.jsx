import data from "../../../data/data.json";
import StatisticsList from "../StatisticsList/StatisticsList";
import s from "./statistics.module.css";

const Statistics = ({ title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {data.map(({ id, ...item }) => {
          return <StatisticsList key={id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;
