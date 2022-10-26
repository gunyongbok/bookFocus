import styled from 'styled-components';

const TitleInput = styled.input`
    text-align: center;
    height: 5vh;
    width: 40vw;
    border: none;
    border-radius: 20px;
`;
const MainTitleInput = styled.input`
    text-align: center;
    height: 5vh;
    width: 40vw;
    border: none;
    border-radius: 20px;
    margin-bottom: 10px;
`;

function Title({ title, topTitle, setTitle, setTopTitle }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MainTitleInput
                value={topTitle}
                onChange={(e) => {
                    setTopTitle(e.target.value);
                }}
                name="topTitle"
                placeholder="독서록 제목을 작성해주세요"
            ></MainTitleInput>
            <TitleInput
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                name="title"
                placeholder="책 제목을 작성해주세요"
            ></TitleInput>
        </div>
    );
}
export default Title;
