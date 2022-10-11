import Image from 'next/image'
import React, { useState } from 'react'
import dummy from '../../styles/image/dummy.png'
import {AiOutlineHeart,AiOutlineEdit,AiTwotoneDelete, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { Modal } from 'antd'

const  Card = ({userData}:any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='row'>
      {userData && userData?.persons?.map((items:any)=>(
        

        <div key={items?.id} className='col-lg-3 col-md-4 col-sm-12 '>
        <div className='  d-flex justify-content-center align-items-center '>
            <Image src={dummy} height={300} width={300}/>
        </div>
        <div className='mt-3'>
            <ul>
                <li className='mx-2'><AiOutlineMail/>{items?.email}</li>
                <li className='mx-2'><AiOutlinePhone/>{items?.phone}</li>
                <li className='mx-2'><AiOutlinePhone/>{items?.website}</li>
            </ul>
        </div>
        <div className='d-flex justify-content-between px-5 py-2'>

            <div className='border__line'style={{paddingRight:'70px'}}><AiOutlineHeart color='red'/></div>
            <div className='border__line'style={{paddingRight:'70px'}} onClick={showModal}><AiOutlineEdit/></div>
            <div><AiTwotoneDelete/></div>
        </div>
    </div>
  
        ))}
         <Modal  title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        </div>
  )
}

export default Card