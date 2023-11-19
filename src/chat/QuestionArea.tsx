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
                    <Form.Control as="textarea" placeholder="Ask your question..." rows={3}/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Button variant="secondary" type="submit">Find answer</Button>
                </Col>
            </Row>
        </Form.Group>
    );
}