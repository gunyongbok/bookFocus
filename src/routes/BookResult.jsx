import styled from 'styled-components';
import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
    height: 100vh;
    background-color: #e2cda6;
`;
const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

function BookResult({ data }) {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);

    return (
        <Container>
            <Header>
                <img src={book1} />
                <h1>bookId : {id}</h1>
                <img src={book2} />
            </Header>
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
        </Container>
    );
}
export default BookResult;
