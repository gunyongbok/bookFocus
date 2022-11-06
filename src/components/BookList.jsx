import React from 'react';
import styles from '../css/BookList.module.css';

const Item = (props) => {
    return (
        <li className={styles.li}>
            <dl>
                <dt>
                    <img src={props.thumbnail} alt={props.thumbnail} />
                </dt>
                <dd>
                    <h3>{props.title}</h3>
                    <p>{props.authors}</p>
                    <article>{props.contents}</article>
                    <a href={props.url}>링크 바로가기</a>
                </dd>
            </dl>
        </li>
    );
};

export default Item;
