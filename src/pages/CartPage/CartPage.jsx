
import React, { useState } from 'react'
import { Container } from '../../components/ContainerComponent/ContainerComponent'
import { InforShip } from './style'
import { Checkbox, Col, Form, Input, Row, Select } from 'antd'
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/cash-on-delivery (2) 1.svg'
import icon2 from '../../assets/images/image 143.svg'
import icon3 from '../../assets/images/send-money 1.svg'
import '../../index.css'
import LayoutCartProduct from '../../components/LayoutCartProduct/LayoutCartProduct'
const CartPage = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onChange = (e, checkboxValue) => {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked) {
          setSelectedCheckbox(checkboxValue);
        } else {
          setSelectedCheckbox(null);
        }
      };
  return (
    <div>
        <Container>
            <InforShip>
                <div className="infor">
                    <Row>
                        <Col span={8}><h4>Thông tin vận chuyển</h4></Col>
                        <Col span={8} offset={8}>
                            <span>Bạn đã có tài khoản chưa: <Link to="/SignIn">Đăng nhập ngay</Link></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11}>
                            <Form.Item  >
                                <Input type='text' placeholder="Họ và tên" />
                            </Form.Item>
                        </Col>
                        <Col span={11} offset={2}>
                            <Form.Item  >
                                <Input type='text' placeholder="Số điện thoại" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item  >
                        <Input type='email' placeholder="Email" />
                    </Form.Item>
                    <Form.Item  >
                        <Input type='text' placeholder="Địa chỉ cụ thể" />
                    </Form.Item>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <Select style={{width: '33%'}} 
                            defaultValue="Chọn Tỉnh/Thành"
                            onChange={handleChange}
                            options={[
                                {
                                value: 'jack',
                                label: 'Jack',
                                },
                                {
                                value: 'lucy',
                                label: 'Lucy',
                                },
                            ]}
                            />
                            
                        <Select style={{width: '33%'}}
                            defaultValue="Chọn Quận/Huyện"
                            onChange={handleChange}
                            options={[
                                {
                                value: 'jack',
                                label: 'Jack',
                                },
                                {
                                value: 'lucy',
                                label: 'Lucy',
                                },
                            ]}
                        />
                        <Select style={{width: '33%'}}
                            defaultValue="Chọn Phường/Xã"
                            onChange={handleChange}
                            options={[
                                {
                                value: 'jack',
                                label: 'Jack',
                                },
                                {
                                value: 'lucy',
                                label: 'Lucy',
                                },
                            ]}
                        />
                    </div>
                    <h4>Hình thức thanh toán</h4>
                    <ul>
                        <li>
                            <Checkbox onChange={(e) => onChange(e, 'option1')} checked={selectedCheckbox === 'option1'}>
                            </Checkbox>
                            <img src={icon1} alt="" /> COD Thanh toán khi nhận hàng
                        </li>
                        <li>
                            <Checkbox onChange={(e) => onChange(e, 'option2')} checked={selectedCheckbox === 'option2'}>
                            </Checkbox>
                            <img src={icon2} alt="" /> Thẻ ATM / Internet BankingThẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)VNPay QR
                        </li>
                        <li>
                            <Checkbox onChange={(e) => onChange(e, 'option3')} checked={selectedCheckbox === 'option3'}>
                            </Checkbox>
                            <img src={icon3} alt="" /> Chuyển khoản
                        </li>
                    </ul>
                    <button><span>Thanh toán: 1231321 đ</span></button>
                </div>
                <div className="cart">
                    <h4>Giỏ hàng</h4>
                    <LayoutCartProduct/>
                </div>
            </InforShip>
        </Container>
    </div>
  )
}

export default CartPage