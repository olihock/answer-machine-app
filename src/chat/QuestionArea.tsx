import Form from "react-bootstrap/Form";
import {Button, ButtonGroup, Col, Dropdown, Row} from "react-bootstrap";

export function QuestionArea() {

    return (
        <Form.Group controlId="formGroup">
            <Row>
                <Col>
                    {/* UploadButton */}
                    <Form.Control type="file"/>
                </Col>
                <Col>
                    {/* DocumentCategory */}
                    <Dropdown as={ButtonGroup}>
                        <Button variant="secondary">Programmierung</Button>
                        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic"/>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Programmierung</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Geschichte</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Medizin</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    {/* QuestionField */}
                    <Form.Control as="textarea" placeholder="Ask your question..." rows={3}/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    {/* QuestionButton */}
                    <Button variant="secondary" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                             className="bi bi-send-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                        </svg>
                    </Button>
                </Col>
            </Row>
        </Form.Group>
    );
}