/* eslint-disable */
import './ChapterBook.css';

const ChapterBook = () => {
  const currentChapter = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  return (
    <div className="flex">
      <div className="chapter" />
      <div className="display">
        <h3 className="current">Current Chapter</h3>
        <h2 className="complete"> Chapter {currentChapter}</h2>
        <button className="btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default ChapterBook;
