import { Button, Form, Input, Radio } from 'antd'

const SignUpPage = () => {
    return (
        <div className="flex justify-center items-center flex-1">
            <Form
                className="min-w-[400px] p-6 bg-white rounded-lg flex flex-col gap-1"
                layout="vertical"
            >
                <h1 className="text-4xl font-bold text-center mb-2 select-none">
                    Sign Up
                </h1>
                <p className="font-medium mb-3 text-center text-gray-500">
                    Join to keep track of your expenses
                </p>
                <Form.Item
                    label={<p className="form-label">Full Name</p>}
                    name="fullName"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={<p className="form-label">Username</p>}
                    name="username"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={<p className="form-label">Password</p>}
                    name="password"
                    className="form-input"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label="Gender">
                    <Radio.Group>
                        <Radio className='bg-transparent' value="male">Male </Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="form-label w-full bg-black mt-3"
                    >
                        Sign Up
                    </Button>
                </Form.Item>

                <p className="font-normal text-gray-400 text-center">
                    Already have an account? <a href="/login">Login here</a>
                </p>
            </Form>
        </div>
    )
}

export default SignUpPage
