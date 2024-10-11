import { Tabs } from "@/components/molecules/tabs/tabs"
import { vars } from "@/constants/tokens";
import { useToDoList } from "@/hooks/useToDoList";
import { useToast } from "@/provider/toast/toast";
import styled from "@emotion/styled";
import { useState } from "react";

export const ToDoList = ({ }) => {
  const tabs = [
    { label: "All", value: "All" },
    { label: "To Do", value: "To Do" },
    { label: "Done", value: "Done" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const { showToast } = useToast();

  const { todos, clearTodos } = useToDoList();

  return (
    <Container>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <button onClick={() => showToast('test')}>ToDoList</button>
      <button onClick={() => clearTodos()}>Clear</button>

      {todos
        .filter((todo) => {
          if (activeTab === 'All') return true;
          if (activeTab === 'To Do') return !todo.completed;
          if (activeTab === 'Done') return todo.completed;
          return true;
        })
        .map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'To Do'}</span>
          </div>
        ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${vars.$semantic.color.fill.white};
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0px 16px 32px 0px ${vars.$semantic.color.shadow.primary};
`