import styled from "styled-components";

export const CardDetailStyled = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
`;
export const CardDetailImage = styled.div`
  max-width: 80%;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.4));
  margin-top: 20px;
  padding: 30px;
  margin-bottom: 20px;

  img {
    max-width: 100%;
  }
`;

export const CardDetailInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CardDetailInfoTitle = styled.h5`
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CardDetailInfoColumn = styled.div`
  padding: 10px 30px;
`;

export const CardDetailList = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  display: inline-block;
  vertical-align: text-top;

  li {
    list-style-type: none;
    padding: 5px 0px;
    font-size: 16px;
  }

  ul li {
    padding: 0;
  }

  b {
    margin-right: 5px;
  }
`;
