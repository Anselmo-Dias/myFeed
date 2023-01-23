import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

interface CommentProps {
    content: String;
    onDeleteComment: (comment : String) => void;
}

export function Comment(props : CommentProps) {

    const [ likeCount, setLikeCount ] = useState(0)

    function handleDeleteComment() {
        {props.onDeleteComment(props.content)}
    }

    function handleIncrementNumberInLike() {
        setLikeCount((state) => {
           return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/96529532?s=400&u=78faee6d76286461b848ab25a32c94bcc84f3025&v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anselmo Dias</strong>
                            <time title="16 de Maio ás 19:56h" dateTime="2022-10-16 19:57:38">
                                cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleIncrementNumberInLike}>
                        <ThumbsUp/>
                        aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}