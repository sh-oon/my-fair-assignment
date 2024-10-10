export type TabSize = "small" | "medium" | "large";

export type TabsProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onChange?: (tab: string) => void;
  size?: TabSize;
};