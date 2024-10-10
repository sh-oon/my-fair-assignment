"use client";
import React from "react";
import styled from "@emotion/styled";
import { Text, Input } from "@/components/atoms";


const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6f6f6;
  flex-direction: column;
  gap: 64px;
`;

interface Props { }

const TodoUserListPage = ({ }: Props) => {
  return (
    <Container>
      <Text as={'h1'} typography={'title-xxl'}>To Do List</Text>

      <div style={{
        width: '737px',
      }}>
        <Input
          placeholder="할 일을 입력해주세요."
        />
      </div>
    </Container>
  );
};

export default TodoUserListPage;
