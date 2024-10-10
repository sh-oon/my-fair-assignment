import { vars } from "@/constants/tokens";
import styled from "@emotion/styled";
import { Text } from "@/components/atoms";
import { TabSize, TabsProps } from "./tabs.types";



export const Tabs = ({ tabs, activeTab, setActiveTab, onChange, size = 'medium' }: TabsProps) => {
  return (
    <StyledTabs $size={size}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${tab === activeTab ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(tab);
            onChange && onChange(tab);
          }}
        >
          <Text typography="text-s-semibold" color={activeTab !== tab ? 'primary' : 'interactive'}>{tab}</Text>
        </button>
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled.div<{ $size: TabSize }>`
  display: flex;
  gap: 16px;

  .tab {
    width : ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '80px';
      case 'medium':
        return '108px';
      case 'large':
        return '120px';
    }
  }};
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #f6f6f6;
    cursor: pointer;

    &.active {
      background-color: ${vars.$semantic.color.fill.interactive};
      color: ${vars.$semantic.color.text.interactive};
    }
  }
`