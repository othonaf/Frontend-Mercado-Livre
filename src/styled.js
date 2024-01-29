import styled from 'styled-components';


export const Header = styled.div`
  background-color: #fff;
  font-family: "Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif;
  color: #1282b3;
`;

export const NavbarBrand = styled.div`
  color: #1282b3 !important;
`;

export const Titulo3 = styled.h3`
  font-size: 18px !important;
`;

export const Titulo4 = styled.h4`
  font-size: 18px !important;
`;

export const Pai = styled.div`
  background-color: #1282b3;
`;

export const Botao = styled.button`
    align-items: center;
    font-family: "Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif;
    background-color: #6d6e6e; 
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    transition-duration: 0.4s;
    padding: 10px 24px;

    &:hover {
        background-color: white; 
        color: black; 
        border: 2px solid #4CAF50;
    }
`;

export const Resultado = styled.div`
  font-family: "Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif;
  color: #ffffff;
  font-size: 22px !important;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  background-color: #1282b3;
  font-family: "Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif;
  color: #ffffff;
`;

export const Footers = styled.footer`
  background-color: #fff;
  font-family: "Proxima Nova",-apple-system,Roboto,Arial,sans-serif,sans-serif;
  color: black;
  text-align: center;
`;

export const Input = styled.input`
  @media (max-width: 768px) {
    width: 80%;
    padding: 10px;
    margin: 5px 0;
  }
`;
