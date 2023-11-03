import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TextWithValue from '../../text/textWithValue';
import { Header, Text, Close, ModalContainer, ModalContent, CategoryContent } from './style';

const ModalDetail = ({ data, closeModal }) => {
  const modalContentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <ModalContainer onClick={handleClickOutside}>
      <ModalContent ref={modalContentRef}>
        <Header>
          <Text>Detalhes do Atendimento</Text>
          <Close onClick={closeModal} />
        </Header>
        <CategoryContent>
          <TextWithValue label="Nome" value={data.nome} />
          <TextWithValue label="Idade" value={data.idade} />
          <TextWithValue label="Sexo" value={data.sexo} />
        </CategoryContent>
        <CategoryContent>
          <TextWithValue label="Quarto" value={data.quarto} />
          <TextWithValue label="Acompanhante" value={data.acompanhante} />
          <TextWithValue label="Plano Médico" value={data.tipoDePlano} />
        </CategoryContent>
        <TextWithValue label="Estado de Saúde" value={data.estadoDeSaude} />
        <TextWithValue label="Solicitação" value={data.solicitacao} />
      </ModalContent>
    </ModalContainer>
  );
};

ModalDetail.propTypes = {
  data: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalDetail;