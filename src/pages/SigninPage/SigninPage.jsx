import React, { useEffect } from 'react'
import { Container } from '../../components/ContainerComponent/ContainerComponent'
import { LayoutSigin, MethodRegister } from './style'
import { Col, Form, Row,Checkbox, Input } from 'antd'
import iconFace from '../../assets/images/iconFace.png'
import iconGoogle from '../../assets/images/iconGoogle.png'
import { Link, useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import {useDispatch} from 'react-redux'
import { jwtDecode } from "jwt-decode";
import { updateUser } from '../../redux/slides/userSlide'
const SigninPage = () => {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const {data,isError,isSuccess} = mutation
  useEffect(()=>{
    if(isSuccess){
      navigate('/')
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      if(data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if(decoded?.id){
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  },[isSuccess,navigate])
  const handleGetDetailsUser = async(id,token) => {
    const res = await UserService.getDetailUser(id,token)
    disPatch(updateUser({...res?.data, access_token: token}))
  }
  const onFinish = (values) => {
    const email = values.email
    const password = values.password
    mutation.mutate({
      email,
      password,
    }
    );
    // Add your login logic here, for example, call the mutation function.
  };
  return (
    <div>
        <Container>
            <LayoutSigin>
              <Row>
                <Col span={10}>
                  <div style={{borderBottom: '1px dotted rgb(204, 204, 204)'}}>
                    <span>Khách hàng mới</span>
                  </div>
                  <p>Đăng kí tài khoản</p>
                  <p>Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt.</p>
                  <MethodRegister>
                    <Link className='Facebook'><img src={iconFace} alt="" />Facebook</Link>
                    <Link className='Google'><img src={iconGoogle} alt="" />Google</Link>
                  </MethodRegister>
                  <div style={{textAlign: 'center'}}>
                    <button><Link to="/Register">tiếp tục</Link></button>
                    
                  </div>
                </Col>
                <Col span={10} offset={3}>
                  <div style={{borderBottom: '1px dotted rgb(204, 204, 204)'}}>
                    <span>Khách hàng cũ</span>
                  </div>
                  <p>Đã có tài khoản</p>
                  <Form
                    name="basic"
                    style={{
                      maxWidth: 600,
                    }}
                    labelCol={{
                      span: 5,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Email"
                      name="email"
                      
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
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      >
                      <Checkbox>Nhớ mật khẩu</Checkbox>
                      <Link style={{color: 'red', textDecoration: 'underline'}}>Quên mật khẩu?</Link>
                    </Form.Item>
                  <MethodRegister>
                    <Link className='Facebook'><img src={iconFace} alt="" />Facebook</Link>
                    <Link className='Google'><img src={iconGoogle} alt="" />Google</Link>
                  </MethodRegister>
                  
                    <div style={{textAlign: 'center'}}>
                      {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
                      <button button type="primary" htmlType="submit" id='btnSignin'>Đăng nhập</button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </LayoutSigin>
        </Container>
    </div>
  )
}

export default SigninPage