import { useMutation } from '@apollo/client'
import { Button, Form, Input } from 'antd'
import { LOG_IN } from '../graphql/mutations/user.mutation'
import toast from 'react-hot-toast'
import { useState } from 'react'

const LoginPage = () => {
    const [logInData, setLogInData] = useState({
        username: '',
        password: '',
    })
    const [login, { loading }] = useMutation(LOG_IN, {
        refetchQueries: ['GetAuthenticatedUser'],
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setLogInData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleSubmit = async () => {
        try {
            await login({ variables: { input: logInData } })
        } catch (error) {
            console.error('Error logging in: ', error)
            toast.error(error.message)
        }
    }

    return (
        <div className="flex justify-center items-center flex-1">
            <Form
                className="min-w-[400px] p-8 bg-white rounded-lg flex flex-col gap-1"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <h1 className="text-4xl font-bold text-center mb-2 select-none">
                    Login
                </h1>
                <p className="font-medium mb-5 text-gray-500 text-center">
                    Welcome back! Log in to your account
                </p>
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
                    <Input onChange={handleChange} />
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
                    <Input.Password onChange={handleChange} />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="form-label w-full bg-black mt-3"
                        loading={loading}
                    >
                        Login
                    </Button>
                </Form.Item>

                <p className="font-normal text-gray-400 text-center">
                    {"Don't"} have an account? <a href="/sign-up">Sign Up</a>
                </p>
            </Form>
        </div>
    )
}

export default LoginPage
