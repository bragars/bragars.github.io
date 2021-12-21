import { Container, Col, Row } from 'react-bootstrap';
import WorkTimeLine from '../../Components/Work/WorkTimeLine';
import ExperienceTimeLine from '../../Components/Work/ExperienceTimeline';
import './styles.css';

const Work = () => {
  return (
    <Container>
      <Row>
        <Col>
          <WorkTimeLine />
          <ExperienceTimeLine />
        </Col>
      </Row>
    </Container>
	);
}

export default Work;
