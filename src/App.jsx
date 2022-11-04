import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './routes/Main';
import BookFocus from './routes/BookFocus';
import NotFound from './routes/NotFound';
import BookResult from './routes/BookResult';
import axios from 'axios';
import { useQuery } from 'react-query';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,body {
    margin: 0;
    height: 100vh;
    }
    input:focus {
        outline: none;
    }
    img {
        width: 20vh;
    }
`;

const SERVER_URL =
    'http://ec2-52-79-150-177.ap-northeast-2.compute.amazonaws.com:24330/api/v1/report';

function App() {
    const { isLoading, data } = useQuery('data', async () => {
        const { data } = await axios.get(SERVER_URL);
        return data;
    });

    return (
        <>
            <BrowserRouter>
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    <Routes>
                        <Route path="/" element={<Main data={data} />} />
                        <Route
                            path="/bookfocus"
                            element={<BookFocus data={data} />}
                        />
                        <Route
                            path="/bookresult/:id"
                            element={<BookResult data={data} />}
                        />
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                )}
            </BrowserRouter>
            <GlobalStyles />
        </>
    );
}

export default App;
