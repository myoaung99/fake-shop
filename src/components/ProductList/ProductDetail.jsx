import { Card, Spin, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSingleProductAsync } from './ProductSlice'

const ProductDetail = () => {
  const {product, loading} = useSelector(state=>state.products)
  const {id: productId} = useParams()
  const dispatch = useDispatch();

  console.log(product);

  useEffect(() => {
    dispatch(getSingleProductAsync({id: productId}))
  }, [])
  
  return (
      <Card
      className='w-full min-h-[50vh]'>
        {loading 
          ? <div className='w-full min-h-[60vh] flex justify-center items-center'>
              <Spin/> 
            </div>
          : <div className="flex flex-row items-start gap-10">
              <img className='w-[25%]' alt="example" src={product?.image} />
              <div>
                <Typography.Title>{product?.title}</Typography.Title>
                <Typography.Paragraph className='w-[70%]'>{product?.description}</Typography.Paragraph>

                <Typography.Text>
                 Rating: {product?.rating?.rate}/{product?.rating?.count}
                </Typography.Text>

                <Typography.Title>
                 $ {product?.price}
                </Typography.Title>
              </div>
            </div>}
        
      </Card>
    
  )
}

export default ProductDetail