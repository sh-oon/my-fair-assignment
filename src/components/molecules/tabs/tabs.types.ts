export type TabSize = "small" | "medium" | "large";

export type Tab<T> = {
  label: string;
  value: T;
};

export type TabsProps<T> = {
  tabs: Tab<T>[];
  activeTab: T;
  setActiveTab: (tab: T) => void;
  onChange?: (tab: T) => void;
  size?: TabSize;
};