import styles from '../css/Title.module.css';

function Title({ title, topTitle, setTitle, setTopTitle }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                className={styles.mainTitleInput}
                value={topTitle}
                onChange={(e) => {
                    setTopTitle(e.target.value);
                }}
                name="topTitle"
                placeholder="독서록 제목을 작성해주세요"
            ></input>
            <input
                className={styles.titleInput}
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                name="title"
                placeholder="책 제목을 작성해주세요"
            ></input>
        </div>
    );
}
export default Title;
