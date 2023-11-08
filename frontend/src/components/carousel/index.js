import React from 'react';
import { MenuContainer, MenuItem, MenuIcon, MenuText } from './styles';

const subjects = [
  { icon: "A", title: "Física", color: "#FFD700" },
  { icon: "B", title: "Álgebra", color: "#A52A2A" },
  { icon: "C", title: "Probabilidade", color: "#B8860B" },
  { icon: "D", title: "Química", color: "#C0C0C0" },
  { icon: "E", title: "Cálculo", color: "#808080" },
  { icon: "F", title: "Geometria", color: "#008000"},
  { icon: "G", title: "Estatística", color: "#008080" },
  // Adicione mais ícones e títulos conforme necessário
];

const Carousel = () => {
  return (
    <MenuContainer>
      {subjects.map((subject, index) => (
        <MenuItem>
        <MenuIcon bgColor={subject.color}><span>{subject.icon}</span></MenuIcon>
        <MenuText>{subject.title}</MenuText>
      </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Carousel;