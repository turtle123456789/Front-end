import { Col, Row ,Checkbox, Pagination} from 'antd'
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Tabs } from 'antd';
import LayoutProductHome from '../../components/LayoutProductHome/LayoutProductHome';
import { productsData } from '../../Data/ProductData';
import { paginationRight } from '../../components/LayoutProductHome/style';
import { Container } from '../../components/ContainerComponent/ContainerComponent';
import './style.css'
const ITEMS_PER_PAGE = 20;
const onChange = (key) => {
  console.log(key);
};
const items1 = [
  {
    key: '1',
    label: 'Bán chạy',
    children: 'Content of Tab Pane 1',
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
  
  // Hàm xử lý khi checkbox thay đổi trạng thái
  const handleCheckboxChange = (optionKey) => {
    if (selectedOptions.includes(optionKey)) {
      // Nếu tùy chọn đã được chọn, loại bỏ nó khỏi danh sách
      setSelectedOptions(selectedOptions.filter((key) => key !== optionKey));
    } else {
      // Nếu tùy chọn chưa được chọn, thêm nó vào danh sách
      setSelectedOptions([...selectedOptions, optionKey]);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán số trang dựa trên số sản phẩm và kích thước mỗi trang
  const totalProducts = productsData.length;

  // Lấy danh sách sản phẩm cho trang hiện tại
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = productsData.slice(startIndex, endIndex);
    // Hàm xử lý khi chuyển trang
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  return (
    <div>
      <Container>
        <Row style={{margin: '10px 30px'}}>
          <Col span={18} push={6}>
            <Tabs defaultActiveKey="1" items={items1} onChange={onChange} />
            <LayoutProductHome ProductData={currentProducts} />
            <Pagination
              defaultCurrent={1}
              total={totalProducts}
              pageSize={ITEMS_PER_PAGE}
              current={currentPage}
              onChange={handlePageChange}
              style={paginationRight}
            />
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
                      index < 1000 && (
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