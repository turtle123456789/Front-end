import styled from 'styled-components';

// Styled component cho nút "Next"
export const NextButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1; /* Để nút hiển thị phía trên slider */

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled component cho nút "Prev"
export const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1; /* Để nút hiển thị phía trên slider */

  &:hover {
    background-color: #0056b3;
  }
`;
