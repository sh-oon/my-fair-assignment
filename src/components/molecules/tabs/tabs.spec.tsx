import { render, fireEvent } from "@testing-library/react";
import { Tabs } from "@/components/molecules/tabs/tabs";
import "@testing-library/jest-dom";

describe("Tabs", () => {
  const tabs = [
    { label: "Tab 1", value: 1 },
    { label: "Tab 2", value: 2 },
    { label: "Tab 3", value: 3 },
  ];

  it("renders tabs correctly", () => {
    const { getByText } = render(
      <Tabs tabs={tabs} activeTab={1} setActiveTab={() => { }} onChange={() => { }} />
    );

    tabs.forEach((tab) => {
      const tabElement = getByText(tab.label);
      expect(tabElement).toBeInTheDocument();
    });
  });

  it("sets active tab correctly", () => {
    let activeTab = 1;
    const setActiveTab = (tabId: number) => {
      activeTab = tabId;
    };

    const { getByText } = render(
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} onChange={() => { }} />
    );

    const tab2 = getByText("Tab 2");
    fireEvent.click(tab2);

    expect(activeTab).toBe(2);
  });

  it("calls onChange when tab is clicked", () => {
    const onChange = jest.fn();

    const { getByText } = render(
      <Tabs tabs={tabs} activeTab={1} setActiveTab={() => { }} onChange={onChange} />
    );

    const tab3 = getByText("Tab 3");
    fireEvent.click(tab3);

    expect(onChange).toHaveBeenCalledWith(3);
  });
});