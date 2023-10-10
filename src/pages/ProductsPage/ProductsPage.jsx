import { Col, Row, Checkbox, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Tabs } from 'antd';
import LayoutProductHome from '../../components/LayoutProductHome/LayoutProductHome';
import { productsData } from '../../Data/ProductData';
import { paginationRight } from '../../components/LayoutProductHome/style';
import { Container } from '../../components/ContainerComponent/ContainerComponent';
import './style.css';
const ITEMS_PER_PAGE = 20;
const onChange = (key) => {
  console.log(key);
};
const items1 = [
  {
    key: '1',
    label: 'Bán chạy',
    childrenRenderer: ({ currentProducts, totalProducts, currentPage, handlePageChange }) => (
      <>
        <LayoutProductHome ProductData={productsData} />
        <Pagination
          defaultCurrent={1}
          total={totalProducts}
          pageSize={ITEMS_PER_PAGE}
          current={currentPage}
          onChange={handlePageChange}
          style={paginationRight}
        />
      </>
    ),
  },
  {
    key: '2',
    label: 'Mới nhất',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Giảm dần',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Tăng dần',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '5',
    label: 'Từ A-Z',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '6',
    label: 'Từ Z-A',
    children: 'Content of Tab Pane 3',
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

// submenu keys of first level
const ProductsPage = () => {
  const [mode] = useState('inline');
  const [theme] = useState('light');

  // State để lưu trữ các tùy chọn đã chọn
  const [selectedOptions, setSelectedOptions] = useState([]);

  // State cho các biến và hàm xử lý
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  // Hàm xử lý khi checkbox thay đổi trạng thái
  const handleCheckboxChange = (optionKey) => {
    if (selectedOptions.includes(optionKey)) {
      setSelectedOptions(selectedOptions.filter((key) => key !== optionKey));
    } else {
      setSelectedOptions([...selectedOptions, optionKey]);
    }
  };

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Trong useEffect này, bạn có thể lấy dữ liệu sản phẩm và cập nhật các state currentProducts và totalProducts
    // Ví dụ lấy dữ liệu sản phẩm từ productsData
    const currentProducts = productsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const totalProducts = productsData.length;

    // Cập nhật state currentProducts và totalProducts
    setCurrentProducts(currentProducts);
    setTotalProducts(totalProducts);
  }, [currentPage]);
  const renderTabContent = (key) => {
    switch (key) {
      case '1':
        return (
          <>
            <LayoutProductHome ProductData={currentProducts} />
            <Pagination
              defaultCurrent={1}
              total={totalProducts}
              pageSize={ITEMS_PER_PAGE}
              current={currentPage}
              onChange={handlePageChange}
              style={paginationRight}
            />
          </>
        );
      case '2':
        return <div>Content of Tab Pane 2</div>;
      case '3':
        return <div>Content of Tab Pane 3</div>;
      // Add cases for other tabs as needed
      default:
        return null;
    }
  };
  return (
    <div>
      <Container>
        <Row style={{margin: '10px 30px'}}>
          <Col span={18} push={6}>
            <Tabs defaultActiveKey="1" onChange={onChange}>
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