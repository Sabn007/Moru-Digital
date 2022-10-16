import Image from "next/image";
import React, { useEffect, useState } from "react";
import dummy from "../../styles/image/dummy.png";

import {
  NumberOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined ,
} from '@ant-design/icons';
import { Button, Form, Input, Radio, Modal, notification } from "antd";
import axios from "axios";

type LayoutType = Parameters<typeof Form>[0]["layout"];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Card = ({ userData,add }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>('false');
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const editUser = (id:Number) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res:any) => {
      const editPersons = res.data;
      setEditData({ editPersons });
    })
  }
 
  const openNotificationWithIcon = (type: NotificationType) => {
    notification[type]({
      message: 'User Added to Fav',
    });
  }

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
    <div className="row">
      {userData &&
        userData?.persons?.map((items: any) => (
          <div key={items?.id} className="col-lg-3 col-md-4 col-sm-12 ">
            <div className="  d-flex justify-content-center align-items-center ">
              <Image src={dummy} height={300} width={300} />
            </div>
            <div className="mt-3">
              <ul>
                <li>
                <MailOutlined  className="mx-2" />
                  {items?.email}
                </li>
                <li >
                <PhoneOutlined  className="mx-2" />
                  {items?.phone}
                </li>
                <li >
                  <NumberOutlined  className="mx-2" />
                  {items?.website}
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between px-5 py-2">
              <div className="border__line" style={{ paddingRight: "70px" }} onClick={()=>{add(items?.id);
              openNotificationWithIcon('success')}}>
              <HeartOutlined style={{color:'red'}} />
              </div>
              <div
                className="border__line"
                style={{ paddingRight: "70px" }}
                onClick={()=>
                  {editUser(items?.id);
                  showModal()}
                }
              >
              <EditOutlined />
              </div>
              <div>
              <DeleteOutlined />
              </div>
            </div>
          </div>
        ))}
      <Modal
        title="Edit User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          initialValues={{ name: formLayout }}
          onValuesChange={onFormLayoutChange}
        >
        
          <Form.Item label="Name">
            <Input placeholder="input placeholder" value={editData?.editPersons?.name} />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="input placeholder" value={editData?.editPersons?.email} />
          </Form.Item>
          <Form.Item label="Phone">
            <Input placeholder="input placeholder" value={editData?.editPersons?.phone} />
          </Form.Item>
          <Form.Item label="Website">
            <Input placeholder="input placeholder" value={editData?.editPersons?.website} />
          </Form.Item>
       
        </Form>
      </Modal>
    </div>
  );
};

export default Card;
