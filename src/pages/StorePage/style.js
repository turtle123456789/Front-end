import styled from "styled-components";

export const Address = styled.div`
  background: ${({ selected }) => (selected ? "#FFDBDD" : "none")};
  padding: 10px;
  cursor: pointer;
  
  li {
    display: flex;
    align-items: center;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    margin-left: 10px;
  }
`;
