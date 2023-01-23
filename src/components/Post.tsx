// import { format } from 'date-fns';
// import format from 'date-fns/format'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
// import ptBR from 'date-fns/locale/pt-BR';
import styles from "./post.module.css";
import { useState, FormEvent, ChangeEvent, InvalidEvent} from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link" 
  content: string;
}

interface PostProps{
  author: Author;
  publishedAt: Date;
  content: Content[];
}


export function Post({author, publishedAt, content} : PostProps) {

  const [comments, setComments] = useState([
    "Manoo q daoraa isso dai kkk, top dmsss",
  ])

  const [newCommentText, setNewCommentText] = useState('');

  

  const publishedDateFormatted = new Intl.DateTimeFormat('pt-Br', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt) 

  //  function padTo2Digits(num) {
  //   return num.toString().padStart(2, '0');
  // }

  //  function formatDate(date) {
  //   return [
  //     padTo2Digits(date.getDate()),
  //     padTo2Digits(date.getMonth() + 1),
  //     date.getFullYear(),
  //   ].join('/')

  //  }
 
  // const dateFormatted = formatDate(new Date()) ; 

  const dataTime = new Date();



   function handleCreateNewComment(event : FormEvent) {
    event.preventDefault()

    

    setComments([...comments, newCommentText])
    setNewCommentText('')
   }

   function hadleNewCommentchange(event : ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
   }

   function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
   }

   function deleteComment(commentToDelete : String) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete ;
    })
     
    setComments(commentsWithoutDeletedOne);

    
   }

   const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}  />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
      
        <time title={publishedDateFormatted} dateTime={dataTime.toISOString()}>
          dateFormatted
        </time>
        
      </header>

      <div className={styles.content}>
        {content.map(item => {
            if (item.type === 'paragraph') {
                return <p key={item.content}>{item.content}</p>
            } else if (item.type === 'link') {
              return <p key={item.content}> <a href="#">{item.content}</a> </p>
            }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            name='comment'
            value={newCommentText}
            placeholder="Deixe seu comentario..."
            onChange={hadleNewCommentchange}
            onInvalid={handleNewCommentInvalid}
            required
          />
            
          <div className={styles.focusButtonVisible}>
            <button type="submit" disabled={ isNewCommentEmpty }>Enviar</button>
          </div>
      </form>
      <div className={styles.commentList}>
            {comments.map(comment => {
              return (
                <Comment 
                  key={comment}
                  onDeleteComment={deleteComment}
                  content={comment} 
                  
                />
              )
            })}
      </div>
    </article>
  );
}
