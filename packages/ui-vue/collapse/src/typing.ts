import type { ComponentSize, DefaultSlot } from "../../shared";
import type { VNode } from "vue";

export type CollapseKey = string | number;

export type CollapseCollapsible = "header" | "icon" | "disabled";

export type CollapseExpandIconPosition = "start" | "end";

export type CollapseChangeEvent = (activeKey: CollapseKey) => void;

export interface CollapseProps {
  size?: ComponentSize;

  accordion?: boolean;

  activeKey?: CollapseKey[];

  "onUpdate:activeKey"?: (activeKeys: CollapseKey[]) => void;

  bordered?: boolean;

  collapsible?: CollapseCollapsible;

  destoryInactivePanel?: boolean;

  expandIcon?: (props: CollapseProps) => VNode;

  expandIconPosition?: CollapseExpandIconPosition;

  ghost?: boolean;

  onChange?: CollapseChangeEvent;
}

export interface CollapseSlots {
  expandIcon?: (props: CollapseProps) => unknown;
}

export type CollapsePanelCollapsible = "header" | "disabled";

export interface CollapsePanelProps {
  collapsible?: CollapsePanelCollapsible;

  extra?: () => VNode;

  forceRender?: boolean;

  header?: string;

  key?: CollapseKey;

  showArrow?: boolean;
}

export interface CollapsePanelSlots {
  extra?: DefaultSlot;

  header?: DefaultSlot;
}
