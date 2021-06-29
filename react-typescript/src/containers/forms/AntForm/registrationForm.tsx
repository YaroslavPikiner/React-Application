import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, Row, Typography } from 'antd';
const { Option } = Select;
const RegistarationForm: React.FC = () => {
    const [form] = Form.useForm();

    const btnLayout = {
        wrappedCol: {
            offset: 8,
            span: 16,
        }
    }

    const onFinish = (values: any) => {
        console.log(values.firstname);
    };

    const onGenderChange = (value: string) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ firstname: 'Hi, man!' });
                return;
            case 'female':
                form.setFieldsValue({ firstname: 'Hi, lady!' });
                return;
            case 'other':
                form.setFieldsValue({ firstname: 'Hi there!' });
        }
    }

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            firstname: 'Hello!',
            lastname: 'World',
            email: 'yaroyay@gmail.com',
            gender: 'male',
        });
    };

    return (
        <>
            <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
                <Row>
                    <Form.Item label='Firstname' name='firstname' rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Lastname' name='lastname' rules={[{ required: true, message: 'Please input your last name!' }]}>
                        <Input />
                    </Form.Item>
                </Row>
                <Form.Item wrapperCol={{ span: 11 }} label='Gender' name='gender' rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 11 }} label='Email' name='email' rules={[{ required: true, message: 'enter email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...btnLayout}>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button htmlType="submit" onClick={onFinish}>
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onFill}>
                        Fill
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default RegistarationForm;