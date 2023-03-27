import classes from "./comment-list.module.css";

function CommentList(props) {
  const comments = props.comments;
  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <li key={comment._id}>
          <p>{comment.text}</p>
          <div>By {comment.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
