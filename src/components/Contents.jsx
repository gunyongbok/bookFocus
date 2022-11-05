import styles from '../css/Contents.module.css';

function Contents({ contents, setContents }) {
    return (
        <textarea
            name="contents"
            placeholder="책 내용을 작성해주세요"
            value={contents}
            onChange={(e) => {
                setContents(e.target.value);
            }}
        ></textarea>
    );
}
export default Contents;
