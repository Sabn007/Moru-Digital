import type { NextPage } from "next";
import Card from "./component/Card";
import axios from "axios";
import { Button, Form, Input, Radio, Modal } from "antd";

import { useEffect, useState } from "react";
import FavCard from "./component/FavCard";

const Home: NextPage = () => {
  const [userData, setUserData] = useState<any>("");
  const [favBook, setFavBook] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res: any) => {
      const persons = res.data;
      setUserData({ persons });
    });
  }, []);
  const handleAdd = (id: number) => {
    const data = userData?.persons.filter((items: any) => items.id === id);
    setFavBook([...favBook, data]);
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

  return (
    <div className="p-5">

      <div className="d-flex justify-content-between px-4">
      <h1>List of All User</h1>
        <button className="btn btn-success" onClick={showModal}>Show Fav User</button>
      </div>
      <Card userData={userData} add={handleAdd} />
      <Modal
        title="Favourite User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
       footer={null}

        width={1000}
      >

        <FavCard userData={favBook}/>
      </Modal>
    </div>
  );
};

export default Home;
