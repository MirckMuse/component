import type {ComponentSize, DefaultSlot} from "@stable/shared";
import type {StyleValue} from "vue";

export interface CardCustomTabItem {
}

export type CardType = "default" | "inline";

export type CardTabChangeEvent = (key: string) => void;

export interface CardProps {
  size?: ComponentSize;

  activeTabKey?: string;

  defaultActiveTabKey?: string;

  bordered?: boolean;

  extra?: string;

  headerStyle?: StyleValue;

  bodyStyle?: StyleValue;

  hoverable?: boolean;

  loading?: boolean;

  tabList?: () => CardCustomTabItem[];

  title?: string;

  type?: CardType;

  onTabChange?: CardTabChangeEvent;
}

export interface CardSlots {
  extra?: DefaultSlot;

  title?: DefaultSlot;

  actions?: DefaultSlot;

  cover?: DefaultSlot;

  tabBarExtraContent?: DefaultSlot;

  customTab?: (option: { item: CardCustomTabItem }) => unknown;
}

export interface CardMetaProps {
  title?: string;

  description?: string;
}

export interface CardMetaSlots {
  avator?: DefaultSlot;

  title?: DefaultSlot;

  description?: DefaultSlot;
}
