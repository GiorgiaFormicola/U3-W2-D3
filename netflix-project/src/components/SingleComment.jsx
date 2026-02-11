import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const SingleComment = function (props) {
  return (
    <ListGroup.Item className="d-flex justify-content-between p-3 align-items-center bg-transparent border-bottom border-top border-light border-opacity-10 ">
      <span className="fst-italic">"{props.commentText}"</span>
      <div className="d-flex gap-3">
        <small className="text-secondary d-none d-lg-flex align-items-center gap-1">
          <span>{props.commentRate}/5</span>
          <i className="bi bi-star-fill" style={{ fontSize: "0.8em" }}></i>
        </small>
      </div>
    </ListGroup.Item>
  );
};

export default SingleComment;
