import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
// import Card from "react-bootstrap/Card";

const CommentList = function (props) {
  return (
    <>
      <ListGroup variant="flush" data-bs-theme="dark" className="border-0 px-3 bg-transparent">
        <h2 className="text-center mb-3" style={{ color: "#d20b15" }}>
          REVIEWS
        </h2>
        {props.commentsArray.map((comment) => {
          return (
            <SingleComment
              key={comment._id}
              commentID={comment._id}
              commentText={comment.comment}
              commentRate={comment.rate}
              getComments={props.getComments}
            ></SingleComment>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CommentList;
