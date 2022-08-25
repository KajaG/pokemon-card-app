import styled from "styled-components";

interface CardProps {
  isStrong?: boolean;
}

export const PokemonCardStyled = styled.div<CardProps>`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border: 2px solid #795548;
  background: ${({ isStrong }) =>
    isStrong ? "var(--custom-gold-background)" : "#ffb444"};
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

export const PokemonCardImage = styled.div`
  position: relative;
  height: 50%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  flex: 1;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 5px;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0px auto;
    display: block;
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.4));
  }
`;

export const PokemonCardInfo = styled.div`
  padding: 10px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 16px;
    margin-bottom: 5px;
  }

  b {
    margin-right: 5px;
  }
`;

export const PokemonCardTitle = styled.h5`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 25px;
`;

export const PokemonCardText = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;

  div {
    display: flex;
    flex-direction: column;
  }
`;
