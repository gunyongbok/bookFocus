import axios from 'axios';
import { useState } from 'react';
import Title from '../components/Title';
import Author from '../components/Author';
import Contents from '../components/Contents';
import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import { useNavigate } from 'react-router-dom';
import styles from '../css/BookFocus.module.css';

const SERVER_URL = 'http://ec2-52-79-150-177.ap-northeast-2.compute.amazonaws.com:24330/api/v1/report';

function BookFocus({ data }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [contents, setContents] = useState('');
    const [topTitle, setTopTitle] = useState('');
    let navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const bookTitle = e.target.title.value;
        const author = e.target.author.value;
        const content = e.target.contents.value;
        const title = e.target.topTitle.value;
        await axios.post(SERVER_URL, { title, bookTitle, author, content });
        setTitle('');
        setAuthor('');
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <header className={styles.header}>
                    <img className={styles.book_img} src={book1} />
                    <Title title={title} topTitle={topTitle} setTitle={setTitle} setTopTitle={setTopTitle} />
                    <img className={styles.book_img} src={book2} />
                </header>
                <Author author={author} setAuthor={setAuthor} />
                <Contents contents={contents} setContents={setContents} />
                <button className={styles.button}>저장</button>
                <span>
                    <button
                        className={styles.homeBtn}
                        onClick={() => {
                            navigate('/');
                            window.location.reload();
                        }}
                    >
                        Home
                    </button>
                </span>
            </form>
        </div>
    );
}

export default BookFocus;
