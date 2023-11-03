import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalContent, Header, Text, Close, Button } from './style';
import TextInput from '../../text/textInput';
import TextArea from '../../text/textArea';
import Axios from "axios";

const ModalService = ({ data: { idAtendimento }, closeModal }) => {
  const [service, setService] = useState({});
  const { responsible, observations } = service;
  const modalContentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const onChange = (field, e) => {
    setService(prevService => ({
      ...prevService,
      [field]: e.target.value,
    }));
  };

  const finishService = async () => {
    try {
      const response = await Axios.post("http://localhost:3001/finish-service", {
        id: idAtendimento,
        responsible: service.responsible,
        observations: service.observations,
      });

      if (response.data) {
        // Sucesso
      } else {
        // Falhou
      }
    } catch (error) {
      console.error("Error finishing service:", error);
    }
  };

  return (
    <ModalContainer onClick={handleClickOutside}>
      <ModalContent ref={modalContentRef}>
        <Header>
          <Text>Finalizar atendimento</Text>
          <Close onClick={closeModal} />
        </Header>
        <TextInput
          label="Responsável"
          value={responsible}
          onChange={e => onChange("responsible", e)}
        />
        <TextArea
          label="Observações"
          value={observations}
          onChange={e => onChange("observations", e)}
        />
        <Button onClick={finishService}>Finalizar</Button>
      </ModalContent>
    </ModalContainer>
  );
};

ModalService.propTypes = {
  data: PropTypes.shape({
    idAtendimento: PropTypes.number.isRequired
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalService;