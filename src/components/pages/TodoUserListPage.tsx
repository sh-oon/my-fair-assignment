"use client";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6f6f6;
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <div>To Do List</div>
    </Container>
  );
};

export default TodoUserListPage;
