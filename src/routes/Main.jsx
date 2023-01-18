import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/Main.module.css';

// const SERVER_URL

function Main({ data }) {
    let navigate = useNavigate();

    return (
        <div className={styles.main_page}>
            <header className={styles.main_header}>
                <button
                    className={styles.button}
                    onClick={() => {
                        navigate('/bookfocus');
                    }}
                >
                    독서록 쓰기 ㅣ
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        navigate('/booksearch');
                    }}
                >
                    책 검색하기
                </button>
            </header>

            <ul className={styles.ul}>
                {data['result'].map((a, i) => (
                    <li className={styles.li} key={data['result'][i].bookReportId}>
                        <Link className={styles.link} to={`/bookresult/${data['result'][i].bookReportId}`}>
                            {data['result'][i].title}
                        </Link>
                        <button
                            className={styles.delete_btn}
                            onClick={async () => {
                                await axios
                                    .put(`${SERVER_URL}/${data['result'][i].bookReportId}`, null)
                                    .then((response) => {
                                        console.log(response);
                                    })
                                    .catch((error) => console.log('Error :', error));
                                window.location.reload();
                            }}
                        >
                            독서록 삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Main;
