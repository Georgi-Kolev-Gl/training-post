import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Post.module.scss";

export default function Post({ isUsingCardView, userId, id, title, body }) {
  const [comments, setComments] = useState([]);
  const [areCommentsFetched, setAreCommentsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadComments = () => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
        setAreCommentsFetched(true);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Card className={isUsingCardView ? styles.card : styles.list}>
      <Card.Header>
        This is from user: <Link to={`/users/${userId}`}>{userId}</Link>
      </Card.Header>
      <Card.Body className={styles.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>

        <Button
          variant="primary"
          className={styles.button}
          onClick={loadComments}
        >
          {/* {areCommentsFetched ? "Hide Comments" : "View Comments"} */}
          {isLoading ? 'Loading…' : 'Click to load'}
        </Button>
      </Card.Body>
      {areCommentsFetched && (
        <Card.Footer>{comments.map((comment) => comment.email)}</Card.Footer>
      )}
    </Card>
  );
}
