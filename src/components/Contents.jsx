import styled from 'styled-components';

const ContentsInput = styled.textarea`
    width: 90vw;
    height: 50vh;
    text-align: center;
    font-size: 20px;
    border: none;
    border-radius: 20px;
    &:focus {
        outline: none;
    }
    background-color: #fbf3db;
`;

function Contents({ contents, setContents }) {
    return (
        <ContentsInput
            name="contents"
            placeholder="책 내용을 작성해주세요"
            value={contents}
            onChange={(e) => {
                setContents(e.target.value);
            }}
        ></ContentsInput>
    );
}
export default Contents;
