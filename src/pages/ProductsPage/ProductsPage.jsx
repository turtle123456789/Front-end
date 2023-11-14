import { Col, Row, Checkbox, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Tabs } from 'antd';
import { Container } from '../../components/ContainerComponent/ContainerComponent';
import './style.css';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce'
import * as ProductService from '../../services/ProductService'
import CardProductComponent from '../../components/CardProductComponent/CardProductComponent';
const ProductsPage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)

    const state = useLocation()
    const [products, setProducts] = useState([])
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 8,
        total: 1,
    })
    const fetchProductType = async (type, page, limit) => {

        const res = await ProductService.getProductType(type, page, limit)
        if(res?.status == 'OK') {

            setProducts(res?.data)
            setPanigate({...panigate, total: res?.totalPage})
        }else {

        }
    }
    useEffect(() => {
        if(state){
            fetchProductType(state, panigate.page, panigate.limit)
        }
    }, [state,panigate.page, panigate.limit])


    const onChange = (current, pageSize) => {
        setPanigate({
            ...panigate,
            page: current - 1, // Ant Design Pagination uses 1-based index, but your API seems to use 0-based index
            limit: pageSize
        });
    }
    const items = [
        {
            key: '1',
            label: 'Bán chạy',
          },
          {
            key: '2',
            label: 'Mới nhất',
          },
          {
            key: '3',
            label: 'Giá giảm dần',
          },
          {
            key: '4',
            label: 'Giá tăng dần',
          },
          {
            key: '5',
            label: 'Từ A-Z',
          },
          {
            key: '6',
            label: 'Từ Z-A',
          },
        ];
  return (
    <div>
      <Container>
        <Row style={{margin: '10px 30px'}}>
          <Col span={18} push={6}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
            <div style={{display: 'flex',flexWrap: 'wrap',gap: '5px'}}>
                {products?.filter((pro) => {
                    if(searchDebounce === '') {
                        return pro
                    }else if(pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                        return pro
                    }
                })?.map((product) => {
                    return (
                    <CardProductComponent
                        key={product._id}
                        countInStock={product.countInStock}
                        description={product.description}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        rating={product.rating}
                        type={product.type}
                        selled={product.selled}
                        discount={product.discount}
                        id={product._id}
                    />
                    )
                })}
            </div>
            <Pagination current={panigate.page + 1} total={panigate.total*10} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
          </Col>
          <Col span={6} pull={18} style={{textAlign: 'center'}}>
            <div className="category">
              <h3>Danh mục</h3>
              {/* <h4>{selectedProductTypeLabel}</h4> */}
            </div>
              <div className='Fillter'>
                
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductsPage