import styled from "styled-components";

const ListTasks = styled.div`
  /* text-align: center; */
  font-size: 20px;
  color: #f1f4f5;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export default ListTasks;
