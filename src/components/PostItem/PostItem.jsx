import {Row, Col, Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removePost, editPost} from "../../store/actionCreators/Posts";
import {memo} from "react";

const PostItem = (props) => {
    const {title, body, id} = props.post;
    const dispatch = useDispatch();

    return (
        <>
            <Card style={{width: "22.5rem"}}>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>
                        {id} {title}
                    </Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Row>
                        <Col>
                            <Button
                                variant="outline-primary"
                                style={{position: "relative"}}
                            >
                                <Link
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    to={{pathname: `/posts/${id}`, state: props.post}}
                                />
                                Read more
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="outline-primary"
                                onClick={() => dispatch(removePost(id))}
                            >
                                Remove post
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    dispatch(
                                        editPost(id, {
                                            title: "updated Title",
                                            body: "updated Body",
                                        })
                                    )
                                }
                            >
                                edit
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default memo(PostItem);
// export default PostItem;
