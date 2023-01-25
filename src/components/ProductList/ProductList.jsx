import React, {Fragment, useEffect} from 'react'
import {Space, Table, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAsync} from "./ProductSlice";
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const {products : productsData, loading, error} = useSelector(state=>state.products)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductsAsync({limit: 5}))
    }, [dispatch])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Rating',
            key: 'rating',
            dataIndex: 'rating',
            render: (text)=><span>{text.rate}</span>
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return <Space size="middle" className='min-w-[100px]'>
                    <a onClick={()=>navigate(`/${record.id}/productDetails`)}>View detail</a>
                </Space>
            },
        },
    ];

    return (
        <Fragment>
            {error
                ?
                <div className='flex justify-center items-center h-screen w-full'>
                    <p className='text-red-500'>Something went wrong</p>
                </div>
                :
                <Table
                scrollToFirstRowOnChange={true}
                loading={loading}
                dataSource={productsData}
                columns={columns}
            />}
        </Fragment>
    )
}

export default Dashboard;