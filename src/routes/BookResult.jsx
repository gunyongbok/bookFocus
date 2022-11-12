import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/BookResult.module.css';

function BookResult({ data }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const dataResult = data.result;
    console.log(dataResult);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.book_img} src={book1} />
                {dataResult.map((a) => {
                    if (a.bookReportId === Number(id)) {
                        return (
                            <div className={styles.bookInfo_box} key={a.bookReportId}>
                                <h1 className={styles.bookTitle}>{a.bookTitle}</h1>
                                <h4 className={styles.author}>{a.author}</h4>
                            </div>
                        );
                    }
                })}
                <img className={styles.book_img} src={book2} />
            </div>
            {dataResult.map((a) => {
                if (a.bookReportId === Number(id)) {
                    return (
                        <p className={styles.contents} key={a.bookReportId}>
                            {a.content}
                        </p>
                    );
                }
            })}
            <button
                className={styles.homeBtn}
                onClick={() => {
                    navigate('/');
                }}
            >
                Home
            </button>
        </div>
    );
}
export default BookResult;
