import React from 'react';
import PropTypes from 'prop-types';
import TextWithValue from '../text/textWithValue';
import TextButton from '../button/textButton';
import { Buttons, Container, CardTitle } from './styles';
import { colors } from '../../settings/colors/colors';

const Card = ({ data, openModalDetail, openModalService }) => {
  const { idAtendimento, nome, solicitacao, quarto, estadoDeSaude } = data;

  const calculatePoints = () => {
    switch (estadoDeSaude) {
      case 'Bom':
        return 1;
      case 'Regular':
        return 2;
      case 'Ruim':
        return 3;
      default:
        return 0;
    }
  };

  const determineColor = (pts) => {
    switch (pts) {
      case 1:
        return { color: colors.Pontos1, colorDark: colors.Pontos1Dark };
      case 2:
        return { color: colors.Pontos2, colorDark: colors.Pontos2Dark };
      case 3:
        return { color: colors.Pontos3, colorDark: colors.Pontos3Dark };
      default:
        return { color: colors.Default, colorDark: colors.DefaultDark };
    }
  };
  
  const pontos = calculatePoints();
  const cardColors = determineColor(pontos);
  return (
    <div>
      <Container>
        <CardTitle color={cardColors.color} colorDark={cardColors.colorDark}>{`Atendimento #${idAtendimento}`}</CardTitle>
        <TextWithValue label="Nome" value={nome} />
        <TextWithValue label="Quarto" value={quarto} />
        <TextWithValue label="Solicitação" value={solicitacao} />
        <Buttons>
          <TextButton label="Detalhes" onClick={() => openModalDetail(data)} />
          <TextButton label="Finalizar Atendimento" onClick={() => openModalService(data)} />
        </Buttons>
      </Container>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    idAtendimento: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    solicitacao: PropTypes.string.isRequired,
    quarto: PropTypes.string.isRequired,
    pontos: PropTypes.number.isRequired,
  }).isRequired,
  openModalDetail: PropTypes.func.isRequired,
  openModalService: PropTypes.func.isRequired,
};

export default Card;