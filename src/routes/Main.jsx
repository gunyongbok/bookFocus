import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../css/Main.module.css';

const SERVER_URL =
    'http://ec2-52-79-150-177.ap-northeast-2.compute.amazonaws.com:24330/api/v1/report';

function Main({ data }) {
    let navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigate('/bookfocus');
                }}
            >
                독서록 쓰기
            </button>
            <button
                onClick={() => {
                    navigate('/booksearch');
                }}
            >
                책 검색하기
            </button>
            <ul className={styles.ul}>
                {data['result'].map((a, i) => (
                    <li
                        className={styles.li}
                        key={data['result'][i].bookReportId}
                    >
                        {data['result'][i].title}
                        <Link
                            to={`/bookresult/${data['result'][i].bookReportId}`}
                        >
                            GO
                        </Link>
                        <button
                            onClick={async () => {
                                await axios
                                    .put(
                                        `${SERVER_URL}/${data['result'][i].bookReportId}`,
                                        null
                                    )
                                    .then((response) => {
                                        console.log(response);
                                    })
                                    .catch((error) =>
                                        console.log('Error :', error)
                                    );
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
