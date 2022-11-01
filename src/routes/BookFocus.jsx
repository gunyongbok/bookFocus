import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Author from '../components/Author';
import Contents from '../components/Contents';
import book1 from '../images/book1.png';
import book2 from '../images/book2.png';
import '../BookFocus.css';

const SERVER_URL =
    'http://ec2-52-79-150-177.ap-northeast-2.compute.amazonaws.com:24330/api/v1/report';

const Container = styled.div`
    height: 100vh;
    background-color: #e2cda6;
`;
const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
`;
const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Button = styled.button`
    width: 10vw;
    height: 5vh;
    font-size: 20px;
    border-radius: 20px;
    border: none;
    background-color: #fbf3db;
`;
function BookFocus() {
    const [data, setData] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [contents, setContents] = useState('');
    const [topTitle, setTopTitle] = useState('');
    const fetchData = async () => {
        const response = await axios.get(SERVER_URL);
        setData(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    console.log(data['result'][0]);

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

    const deleteAllHandler = async (e) => {
        await axios
            .put(`${SERVER_URL}/${data['result'][0].bookReportId}`, null)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log('Error :', error));
    };

    return (
        <Container>
            <Form onSubmit={onSubmitHandler}>
                <Header>
                    <img src={book1} />
                    <Title
                        title={title}
                        topTitle={topTitle}
                        setTitle={setTitle}
                        setTopTitle={setTopTitle}
                    />
                    <img src={book2} />
                </Header>
                <Author author={author} setAuthor={setAuthor} />
                <Contents contents={contents} setContents={setContents} />
                <Button>저장</Button>
            </Form>
            <button onClick={deleteAllHandler}>다 삭제</button>
        </Container>
    );
}

export default BookFocus;
