import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Row,
    Col,
    Divider
} from 'antd';
import 'antd/dist/antd.css';
import { truncate } from 'fs/promises';

const HiddenForm = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log(values);
    }

    const handleChange = (value: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      console.log(form);
    }

    return (
        <Form form={form} name='fide form' onFinish={onFinish} >
            <Form.Item name='firstName' label="First Name" >
                <Input onChange={handleChange}/>
            </Form.Item>
            <Form.Item name='lastName' label="First Name">
                <Input hidden={isHidden} />
            </Form.Item>
            <Row>
                <Col span={6}>
                    <Form.Item label='Card Data' name='cardData' rules={[{ required: true, message: 'Please input your last name!' }]}>
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label='cvv' name='cvv' rules={[{ required: true, message: 'Please input your last name!' }]}>
                        <Input.Password min={3} max={3} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item >
                <Button htmlType="submit" onClick={onFinish}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default HiddenForm;