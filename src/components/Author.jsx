import styles from '../css/Author.module.css';

function Author({ author, setAuthor }) {
    return (
        <div>
            <input
                name="author"
                placeholder="작가를 작성해주세요"
                value={author}
                onChange={(e) => {
                    setAuthor(e.target.value);
                }}
            ></input>
        </div>
    );
}
export default Author;
