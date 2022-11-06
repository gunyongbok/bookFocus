import React, { useEffect, useState } from 'react';
import { bookSearch } from '../components/api';
import Item from '../components/BookList';
import styles from '../css/BookSearch.module.css';

const BookSearch = (props) => {
    const [books, setBooks] = useState([]);
    const [text, setText] = useState('');
    const [query, setQuery] = useState('');

    // 엔터를 눌렀을 때 호출 되는 함수
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            setQuery(text);
        }
    };
    // text 검색어가 바뀔 때 호출되는 함수.
    const onTextUpdate = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        if (query.length > 0) {
            bookSearchHttpHandler(query, true);
        }
    }, [query]);

    // blog search 핸들러
    const bookSearchHttpHandler = async (query, reset) => {
        // paramter 설정
        const params = {
            query: query,
            sort: 'accuracy', // accuracy | recency 정확도 or 최신
            page: 1, // 페이지번호
            size: 20, // 한 페이지에 보여 질 문서의 개수
        };

        const { data } = await bookSearch(params);
        if (reset) {
            setBooks(data.documents);
        } else {
            setBooks(books.concat(data.documents));
        } // api 호출
        console.log(data); // 결과 호출
    };
    return (
        <div className={styles.container}>
            <input
                type="search"
                placeholder="검색어를 입력 하세요..."
                name="query"
                className={styles.input_search}
                onKeyDown={onEnter} //enter
                onChange={onTextUpdate} //change
                value={text} //view
            />
            <ul className={styles.ul}>
                {books.map((book, index) => (
                    <Item
                        className={styles.li}
                        key={index}
                        thumbnail={book.thumbnail}
                        title={book.title}
                        authors={book.authors}
                        contents={book.contents}
                        url={book.url}
                    />
                ))}
            </ul>
        </div>
    );
};

export default BookSearch;
