import Image from "next/image";
import React, { useEffect, useState } from "react";
import dummy from "../../styles/image/dummy.png";

import {
    HeartFilled,
    NumberOutlined,
  EditOutlined,
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Radio, Modal } from "antd";
import axios from "axios";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const FavCard = ({ userData, add }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>("false");
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(userData, "sa");
  return (
    <div className="row">
      {userData?.length >= "0" ? 
        userData?.map((item: any) =>
          item?.map((items: any) => (
            <div key={items?.id} className="col-lg-3 col-md-4 col-sm-12 ">
              <div className="  d-flex justify-content-center align-items-center ">
                <Image src={dummy} height={300} width={300} />
              </div>
              <div className="mt-3">
                <ul>
                  <li>
                    <MailOutlined className="mx-2" />
                    {items?.email}
                  </li>
                  <li>
                    <PhoneOutlined className="mx-2" />
                    {items?.phone}
                  </li>
                  <li>
                    <NumberOutlined className="mx-2" />
                    {items?.website}
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between px-5 py-2">
                <div
                  className="border__line"
                  style={{ paddingRight: "70px" }}
                  onClick={() => add(items?.id)}
                >
                  <HeartFilled style={{color:'red'}} />
                </div>
                <div className="border__line" style={{ paddingRight: "70px" }}>
                  <EditOutlined />
                </div>
                <div>
                  <DeleteOutlined />
                </div>
              </div>
            </div>
          ))
        ): (
            
            <span>No favourite User</span>)}
    </div>
  );
};

export default FavCard;
