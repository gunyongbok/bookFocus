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
                            <div key={a.bookReportId}>
                                <h1>{a.title}</h1>
                                <h2>{a.bookTitle}</h2>
                                <h4>{a.author}</h4>
                                <p>{a.content}</p>
                            </div>
                        );
                    }
                })}
                <img className={styles.book_img} src={book2} />
            </div>
            <span>
                <button
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Home
                </button>
            </span>
        </div>
    );
}
export default BookResult;
