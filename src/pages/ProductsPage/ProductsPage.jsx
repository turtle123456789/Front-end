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

    const [products, setProducts] = useState([])
    const [choiceSort, setChoiceSort] = useState("countInStock")
    const [choice, setChoice] = useState("asc")
    const [activeTabKey, setActiveTabKey] = useState("1");
    const [panigate, setPanigate] = useState({
        page: 0,
        limit: 12,
        total: 1,
    })
    const fetchProductType = async (sort, page, limit) => {

        const res = await ProductService.getProductType(sort, page, limit,choice)
        if(res?.status == 'OK') {

            setProducts(res?.data)
            setPanigate({...panigate, total: res?.totalPage})
        }else {

        }
    }
    console.log('first', panigate)
    useEffect(() => {
        if(choiceSort.length>0){
            fetchProductType(choiceSort, panigate.page, panigate.limit,choice)
        }
    }, [choiceSort,panigate.page, panigate.limit,choice])


    const onChange = (current, pageSize) => {
        setPanigate({
            ...panigate,
            page: current - 1, // Ant Design Pagination uses 1-based index, but your API seems to use 0-based index
            limit: pageSize
        });
    }
    const items1 = [
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
    useEffect(() => {
      // Update choiceSort based on the active tab key
      switch (activeTabKey) {
        case '1':
          setChoiceSort('countInStock')
          setChoice('asc')
          break;
        case '2':
          setChoiceSort('countInStock')
          setChoice('desc')
          break;
        case '3':
          setChoiceSort('price');
          setChoice('desc');
          break;
        case '4':
          setChoiceSort('price');
          setChoice('asc');
          break;
        case '5':
          setChoiceSort('name');
          setChoice('desc');
          break;
        case '6':
          setChoiceSort('name');
          setChoice('asc');
          break;
        default:
          setChoiceSort('countInStock');
          setChoice('asc');
      }
    }, [activeTabKey]);
    const onTabChange = (key) => {
      setActiveTabKey(key);
    };
  return (
    <div>
      <Container>
        <Row style={{margin: '10px 30px'}}>
          <Col span={18} push={6}>
            <Tabs defaultActiveKey="1" items={items1} onChange={onTabChange} />
            <div>
              <div style={{display: 'flex' ,flexWrap: 'wrap', gap: '5px'}}>
              {products?.map((product) => {
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
            </div>
          </Col>
          <Col span={6} pull={18} style={{textAlign: 'center'}}>
            {/* <div className="category">
              <h3>Danh mục</h3>
              <h4>{selectedProductTypeLabel}</h4>
            </div>
              <div className='FillterPrice'>
                <Menu
                  style={{
                    width: 256,
                    textAlign: 'center',
                  }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode={mode}
                  theme={theme}
                >
                  {items.map((menuItem) => (
                    <Menu.SubMenu
                    key={menuItem.key}
                    title={menuItem.label}
                    className={menuItem.key === 'sub1' ? 'priceSubMenu' : ''}
                    overflowedIndicator={<span>&gt;</span>}
                  >
                      {menuItem.children.map((option, index) => (
                        // Hiển thị chỉ một số options (ví dụ: 10) và ẩn đi options còn lại trong thanh cuộn
                        index < 10 && (
                          <Menu.Item key={option.key}>
                            <Checkbox
                              onChange={() => handleCheckboxChange(option.key)}
                              checked={selectedOptions.includes(option.key)}
                            >
                              {option.label}
                            </Checkbox>
                          </Menu.Item>
                        )
                      ))}
                    </Menu.SubMenu>
                  ))}
                </Menu>
              </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductsPage