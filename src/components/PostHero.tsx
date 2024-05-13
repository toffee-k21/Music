"use client"
import React, { useEffect, useState } from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'

const PostHero = () => {

interface Product {
    productName:string;
    company:string;
    price:number;
}

    const [productList,setProductList] = useState<Product[]>([])

    const get = async ( )=>{
        const req = await fetch("http://localhost:5000/products");
        const data = await req.json();
        console.log(data);
        setProductList(data)
    }

    useEffect(()=>{
        get()
    },[])

  return (
    <div className='dark:bg-black text-white flex overflow-x-scroll'>
        {productList.map((r)=>{
          return<div className='m-2'>
           <HoverBorderGradient className='w-[200px] h-[200px]'>
            <div className='my-1 font-semibold text-lg'>Title : {r.productName}</div>
            <div className='mt-10'>Brand : {r.company}</div>
            <div className='my-1'>price : {r.price}</div>
            </HoverBorderGradient>
            </div>
        })}
    </div>
  )
}

export default PostHero