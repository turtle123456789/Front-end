import { Col, Row, Checkbox, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Tabs } from 'antd';
import LayoutProductHome from '../../components/LayoutProductHome/LayoutProductHome';
import { productsData } from '../../Data/ProductData';
import { Container } from '../../components/ContainerComponent/ContainerComponent';
import './style.css';
const ITEMS_PER_PAGE = 20
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
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
     label,
  };
}

const items = [
  getItem('Giá', 'sub1', null, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Option 5', '5'), // Các options tiếp theo
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
  ]),
  getItem('Thương hiệu', 'sub2',null, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),
  getItem('Kết cấu', 'sub4', null, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const ProductsPage = () => {
  const [mode] = useState('inline');
  const [theme] = useState('light');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState('1');

  const sortProducts = (products, sortKey) => {
    switch (sortKey) {
      case '1':
        return products.sort((a, b) => b.sellQuantity - a.sellQuantity);
      case '2':
        return products.sort((a, b) => b.id - a.id);
      case '3':
        return products.sort((a, b) => b.originalPrice - a.originalPrice);
      case '4':
        return products.sort((a, b) => a.originalPrice - b.originalPrice);
      case '5':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case '6':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  useEffect(() => {
    const sortedProducts = sortProducts(productsData, currentTab);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const slicedProducts = sortedProducts.slice(startIndex, endIndex);
    const totalProducts = sortedProducts.length;

    switch (currentTab) {
      case '1':
        setSellingProducts(slicedProducts);
        break;
      case '2':
        setIdProducts(slicedProducts);
        break;
      case '3':
        setOriginalPriceDecreaseProducts(slicedProducts);
        break;
      case '4':
        setOriginalPriceIncreaseProducts(slicedProducts);
        break;
      case '5':
        setNameAzProducts(slicedProducts);
        break;
      case '6':
        setNameZaProducts(slicedProducts);
        break;
      default:
        break;
    }

    setTotalProducts(totalProducts);
  }, [currentPage, currentTab]);

  const handleCheckboxChange = (optionKey) => {
    if (selectedOptions.includes(optionKey)) {
      setSelectedOptions(selectedOptions.filter((key) => key !== optionKey));
    } else {
      setSelectedOptions([...selectedOptions, optionKey]);
    }
  };

  const handlePageChange = (page, tabKey) => {
    setCurrentPage(page);
    setCurrentTab(tabKey);
  };

  const renderTabContent = (key) => {
    const productsToDisplay = getProductsByTabKey(key);
    return (
      <>
        <LayoutProductHome ProductData={productsToDisplay} />
        <Pagination
          defaultCurrent={1}
          total={totalProducts}
          pageSize={ITEMS_PER_PAGE}
          current={currentPage}
          onChange={(page) => handlePageChange(page, key)}
          style={{textAlign: 'center', margin: '10px 0'}}
        />
      </>
    );
  };
  const getProductsByTabKey = (key) => {
    switch (key) {
      case '1':
        return sellingProduct;
      case '2':
        return idProduct;
      case '3':
        return originalPriceDecreaseProduct;
      case '4':
        return originalPriceIncreaseProduct;
      case '5':
        return nameAzProduct;
      case '6':
        return nameZaProduct;
      default:
        return [];
    }
  };

  const [sellingProduct, setSellingProducts] = useState([]);
  const [idProduct, setIdProducts] = useState([]);
  const [originalPriceDecreaseProduct, setOriginalPriceDecreaseProducts] = useState([]);
  const [originalPriceIncreaseProduct, setOriginalPriceIncreaseProducts] = useState([]);
  const [nameAzProduct, setNameAzProducts] = useState([]);
  const [nameZaProduct, setNameZaProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  return (
    <div>
      <Container>
        <Row style={{margin: '10px 30px'}}>
          <Col span={18} push={6}>
            <Tabs defaultActiveKey="1" onChange={setCurrentTab}>
              {items1.map((item) => (
                <Tabs.TabPane key={item.key} tab={item.label}>
                  {renderTabContent(item.key)}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </Col>
          <Col span={6} pull={18} style={{textAlign: 'center'}}>
              <h3>Danh mục</h3>
              <h4>CHĂM SÓC TÓC & DA ĐẦU</h4>
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
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductsPage