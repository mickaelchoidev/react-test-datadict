import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.header`
  padding: 2vh 0;
  width: 80%;
  font-size: 25px;
  font-weight: bold;
  color: #f1f4f5;
`;

const Header = () => {
  return (
    <HeaderTitle>
      Todo App with React, Context API and Styled-Components
    </HeaderTitle>
  );
};

export default Header;
