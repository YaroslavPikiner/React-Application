import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

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
const { Option } = Select;

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

interface IPay {
    cvc: any,
    expiry: any,
    focus: any,
    name: any,
    number:any,
    issuer: any
}

const TrainTicket = () => {
    const [form] = Form.useForm();
    const [paymentForm, setPaymentForm] = useState<any>({
        cvc: '',
        expiry: '',
        focused: '',
        name: '',
        number: '',
        issuer: '',
    })

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

    const handleInputFocus = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPaymentForm((prev:IPay) => ({
            ...prev,
            focused: e.target.name
        }))
      }
      
     const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentForm((prev:IPay) => ({
            ...prev,
            [name]:value
        }))
      }

      console.log(paymentForm)
      const onGenderChange = (value: string) => {
        switch (value) {
            case 'visa':
                setPaymentForm((prev:IPay) => ({
                    ...prev,
                    issuer:value
                }))
                return;
            case 'mastercard':
                setPaymentForm((prev:IPay) => ({
                    ...prev,
                    issuer:value
                }))
                return;
            default: return value
        }
    }

    const onFinish = (values: any) => {
        console.log(values)
    }

    return (
        <>
            <Form {...layout} onFinish={onFinish} form={form} name="basic2" initialValues={{ remember: true }}>
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
                    <Col span={12}>
                    <Cards
                        cvc={paymentForm.cvc}
                        expiry={paymentForm.expiry}
                        focused={paymentForm.focus}
                        name={paymentForm.name}
                        number={paymentForm.number}
                        />
                        <form>
                            <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                            <input
                            type="tel"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                             <input
                            type="tel"
                            name="expiry"
                            placeholder="Enter expiry"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                             <input
                            type="tel"
                            name="cvc"
                            placeholder="Enter cvc"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="visa">Visa</Option>
                        <Option value="mastercard">Mastercard</Option>
                    </Select>
                        </form>
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