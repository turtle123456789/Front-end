import React from 'react'
import banner from '../../assets/images/banner(1).jpg'
import { MainIntroduce } from './style'
import { Container } from '../../components/ContainerComponent/ContainerComponent'
import '../../index.css'
import { Link } from 'react-router-dom'
const IntroducePage = () => {
  return (
    <div>
        <Container>
            <MainIntroduce>
                <h1 style={{textAlign: "center"}} >Về chúng tôi</h1>
                <div style={{display: "flex", justifyContent: "center", margin: "10px 0"}}>
                    <img  style={{maxWidth: "1200px"}} src={banner} alt=""/>
                </div>
                <p><Link to="/">BoShop</Link> được thành lập ban đầu dựa trên ý tưởng về một địa chỉ uy tín cung cấp các sản phẩm mỹ phẩm chất lượng cho đa số phụ nữ Việt Nam với giá cả hợp lý. Nếu ngày nay nhu cầu sử dụng mỹ phẩm ngày càng lớn và phổ biến thì vấn đề hàng thật, giá cả hợp lý và chất lượng dịch vụ đi kèm càng trở nên cấp thiết hơn bao giờ hết.</p>
                <p>Hiểu được điều đó, chúng tôi cam kết luôn mang lại những sản phẩm chính hãng với giá tốt nhất cho khách hàng. Những sản phẩm bán trên <Link to="/">BoShop</Link> đều được bảo đảm cung cấp bởi những thương hiệu, nhà cung cấp uy tín mà chúng tôi đã cẩn trọng đánh giá, dựa trên các tiêu chí của khu vực về an toàn sản phẩm, điều kiện sản xuất và lưu trữ bảo quản.</p>
                <p>Ngoài ra, nhằm mang lại trải nghiệm mua sắm tốt nhất trên trang <Link to="/">BoShop</Link>, chúng tôi còn tạo điều kiện để khách hàng có thể hoàn trả sản phẩm không vừa ý trong vòng 7 ngày làm việc. Bên cạnh đó là dịch vụ giao hàng tận nơi mà khách hàng chỉ định. Từ nay khách hàng sẽ không cần ra các trung tâm mua sắm để tìm hiểu các xu hướng làm đẹp mới nhất mà vẫn có thể tận hưởng điều đó ngay tại nhà với chi phí thấp hơn. Chúng tôi tin rằng mọi trải nghiệm mua sắm mỹ phẩm đều phải thật thú vị, tiện lợi. Và chúng tôi sẽ không ngừng phấn đấu và liên tục đổi mới để mang lại những giá trị cam kết đó cho quý khách.  </p>
            </MainIntroduce>
        </Container>
    </div>
  )
}

export default IntroducePage