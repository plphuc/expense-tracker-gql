import { Button, Form, Input } from 'antd'

const LoginPage = () => {
    return (
        <div className="flex justify-center items-start flex-1">
            <Form
                className="min-w-[400px] p-8 bg-white rounded-lg flex flex-col gap-1"
                layout="vertical"
            >
                <h1 className="text-4xl font-bold text-center mb-2 select-none">Login</h1>
                <p className="font-medium mb-5 text-gray-500 text-center">
                    Welcome back! Log in to your account
                </p>
                <Form.Item
                    label={<p className='form-label'>Username</p>}
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
                    <Input.Password/>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="form-label w-full bg-black mt-3"
                    >
                        Login
                    </Button>
                </Form.Item>

                <p className="font-normal text-gray-400 text-center">
                    Don&apos;t have an account? <a href="/sign-up">Sign Up</a>
                </p>
            </Form>
        </div>
    )
}

export default LoginPage
