import React from 'react'
import icon0 from '../../assets/images/iconFooter (1).webp'
import icon1 from '../../assets/images/iconFooter (2).webp'
import icon2 from '../../assets/images/iconFooter (3).webp'
import icon3 from '../../assets/images/iconFooter (4).webp'
import iconTick from '../../assets/images/image 154.svg'
import iconVisa from '../../assets/images/Visa.svg'
import iconVNPay from '../../assets/images/VNPay.svg'
import iconJCB from '../../assets/images/JCB.svg'
import iconMasterCard from '../../assets/images/MasterCard.svg'
import iconEmail from '../../assets/images/email 1.svg'
import iconLocation from '../../assets/images/location-pin 2.svg'
import iconPhone from '../../assets/images/phone 1.svg'
import { BodyFooter, FormEmail, Policy } from './style'
import { LogoShop } from '../HeaderComponent/style'
import logoShop from '../../assets/images/logoMain.png'
import { Button, Input } from 'antd'
import { Container } from '../ContainerComponent/ContainerComponent'
const FooterComponent = () => {
  return (
    <div>
        <Container>
            <Policy>
                <div>
                    <img src={icon0} alt="" />
                    <p>Mỹ phẩm chính hãng</p>
                    <span>Sản phẩm đa dạng, giá tốt nhất từ các thương hiệu uy tín</span>
                </div>
                <div>
                    <img src={icon1} alt="" />
                    <p>Giao hàng toàn quốc</p>
                    <span>Miễn phí vận chuyển đơn hàng từ 99k</span>
                </div>
                <div>
                    <img src={icon2} alt="" />
                    <p>7 ngày đổi trả miễn phí</p>
                    <span>Chính sách hậu mãi hấp dẫn, luôn đảm bảo quyền lợi khách hàng</span>
                </div>
                <div>
                    <img src={icon3} alt="" />
                    <p>Miễn phí tư vấn các vấn đề về da</p>
                    <span>Liên hệ Hotline 1900 7101 để được tư vấn</span>
                </div>
            </Policy>
            <br /><br />
            <BodyFooter>
                <div style={{maxWidth: '410px'}}>
                    <h4>Thông tin liên hệ</h4>
                    <img src={logoShop} alt="" style={LogoShop}/>
                    <p>Chuỗi Cửa Hàng Phân Phối Mỹ Phẩm Chính Hãng Giá Tốt với 100+ thương hiệu chuyên sỉ & lẻ tại TP. Hồ Chí Minh. Hoạt động vững mạnh từ năm 2023.</p>
                    <span>HỘ KINH DOANH BO SHOP</span>
                    <p>Giấy chứng nhận đăng ký kinh doanh số 41O8026919, Mã số thuế số 0314070738, cấp ngày 04 tháng 10 năm 2013 tại Thành phố Hồ Chí Minh</p>
                    <div>
                        <li>
                            <img src={iconLocation} alt="" />
                            153 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh
                        </li>
                        <li>
                            <img src={iconPhone} alt="" />
                            1900 7101 - 090 4724 111
                        </li>
                        <li>
                            <img src={iconEmail} alt="" />
                            cskh@boshop.vn
                        </li>
                    </div>
                </div>
                <div>
                    <h4>Về chúng tôi</h4>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Câu chuyện thương hiệu</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Thương hiệu</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tin tức</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kinh nghiệm làm đẹp</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Hệ thống cửa hàng</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tuyển dụng</a></li>
                </div>
                <div>
                    <h4>Chính sách</h4>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chính sách bảo mật</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chính sách giao hàng</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chính sách đổi trả</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chính sách thanh toán</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Điều khoản sử dụng</a></li>
                    <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Hướng dẫn mua hàng</a></li>
                </div>
                <div>
                    <h4>Đăng ký nhận tin</h4>
                    <FormEmail >
                        <Input className='input' placeholder='Nhập địa chỉ email...' type='email' ></Input>
                        <Button className='button' type='primary'><span style={{color: 'var(--white)'}}>Đăng ký</span></Button>
                    </FormEmail>
                    <h4>Phương thức thanh toán</h4>
                    <div>
                        <img src={iconVisa} alt="" />
                        <img src={iconMasterCard} alt="" />
                        <img src={iconJCB} alt="" />
                        <img src={iconVNPay} alt="" />
                    </div>
                    <img src={iconTick} alt="" />
                </div>
            </BodyFooter>
        </Container>
    </div>
  )
}

export default FooterComponent