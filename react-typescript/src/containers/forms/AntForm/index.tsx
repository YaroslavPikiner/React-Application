import { Row, Col, Divider } from 'antd';
import SimpleForm from './simpleForm';
import RegistrationForm from './registrationForm';
import TrainTicket from './trainTicket';
import HiddenForm from './hiddenForm';
import 'antd/dist/antd.css';

const AntRoot: React.FC = () => {
    return (
        <>
            <Divider orientation="center">Login Ant Form</Divider>
            <Row>
                <Col span={12} offset={6}>
                    <SimpleForm />
                </Col>
            </Row>
            <Divider orientation="center">Regisration Form</Divider>
            <Row>
                <Col span={12} offset={10}>
                    <RegistrationForm />
                </Col>
            </Row>
            <Row>
                <Divider orientation="center">Train ticket Form</Divider>
                <Col span={12} offset={10}>
                    <TrainTicket />
                </Col>
            </Row>
            <Row>
                <Divider orientation="center">Hidden Form</Divider>
                <Col span={12} offset={10}>
                    <HiddenForm />
                </Col>
            </Row>
        </>
    )
}


export default AntRoot;