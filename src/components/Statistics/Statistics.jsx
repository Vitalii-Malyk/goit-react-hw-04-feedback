import { ListElementStyle } from 'components/Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ListElementStyle>
    <li>good: {good}</li>
    <li>neutral: {neutral}</li>
    <li>bad: {bad}</li>
    <li>total: {total}</li>
    <li>
      Positive feedback: {positivePercentage > 0 ? `${positivePercentage}%` : 0}
    </li>
  </ListElementStyle>
);

export default Statistics;
