import { Tabs } from "@/components/molecules/tabs/tabs"
import { vars } from "@/constants/tokens";
import styled from "@emotion/styled";
import { useState } from "react";

export const ToDoList = ({ }) => {
  const tabs = [
    { label: "All", value: "All" },
    { label: "To Do", value: "To Do" },
    { label: "Done", value: "Done" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <Container>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
      />

      <h1>ToDoList</h1>
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