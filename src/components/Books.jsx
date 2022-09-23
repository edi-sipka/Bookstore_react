/* eslint-disable */
import React from 'react';
import styles from './Books.module.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import ProgressBook from './ProgressBook';
import ChapterBook from './ChapterBook';

const Books = (props) => {
  const dispatch = useDispatch();
  const { title, author, id, category } = props;

  const removeBooks = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.head}>
      <div className={styles.book}>
        <div className={styles.description}>
          <p className={styles.category}>{category}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <div className={styles.btnAlign}>
          <button type="button" className={styles.btn}>
            Comment
          </button>
          <button type="button" onClick={removeBooks} className={styles.btn}>
            Remove
          </button>
          <button type="button" className={styles.btn}>
            Edit
          </button>
        </div>
        <div className={styles.status}>
          <ProgressBook />
          <div className={styles.end}>
            <ChapterBook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
