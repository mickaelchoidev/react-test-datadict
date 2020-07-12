import styled from "styled-components";

const Button = styled.button`
  margin-left: 2vw;
  padding: 1vh 2vw;
  font-size: 15px;
  border-radius: 5px;
  background-color: #f1f4f5;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  &:active {
    color: #f1f4f5;
    background-color: #79989b;
  }
`;

export default Button;
