import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useForm, useStep } from "react-hooks-helper";
import { WallOne } from "./stepForm/WallOne";
import { WallTwo } from "./stepForm/WallTwo";
import { WallTree } from "./stepForm/WallTree";
import { WallFor } from "./stepForm/WallFor";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";
import { Modal } from "antd";
import "antd/dist/antd.css";
import context from "../context/context";
import '../style/dashboard.css';

const defaultData = {
  alturaA: "",
  larguraA: "",
  janelaA: "",
  portaA: "",
  alturaB: "",
  larguraB: "",
  janelaB: "",
  portaB: "",
  alturaC: "",
  larguraC: "",
  janelaC: "",
  portaC: "",
  alturaD: "",
  larguraD: "",
  janelaD: "",
  portaD: "",
};

const steps = [
  { id: "parede-um" },
  { id: "parede-dois" },
  { id: "parede-tres" },
  { id: "parede-quatro" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const { modal } = useContext(context);
  const [user, setUser ] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const emailToken = localStorage.getItem('email');
   
    axios.get(`https://project-republic.herokuapp.com/user?q=${emailToken}`).then((result) => setUser(result.data));
    setIsModalVisible(true);
  },[modal])

  if(isModalVisible) {
    return (
      <div >
        <Modal className="modal" data-testid="modal" title="PROMETEU TINTAS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>
            {`Olá ${user.name} bem-vindo ao calculador de tintas de Phometheu, preveja quanto irá gastar e economize seu bolso. Preencha o formulário e terá seu resultado em segundos!`}
          </p>
          {''}
          <p>{'clique em OK para continuar'}</p>
        </Modal>
      </div>
    )
  };
  
  const props = { formData, setForm, navigation, step };

  switch (step.id) {
    case "parede-um":
      return <WallOne {...props} />;
    case "parede-dois":
      return <WallTwo {...props} />;
    case "parede-tres":
      return <WallTree {...props} />;
    case "parede-quatro":
      return <WallFor {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Ops...Algo deu errado</h1>
    </div>
  );
};