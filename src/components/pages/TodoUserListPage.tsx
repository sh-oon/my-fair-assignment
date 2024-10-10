"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Text, Input } from "@/components/atoms";
import { ToDoList } from "@/components/organisms/to-do-list";


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
  const [value, setValue] = useState('');

  return (
    <Container>
      <Text as={'h1'} typography={'title-xxl'}>To Do List</Text>

      <div style={{
        width: '737px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>
        <Input
          placeholder="할 일을 입력해주세요."
          maxLength={20}
          value={value}
          onChange={(e) => setValue(e)}
        />

        <ToDoList></ToDoList>
      </div>
    </Container>
  );
};

export default TodoUserListPage;
