import styled from 'styled-components';

const AuthorInput = styled.input`
    text-align: center;
    width: 20vw;
    height: 3vh;
    border: none;
    border-radius: 20px;
`;

function Author({ author, setAuthor }) {
    return (
        <div>
            <AuthorInput
                name="author"
                placeholder="작가를 작성해주세요"
                value={author}
                onChange={(e) => {
                    setAuthor(e.target.value);
                }}
            ></AuthorInput>
        </div>
    );
}
export default Author;
