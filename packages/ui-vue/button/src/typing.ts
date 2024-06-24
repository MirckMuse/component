import type { ComponentSize } from "../../shared";

// 按钮类型
export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "link"
  | "text";

// 按钮形状
export type ButtonShape = "default" | "rounded" | "circle";

// 按钮点击事件
export type ButtonClickEvent = ($event: MouseEvent) => void;

export interface ButtonProps {
  size?: ComponentSize;

  type?: ButtonType;

  shape?: ButtonShape;

  ghost?: boolean;

  dashed?: boolean;

  block?: boolean;

  disabled?: boolean;

  href?: string;

  htmlType?: "button" | "submit" | "reset";

  loading?: boolean;

  target?: string;

  onClick?: ButtonClickEvent;
}

export interface ButtonGroupProps {
  size?: ComponentSize;
}
