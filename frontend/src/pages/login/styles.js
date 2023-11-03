import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.primaryLight};
    background-size: 48px 48px;
    background-image:  repeating-linear-gradient(0deg, ${colors.primary}, ${colors.primary} 1.8px, ${colors.light} 1.8px, ${colors.light});
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 100vh;
    margin-right: 10px;
    background-color: ${colors.primaryDark};
    color: ${colors.light};
    justify-content: center;
    align-items: center;
    border-radius: 0px 20px 20px 0px;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.h2`
    font-family: 'Caveat', cursive;
    font-size: 50px;
    margin: 0px;
    margin-top: -35px;
    margin-bottom: 3px;
`;

export const Input = styled.input`
    width: 300px;
    padding: 15px;
    margin: 9.8px 0;
    border-radius: 5px;
    border: 1.8px solid ${colors.primary};
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin-top: 15px;
    background-color: ${colors.primary};
    color: ${colors.light};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
