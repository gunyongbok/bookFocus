import styled from 'styled-components';
import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import { useParams } from 'react-router-dom';

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

function BookResult() {
    const { id } = useParams();
    console.log(id);
    return (
        <Container>
            <Header>
                <img src={book1} />
                <h1>bookId : {id}</h1>
                <img src={book2} />
            </Header>
        </Container>
    );
}
export default BookResult;
