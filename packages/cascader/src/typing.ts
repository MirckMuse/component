import type { ComponentSize, DefaultSlot } from "@stable/shared";
import type { StyleValue, VNode } from "vue";

export type CascaderValue = string | number;

export type CascaderStatus = "error" | "warning";

export type CascaderExpandTrigger = "click" | "hover";

export type CascaderPlacement = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

export interface CascaderDisplayRenderOption {
  labels: string[];

  selectedOptions: CascaderOption[];
}

export interface CascaderFieldName {
  label?: string;

  value?: string;

  children?: string;
}

export interface CascaderOption {
  value: CascaderValue;

  label: string | VNode | ((option: CascaderOption) => VNode);

  disabled?: boolean;

  children?: CascaderOption[];

  isLeaf?: boolean;
}

export type CascaderShowCheckedStrategy = "SHOW_PARENT" | "SHOW_CHILD";

export type CascaderShowSearch = boolean | {
  filter?: (searchValue: string, path: CascaderOption[]) => boolean;

  limit?: number | false;

  matchInputWidth?: boolean;

  render?: (searchValue: string, path: CascaderOption[]) => VNode;

  sort?: (prev: CascaderOption, next: CascaderOption, searchValue: string) => number;
};

export type CascaderChangeEvent = (value: CascaderValue, selectedOptions: CascaderOption[]) => void;

export type CascaderPopupDropdownVisibleChangeEvent = (value: CascaderValue) => void;

export type CascaderSearchEvent = (searchValue: string) => void;

export interface CascaderProps {
  size?: ComponentSize;

  allowClear?: boolean;

  autofocus?: boolean;

  bordered?: boolean;

  changeOnSelect?: boolean;

  defaultValue?: CascaderValue[];

  disabled?: boolean;

  displayRender?: (option: CascaderDisplayRenderOption) => VNode;

  popupClass?: string;

  popupStyle?: StyleValue;

  expandTrigger?: CascaderExpandTrigger;

  fieldName?: CascaderFieldName;

  getContainer?: (node: HTMLElement) => HTMLElement;

  loadData?: (selectedOptions: CascaderOption[]) => void;

  maxTagCount?: number | "responsive";

  maxTagPlaceholder?: (omittedValues: CascaderOption[]) => VNode;

  multiple?: boolean;

  notFoundContent?: string;

  open?: boolean;

  options?: CascaderOption[];

  placeholder?: string;

  placement?: CascaderPlacement;

  showCheckedStrategy?: CascaderShowCheckedStrategy;

  searchValue?: string;

  showSearch?: CascaderShowSearch;

  status?: CascaderStatus;

  suffixIcon?: string | (() => VNode);

  value?: CascaderValue[];

  "onUpdate:value"?: (value: CascaderValue[]) => void;

  onChange?: CascaderChangeEvent;

  onPopupDropdownVisibleChange?: CascaderPopupDropdownVisibleChangeEvent;

  onSearch?: CascaderSearchEvent;
}

export interface CascaderSlots {
  clearIcon?: DefaultSlot;

  displayRender?: (option: CascaderDisplayRenderOption) => unknown;

  expandIcon?: DefaultSlot;

  removeIcon?: DefaultSlot;

  suffixIcon?: DefaultSlot;

  tagRender?: (option: CascaderOption) => unknown;
}
