import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const SERVER_URL =
    'http://ec2-52-79-150-177.ap-northeast-2.compute.amazonaws.com:24330/api/v1/report';

const BookList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Books = styled.li`
    font-size: 50px;
    margin-bottom: 20px;
`;

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
            <BookList>
                {data['result'].map((a, i) => (
                    <Books key={data['result'][i].bookReportId}>
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
                            }}
                        >
                            독서록 삭제
                        </button>
                    </Books>
                ))}
            </BookList>
        </div>
    );
}

export default Main;
