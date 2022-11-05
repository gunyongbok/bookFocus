import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../css/BookResult.module.css';

function BookResult({ data }) {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={book1} />
                <h1>bookId : {id}</h1>
                <img src={book2} />
            </div>
            <span>
                <button
                    onClick={() => {
                        navigate('/bookresult');
                    }}
                >
                    완성된 독서록 보러가기
                </button>
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
