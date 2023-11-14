import React, { useCallback, useEffect } from 'react'
import { MethodRegister } from '../SigninPage/style'
import { Link, useNavigate } from 'react-router-dom'
import iconFace from '../../assets/images/iconFace.png'
import iconGoogle from '../../assets/images/iconGoogle.png'
import { LayoutRegister } from './style'
import '../../index.css'
import * as UserService from '../../services/UserService'
import { Form,Input } from 'antd'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as message from '../../components/Message/Message'
const RegistrationPage = () => {
  const navigate = useNavigate()
  const mutation = useMutationHooks(
    data => UserService.signUpUser(data)
  )
  const {data , isSuccess, isError}=mutation  
  const handleNavigateSignIn = useCallback(() => {
    navigate('/Signin')
  }, [navigate])
  useEffect(()=>{
    if(isSuccess && data?.status==="OK"){
      console.log('data.status', data?.status)
      message.success()
      setTimeout(() => {
        handleNavigateSignIn();
      }, 1000);
    }else if(isError){
      message.error()
    }
  }, [isSuccess, isError,handleNavigateSignIn])

  const [form] = Form.useForm();
  const onFinish = (values) => {
    const email = values.Email
    const password = values.password
    const name = values.username
    const phone = values.phoneNumber
    const confirmPassword = values.password2
    mutation.mutate({
      email,
      password,
      name,
      phone,
      confirmPassword
    }
    );
    // Add your login logic here, for example, call the mutation function.
  };
  return (
    <div>
        <LayoutRegister>
          <div style={{borderBottom: '2px solid var(--black'}}>
            <span style={{fontWeight:600}}>Đăng kí tài khoản</span>
          </div>
          <p>Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt.</p>
          <MethodRegister>
              <Link className='Facebook'><img src={iconFace} alt="" />Facebook</Link>
              <Link className='Google'><img src={iconGoogle} alt="" />Google</Link>
          </MethodRegister>
          <div style={{borderBottom: '2px solid var(--black)'}}>
            <p>Nếu bạn đã đăng kí tài khoản, vui lòng đăng nhập <Link to="/Signin" style={{color: 'red'}}>tại đây</Link>.</p>
            <span>Thông tin cá nhân</span>
          </div>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            form={form}
            
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              label="Tên"
              name="username"
              
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên!',
                },
              ]}
            >
              <Input placeholder="Nhập tên:"/>
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              
              rules={[
                {
                  pattern: /^[0-9+\s]+$/,
                  message: 'Sai định dạng',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại!',
                },
              ]}
            >
              <Input placeholder="Nhập số điện thoại:"/>
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              
              rules={[
                {
                  type: 'email',
                  message: 'Sai định dạng email',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập email!',
                },
              ]}
            >
              <Input placeholder="Nhập email:"/>
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu!',
                }, 
              ]}
              hasFeedback
            >
            <Input.Password placeholder="Nhập mật khẩu:"/>
          </Form.Item>

      {/* Field */}
          <Form.Item
            label="Nhập lại mật khẩu"
            name="password2"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
              
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu:"/>
          </Form.Item>
            {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
            <div style={{textAlign: 'center'}}>
              <button type="primary" htmlType="submit" id='btnSignUp'>Đăng kí</button>
            </div>
        </Form>
        </LayoutRegister>
    </div>
  )
}

export default RegistrationPage