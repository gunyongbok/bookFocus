import { useNavigate } from 'react-router-dom';

function Main() {
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
