import type {Component, Plugin, VNode} from "vue";

// TODO: 类型需要完善
export type StableComponent = Component & {
  install?: Plugin
}

// 所有组件共有的尺寸
export type ComponentSize = "small" | "middle" | "large";

export interface SOption {
  key?: string | number;

  value: string | number;

  label: string | VNode;

  disabled?: boolean;

  title?: string;
}

// 为数字时：单位为 px。其他直接使用
export type PixelUnit = string | number;

export type FormItemStatus = "error" | "warning";

export type Noop = () => void;

export type DefaultSlot = () => unknown;
