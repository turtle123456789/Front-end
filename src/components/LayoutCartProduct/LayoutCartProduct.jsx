import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Row } from 'antd'
import ButtonGroup from 'antd/es/button/button-group';
import React, { useState } from 'react'
import img from '../../assets/images/image 119 (16).webp'
import { ProductPrice } from '../CardProductComponent/style';
const LayoutCartProduct = () => {
    const [count, setCount] = useState(5);
    const increase = () => {
        setCount(count + 1);
    };
    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
        newCount = 0;
        }
        setCount(newCount);
    };
    const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number); // Chọn ngôn ngữ và quốc gia theo ý muốn
    };
  return (
    <div>
        <Row>
            <Col span={18} push={6}>
                <p>asdasdasd</p><CloseOutlined />
                <ButtonGroup >
                    <Button onClick={decline} icon={<MinusOutlined />} />
                    <span style={{padding: '5px 10px', borderRadius: '5px', background: '#F5F6F9', margin: '0 5px'}}>{count}</span>
                    <Button onClick={increase} icon={<PlusOutlined />} />
                </ButtonGroup>
                <ProductPrice>
                    <div>
                        <span className="originalPrice">{formatNumber(1414142)} đ</span>
                        <span className="discountedPrice">{formatNumber(424242424)} đ</span>
                    </div>
                </ProductPrice>
            </Col>
            <Col span={6} pull={18}>
                <Badge count={count}>
                    <img style={{maxWidth: '100px'}} src={img} alt="" />
                </Badge>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default LayoutCartProduct