import {QuestionArea} from "./QuestionArea";
import {Container} from "react-bootstrap";

export function ChatView() {

    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <QuestionArea />
            </Container>
        </Container>
    );
}