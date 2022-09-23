/* eslint-disable */
import './ProgressBook.css';

const ProgressBook = () => {
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return (
    <div className="flex">
      <div className="pie" />
      <div>
        <h2 className="random">{random} %</h2>
        <h3 className="completed">Completed</h3>
      </div>
    </div>
  );
};

export default ProgressBook;
