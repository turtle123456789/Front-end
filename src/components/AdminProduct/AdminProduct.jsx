import { Button, Form, Select, Space } from 'antd'
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style'
import TableComponent from '../TableComponent/TableComponent'
import { useState } from 'react'
import InputComponent from '../InputComponent/InputComponent'
import { getBase64, renderOptions } from '../../utils'
import * as ProductService from '../../services/ProductService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import { useEffect } from 'react'
import * as message from '../../components/Message/Message'
import { useQuery } from '@tanstack/react-query'
import DrawerComponent from '../DrawerComponent/DrawerComponent'
import { useSelector } from 'react-redux'
import ModalComponent from '../ModalComponent/ModalComponent'

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState('')
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const user = useSelector((state) => state?.user)
  const searchInput = useRef(null);
  const inittial = () => ({
    name: '',
    price: '',
    description: '',
    rating: '',
    image: '',
    type: '',
    countInStock: '',
    newType: '',
    discount: '',
    gift: '',
    brand: '',
    newBrand: '',
    partBody: '',
    NewPartBody: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
  })
  const [stateProduct, setStateProduct] = useState(inittial())
  console.log('stateProduct', stateProduct)
  const [stateProductDetails, setStateProductDetails] = useState(inittial())

  const [form] = Form.useForm();

  const mutation = useMutationHooks(
    (data) => {
      const { name,
        price,
        description,
        rating,
        image,
        type,
        countInStock,
        discount,
        gift,
        brand,
        partBody,
        image1,
        image2,
        image3,
        image4, } = data
      const res = ProductService.createProduct({
        name,
        price,
        description,
        rating,
        image,
        type,
        countInStock,
        discount,
        gift,
        brand,
        partBody,
        image1,
        image2,
        image3,
        image4,
      })
      return res
    }
  )
  const mutationUpdate = useMutationHooks(
    (data) => {
      const { id,
        token,
        ...rests } = data
      const res = ProductService.updateProduct(
        id,
        token,
        { ...rests })
      return res
    },
  )

  const mutationDeleted = useMutationHooks(
    (data) => {
      const { id,
        token,
      } = data
      const res = ProductService.deleteProduct(
        id,
        token)
      return res
    },
  )

  const mutationDeletedMany = useMutationHooks(
    (data) => {
      const { token, ...ids
      } = data
      const res = ProductService.deleteManyProduct(
        ids,
        token)
      return res
    },
  )

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }

  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await ProductService.getDetailsProduct(rowSelected)
    if (res?.data) {
      setStateProductDetails({
        name: res?.data?.name,
        price: res?.data?.price,
        description: res?.data?.description,
        rating: res?.data?.rating,
        image: res?.data?.image,
        type: res?.data?.type,
        countInStock: res?.data?.countInStock,
        discount: res?.data?.discount,
        gift: res?.data?.gift,
        brand: res?.data?.brand,
        partBody: res?.data?.partBody,
        image1: res?.data?.image1,
        image2: res?.data?.image2,
        image3: res?.data?.image3,
        image4: res?.data?.image4,
      })
    }
  }

  useEffect(() => {
    if(!isModalOpen) {
      form.setFieldsValue(stateProductDetails)
    }else {
      form.setFieldsValue(inittial())
    }
  }, [form, stateProductDetails, isModalOpen])

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      fetchGetDetailsProduct(rowSelected)
    }
  }, [rowSelected, isOpenDrawer])

  const handleDetailsProduct = () => {
    setIsOpenDrawer(true)
  }

  const handleDelteManyProducts = (ids) => {
    mutationDeletedMany.mutate({ ids: ids, token: user?.access_token }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    return res
  }
  const fetchAllBrandProduct = async () => {
    const res = await ProductService.getAllBrandProduct()
    return res
  }
  const fetchAllPartBodyProduct = async () => {
    const res = await ProductService.getAllPartBodyProduct()
    return res
  }
  const { data,isSuccess, isError } = mutation
  const { data: dataUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
  const { data: dataDeleted, isSuccess: isSuccessDelected, isError: isErrorDeleted } = mutationDeleted
  const { data: dataDeletedMany, isSuccess: isSuccessDelectedMany, isError: isErrorDeletedMany } = mutationDeletedMany


  const queryProduct = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
  const typeProduct = useQuery({ queryKey: ['type-product'], queryFn: fetchAllTypeProduct })
  const brandProduct = useQuery({ queryKey: ['brand-product'], queryFn: fetchAllBrandProduct })
  const partBodyProduct = useQuery({ queryKey: ['partBody-product'], queryFn: fetchAllPartBodyProduct })
  const { data: products } = queryProduct
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct} />
      </div>
    )
  }


  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    // setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },

  });


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('name')
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      filters: [
        {
          text: '>= 5000',
          value: '>=',
        },
        {
          text: '<= 5000',
          value: '<=',
        }
      ],
      onFilter: (value, record) => {
        if (value === '>=') {
          return record.price >= 5000
        }
        return record.price <= 5000
      },
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      sorter: (a, b) => a.brand.length - b.brand.length,
      ...getColumnSearchProps('brand')
    },
    {
      title: 'Type',
      dataIndex: 'type',
      orter: (a, b) => a.type.length - b.type.length,
      ...getColumnSearchProps('type')
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    },
  ];
  const dataTable = products?.data?.length && products?.data?.map((product) => {
    return { ...product, key: product._id }
  })

  useEffect(() => {
    if (isSuccess && data?.status === 'OK') {
      message.success()
      handleCancel()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess])

  useEffect(() => {
    if (isSuccessDelectedMany && dataDeletedMany?.status === 'OK') {
      message.success()
    } else if (isErrorDeletedMany) {
      message.error()
    }
  }, [isSuccessDelectedMany])

  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === 'OK') {
      message.success()
      handleCancelDelete()
    } else if (isErrorDeleted) {
      message.error()
    }
  }, [isSuccessDelected])

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateProductDetails({
      name: '',
      price: '',
      description: '',
      rating: '',
      image: '',
      type: '',
      countInStock: '',
      newType: '',
      discount: '',
      gift: '',
      brand: '',
      newBrand: '',
      partBody: '',
      NewPartBody: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
    })
    form.resetFields()
  };

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === 'OK') {
      message.success()
      handleCloseDrawer()
    } else if (isErrorUpdated) {
      message.error()
    }
  }, [isSuccessUpdated])

  const handleCancelDelete = () => {
    setIsModalOpenDelete(false)
  }


  const handleDeleteProduct = () => {
    mutationDeleted.mutate({ id: rowSelected, token: user?.access_token }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: '',
      price: '',
      description: '',
      rating: '',
      image: '',
      type: '',
      countInStock: '',
      discount: '',
      gift: '',
      brand: '',
      partBody: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
    })
    form.resetFields()
  };

  const onFinish = () => {
    const params = {
      name: stateProduct.name,
      price: stateProduct.price,
      description: stateProduct.description,
      rating: stateProduct.rating,
      image: stateProduct.image,
      type: stateProduct.type === 'add_type' ? stateProduct.newType : stateProduct.type,
      countInStock: stateProduct.countInStock,
      discount: stateProduct.discount,
      gift: stateProduct.gift,
      brand:stateProduct.brand === 'add_brand' ? stateProduct.newBrand : stateProduct.brand,
      partBody: stateProduct.partBody === 'add_partBody' ? stateProduct.newPartBody : stateProduct.partBody,
      image1: stateProduct.image1,
      image2: stateProduct.image2,
      image3: stateProduct.image3,
      image4: stateProduct.image4,
    }
    mutation.mutate(params, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const handleOnchange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value
    })
  }

  const handleOnchangeDetails = (e) => {
    setStateProductDetails({
      ...stateProductDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview
    })
  }
  const handleOnchangeAvatar1 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image1: file.preview
    })
  }  
  const handleOnchangeAvatar2 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image2: file.preview
    })
  }  
  const handleOnchangeAvatar3 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image3: file.preview
    })
  }  
  const handleOnchangeAvatar4 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image4: file.preview
    })
  }
  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image: file.preview
    })
  }
  const handleOnchangeAvatarDetails1 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image1: file.preview
    })
  }
  const handleOnchangeAvatarDetails2 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image2: file.preview
    })
  }
  const handleOnchangeAvatarDetails3 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image3: file.preview
    })
  }
  const handleOnchangeAvatarDetails4 = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image4: file.preview
    })
  }
  
  const onUpdateProduct = () => {
    mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateProductDetails }, {
      onSettled: () => {
        queryProduct.refetch()
      }
    })
  }

  const handleChangeSelectType = (value) => {
      setStateProduct({
        ...stateProduct,
        type: value,
      })
  }
  const handleChangeSelectBrand = (value) => {
    setStateProduct({
      ...stateProduct,
      brand: value
    })
}
const handleChangeSelectPartBody = (value) => {
  setStateProduct({
    ...stateProduct,
    partBody: value
  })
}
  return (
    <div>
      <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
      <div style={{ marginTop: '10px' }}>
        <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={() => setIsModalOpen(true)}><PlusOutlined style={{ fontSize: '60px' }} /></Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <TableComponent handleDelteMany={handleDelteManyProducts} columns={columns} data={dataTable} onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setRowSelected(record._id)
            }
          };
        }} />
      </div>
      <ModalComponent forceRender title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <InputComponent value={stateProduct['name']} onChange={handleOnchange} name="name" />
            </Form.Item>

            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: 'Please input your type!' }]}
            >
              <Select
                name="type"
              
                value={stateProduct.type}
                onChange={handleChangeSelectType}
                options={renderOptions(typeProduct?.data?.data,1)}
                />
            </Form.Item>
            {stateProduct.type === 'add_type' && (
              <Form.Item
                label='New type'
                name="newType"
                rules={[{ required: true, message: 'Please input your type!' }]}
              >
                <InputComponent value={stateProduct.newType} onChange={handleOnchange} name="newType" />
              </Form.Item>
            )}
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: 'Please input your brand!' }]}
            >
              <Select
                name="brand"
              
                value={stateProduct.brand}
                onChange={handleChangeSelectBrand}
                options={renderOptions(brandProduct?.data?.data,2)}
                />
            </Form.Item>
            {stateProduct.brand === 'add_brand' && (
              <Form.Item
                label='New brand'
                name="newBrand"
                rules={[{ required: true, message: 'Please input your brand!' }]}
              >
                <InputComponent value={stateProduct.newBrand} onChange={handleOnchange} name="newBrand" />
              </Form.Item>
            )}
            <Form.Item
              label="PartBody"
              name="partBody"
              rules={[{ required: true, message: 'Please input your partBody!' }]}
            >
              <Select
                name="partBody"
              
                value={stateProduct.partBody}
                onChange={handleChangeSelectPartBody}
                options={renderOptions(partBodyProduct?.data?.data,3)}
                />
            </Form.Item>
            {stateProduct.partBody === 'add_partBody' && (
              <Form.Item
                label='New partBody'
                name="newPartBody"
                rules={[{ required: true, message: 'Please input your partBody!' }]}
              >
                <InputComponent value={stateProduct.newPartBody} onChange={handleOnchange} name="newPartBody" />
              </Form.Item>
            )}
            <Form.Item
              label="Count inStock"
              name="countInStock"
              rules={[{ required: true, message: 'Please input your count inStock!' }]}
            >
              <InputComponent value={stateProduct.countInStock} onChange={handleOnchange} name="countInStock" />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input your count price!' }]}
            >
              <InputComponent value={stateProduct.price} onChange={handleOnchange} name="price" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input your count description!' }]}
            >
              <InputComponent value={stateProduct.description} onChange={handleOnchange} name="description" />
            </Form.Item>
            <Form.Item
              label="Rating"
              name="rating"
              rules={[{ required: true, message: 'Please input your count rating!' }]}
            >
              <InputComponent value={stateProduct.rating} onChange={handleOnchange} name="rating" />
            </Form.Item>
            <Form.Item
              label="Discount"
              name="discount"
              rules={[{ required: true, message: 'Please input your discount of product!' }]}
            >
              <InputComponent value={stateProduct.discount} onChange={handleOnchange} name="discount" />
              
            </Form.Item>
            <Form.Item
              label="Gift"
              name="gift"
            >
              <InputComponent value={stateProduct.gift} onChange={handleOnchange} name="gift" />
              
            </Form.Item>
            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: 'Please input your count image!' }]}
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                <Button >Select File</Button>
                {stateProduct?.image && (
                  <img src={stateProduct?.image} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image1"
              name="image1"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar1} maxCount={1}>
                <Button >Select File</Button>
                {stateProduct?.image1 && (
                  <img src={stateProduct?.image1} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image2"
              name="image2"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar2} maxCount={1}>
                <Button >Select File</Button>
                {stateProduct?.image2 && (
                  <img src={stateProduct?.image2} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image3"
              name="image3"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar3} maxCount={1}>
                <Button >Select File</Button>
                {stateProduct?.image3 && (
                  <img src={stateProduct?.image3} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image4"
              name="image4"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar4} maxCount={1}>
                <Button >Select File</Button>
                {stateProduct?.image4 && (
                  <img src={stateProduct?.image4} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      </ModalComponent>
      <DrawerComponent title='Chi tiết sản phẩm' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateProduct}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
            >
              <InputComponent value={stateProductDetails['name']} onChange={handleOnchangeDetails} name="name" />
            </Form.Item>

            <Form.Item
              label="Type"
              name="type"
            >
              <InputComponent value={stateProductDetails['type']} onChange={handleOnchangeDetails} name="type" />
            </Form.Item>
            <Form.Item
              label="Brand"
              name="brand"
            >
              <InputComponent value={stateProductDetails['brand']} onChange={handleOnchangeDetails} name="brand" />
            </Form.Item>
            <Form.Item
              label="PartBody"
              name="partBody"
            >
              <InputComponent value={stateProductDetails['partBody']} onChange={handleOnchangeDetails} name="partBody" />
            </Form.Item>
            <Form.Item
              label="Count inStock"
              name="countInStock"
            >
              <InputComponent value={stateProductDetails.countInStock} onChange={handleOnchangeDetails} name="countInStock" />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
            >
              <InputComponent value={stateProductDetails.price} onChange={handleOnchangeDetails} name="price" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
            >
              <InputComponent value={stateProductDetails.description} onChange={handleOnchangeDetails} name="description" />
            </Form.Item>
            <Form.Item
              label="Rating"
              name="rating"
            >
              <InputComponent value={stateProductDetails.rating} onChange={handleOnchangeDetails} name="rating" />
            </Form.Item>
            <Form.Item
              label="Discount"
              name="discount"
            >
              <InputComponent value={stateProductDetails.discount} onChange={handleOnchangeDetails} name="discount" />
            </Form.Item>
            <Form.Item
              label="Gift"
              name="gift"
            >
              <InputComponent value={stateProductDetails.gift} onChange={handleOnchangeDetails} name="gift" />
            </Form.Item>
            <Form.Item
              label="Image"
              name="image"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatarDetails} maxCount={1}>
                <Button >Select File</Button>
                {stateProductDetails?.image && (
                  <img src={stateProductDetails?.image} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image1"
              name="image1"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatarDetails1} maxCount={1}>
                <Button >Select File</Button>
                {stateProductDetails?.image1 && (
                  <img src={stateProductDetails?.image1} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image2"
              name="image2"
            >
              <WrapperUploadFile onChange={2} maxCount={1}>
                <Button >Select File</Button>
                {stateProductDetails?.image2 && (
                  <img src={stateProductDetails?.image2} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image3"
              name="image3"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatarDetails3} maxCount={1}>
                <Button >Select File</Button>
                {stateProductDetails?.image3 && (
                  <img src={stateProductDetails?.image3} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item
              label="Image4"
              name="image4"
            >
              <WrapperUploadFile onChange={handleOnchangeAvatarDetails4} maxCount={1}>
                <Button >Select File</Button>
                {stateProductDetails?.image4 && (
                  <img src={stateProductDetails?.image4} style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px'
                  }} alt="avatar" />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
      </DrawerComponent>
      <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
          <div>Bạn có chắc xóa sản phẩm này không?</div>
      </ModalComponent>
    </div>
  )
}

export default AdminProduct