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

type Prop = {
    from: string,
    to: string,
    date: string,
    hourInRoad: number,
    timeArrive: string,
    firstName: string,
    lastName: string,
    card: number,
    dateOfCard: string,
    cvv: number,
    sale: boolean,
}


const TrainTicket = () => {
    const [form] = Form.useForm();

    const layout = {
        wrappedCol: {
            offset: 8,
            span: 16,
        }
    }


    const btnLayout = {
        wrappedCol: {
            offset: 8,
            span: 16,
        }
    }


    const onFinish = (values: any) => {
        console.log(values)
    }

    return (
        <>
            <Form {...layout} onFinish={onFinish} form={form} name="basic" initialValues={{ remember: true }}>
                <Form.Item wrapperCol={{ span: 11 }} label="To" name='to' rules={[{ required: false, message: 'Please input' }]}> <Input /> </Form.Item>
                <Form.Item wrapperCol={{ span: 11 }} label="From" name='form' rules={[{ required: false, message: 'Please input !' }]}> <Input /> </Form.Item>
                <Form.Item wrapperCol={{ span: 11 }} label='Date' name='date' rules={[{ required: false, message: 'Please input !' }]}><DatePicker /> </Form.Item>
                <Form.Item wrapperCol={{ span: 10 }} label='Hours in road' name='roadHours' rules={[{ required: false }]}><Input /> </Form.Item>
                <Form.Item wrapperCol={{ span: 11 }} label='Arrived' name='arrived' rules={[{ required: false, message: 'Please input !' }]}><DatePicker /> </Form.Item>
                <Form.Item wrapperCol={{ span: 12 }}>
                    <Divider orientation="center" dashed={true} >Train ticket Form</Divider>
                </Form.Item>
                <Row >
                    <Col span={6}> <Form.Item label='Firstname' name='firstname' rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='Lastname' name='lastname' rules={[{ required: true, message: 'Please input your last name!' }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}> <Form.Item label='Card Number' name='card' rules={[{ required: true, message: 'Please input your card data' }]}>
                        <Input />
                    </Form.Item>
                    </Col>
                </Row>
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
                <Form.Item label='On saled' name='sale'><Switch /></Form.Item>
                <Form.Item {...btnLayout}>
                    <Button htmlType="submit" onClick={onFinish}>
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </>
    )
}


export default TrainTicket;