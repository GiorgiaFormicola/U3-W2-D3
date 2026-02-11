import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";
// import Card from "react-bootstrap/Card";

const CommentList = function (props) {
  return (
    <>
      <ListGroup variant="flush" data-bs-theme="dark" className="border-start ps-3 pt-4 border-1 border-light border-opacity-10 bg-transparent w-25">
        <h2 className="text-center mb-0 pb-4" style={{ color: "#d20b15" }}>
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
