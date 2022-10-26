import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './routes/Main';
import BookFocus from './routes/BookFocus';
import NotFound from './routes/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/bookfocus/*" element={<BookFocus />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
