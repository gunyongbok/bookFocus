import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BookList = styled.ul``;

const Books = styled.li``;

function Main({ data }) {
    let navigate = useNavigate();
    const a = Object.entries(data)[3][1];
    console.log(a[0].bookReportId);
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
                    </Books>
                ))}
            </BookList>
        </div>
    );
}

export default Main;
