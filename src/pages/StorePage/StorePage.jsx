import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Container } from '../../components/ContainerComponent/ContainerComponent';
import pin from '../../assets/images/location-pin 2.png';
import phone from '../../assets/images/phone 1.png';
import email from '../../assets/images/email 1.png';
import { Address } from './style';
import '../../index.css'
const StorePage = () => {
  const addresses = [
    {
      address: "70 Tô ký, Tân Chánh Hiệp, Quận 12",
      key: 1,
      phone: "0795718425",
      email: "turtlebeautiful96@gmail.com",
    },
    {
      address: "1206 Kha Vạn Cân, Linh Trung, Thủ Đức",
      key: 2,
      phone: "Another Phone",
      email: "another.email@example.com",
    },
  ];

  // Sử dụng state để theo dõi địa chỉ được chọn
  const [selectedAddress, setSelectedAddress] = useState(0);

  const handleAddressClick = (index) => {
    // Cập nhật state khi địa chỉ được chọn
    setSelectedAddress(index);
  };

  const selectedAddressData = addresses[selectedAddress];

  return (
    <div>
      <Container>
        <h1 style={{textAlign: "center"}}>HỆ THỐNG CỬA HÀNG</h1>
        <Row style={{ margin: '10px 100px' }}>
          <Col span={16} push={7}>
            <iframe
              title="Google Maps"
              src={
                selectedAddressData.key === 1
                  ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2928860621423!2d106.61457262250713!3d10.86531356382464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a10b0f0554f%3A0x769800e8967d6703!2zNzAgVMO0IEvDvSwgVMOibiBDaMOhbmggSGnhu4dwLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700482965997!5m2!1svi!2s"
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.349615852621!2d106.75845127514691!3d10.86099088929299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279ac4acdd27%3A0x5f8144432ffbab85!2zMTIwNiDEkC4gS2hhIFbhuqFuIEPDom4sIFBoxrDhu51uZyBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700483892332!5m2!1svi!2s"
              }
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col span={6} pull={16}>
            {addresses.map((address, index) => (
              <Address
                key={index}
                selected={selectedAddress === index}
                onClick={() => handleAddressClick(index)}
              >
                <h2>Chi Nhánh {index + 1}</h2>
                <li>
                  <img src={pin} alt="" />
                  <span>{address.address}</span>
                </li>
                <li>
                  <img src={phone} alt="" />
                  <span>{address.phone}</span>
                </li>
                <li>
                  <img src={email} alt="" />
                  <span>{address.email}</span>
                </li>
              </Address>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StorePage;
