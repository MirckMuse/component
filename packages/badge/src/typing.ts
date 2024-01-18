import type {ComponentSize, DefaultSlot, PixelUnit} from "@stable/shared";
import type {StyleValue, VNode} from "vue";

export type BadgeType = "primary" | "success" | "danger" | "warning";

export interface BadgeProps {
  size?: ComponentSize;

  type?: BadgeType;

  color?: string;

  count?: number;

  dot?: boolean;

  countStyle?: StyleValue;

  offset?: [PixelUnit, PixelUnit];

  overflowCount?: number;

  showZero?: boolean;

  text?: string;

  title?: string;
}

export type RibbonPlacement = "start" | "end";

export interface RibbonProps {
  color?: string;

  placement?: RibbonPlacement;

  text?: string | (() => VNode);
}

export interface RibbonSlot {
  text?: DefaultSlot;
}
