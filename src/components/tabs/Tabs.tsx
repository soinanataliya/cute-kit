import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useState,
  useCallback,
} from "react";
import "./tabs.css";
import { cn } from "../../helpers/class-names";

export interface Tab {
  id: string;
  label: string;
  content?: React.ReactNode;
  href?: string;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
  variant?: "horizontal" | "vertical";
}

const Tabs = (
  props: PropsWithChildren<TabsProps>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { tabs, className, variant = "horizontal" } = props;
  const contentTabs = tabs.filter(tab => !tab.href);
  const [activeTabId, setActiveTabId] = useState(contentTabs[0]?.id);

  const handleTabClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;
    if (id) {
      setActiveTabId(id);
    }
  }, []);

  return (
    <div
      className={cn("tabs-container", `tabs-${variant}`, className)}
      ref={ref}
    >
      <div className="tabs" role="tablist">
        {tabs.map((tab) => {
          const isLink = !!tab.href;
          const isActive = tab.id === activeTabId;

          const commonProps = {
            key: tab.id,
            role: "tab",
            id: `tab-${tab.id}`,
            className: cn("tab", isActive && "active"),
          };

          if (isLink) {
            return (
              <a href={tab.href} {...commonProps}>
                {tab.label}
              </a>
            );
          }

          return (
            <button
              {...commonProps}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              data-id={tab.id}
              onClick={handleTabClick}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tab-content-wrapper">
        {contentTabs.map((tab) => (
          <div
            key={tab.id}
            className={cn("tab-content", tab.id === activeTabId && "active")}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(Tabs);
