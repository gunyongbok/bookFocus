import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
        </div>
    );
}

export default Main;
