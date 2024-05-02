export const Statistic = props => {
  const { valueBad, valueGood, valueNeutral, valueTotal, valuePercentage } =
    props;

  return (
    <>
      <ul className="StatisticsList">
        <li className="ListItem">
          <span>Good:</span> <span>{valueGood}</span>
        </li>
        <li className="ListItem">
          <span>Neutral:</span> <span>{valueNeutral}</span>
        </li>
        <li className="ListItem">
          <span>Bad:</span> <span>{valueBad}</span>
        </li>
        <li className="ListItem">
          <span>Total:</span> <span>{valueTotal}</span>
        </li>
        <li className="ListItem">
          <span>positive Feedback:</span> <span>{valuePercentage}%</span>
        </li>
      </ul>
    </>
  );
};
