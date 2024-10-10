import { vars } from "@/constants/tokens";
import styled from "@emotion/styled";
import { Text } from "@/components/atoms";
import { TabSize, TabsProps, Tab } from "./tabs.types";

export const Tabs = <T,>({ tabs, activeTab, setActiveTab, onChange, size = 'medium' }: TabsProps<T>) => {
  return (
    <StyledTabs $size={size}>
      {tabs.map((tab) => (
        <button
          key={tab.value as unknown as string}
          className={`tab ${tab.value === activeTab ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(tab.value);
            onChange && onChange(tab.value);
          }}
        >
          <Text typography="text-s-semibold" color={activeTab !== tab.value ? 'primary' : 'interactive'}>{tab.label}</Text>
        </button>
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled.div<{ $size: TabSize }>`
  display: flex;
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
    background-color: ${vars.$semantic.color.fill.white};
    cursor: pointer;

    &.active {
      background-color: ${vars.$semantic.color.fill.interactive};
      color: ${vars.$semantic.color.text.interactive};
    }
  }
`