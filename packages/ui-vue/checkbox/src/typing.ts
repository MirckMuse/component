import type { ComponentSize } from "../../shared";

export type CheckboxValue = boolean | string | number;

export type CheckboxChangeEvent = (value: CheckboxValue) => void;

export type CheckboxGroupChangeEvent = (
  currentValue: CheckboxValue,
  values: CheckboxValue[],
) => void;

export interface CheckboxOption {
  label?: string;

  value?: string;

  disabled?: boolean;

  indeterminate?: boolean;

  onChange: CheckboxChangeEvent;
}

export interface CheckboxProps {
  size?: ComponentSize;

  autofocus?: boolean;

  checked?: boolean;

  disabled?: boolean;

  indeterminate?: boolean;

  value?: CheckboxValue;

  "onUpdate:checked"?: (checked: boolean) => void;

  onChange?: CheckboxChangeEvent;
}

export interface CheckboxGroupProps {
  size?: ComponentSize;

  disabled?: boolean;

  name?: string;

  options?: string[] | CheckboxOption[];

  value?: CheckboxValue[];

  "onUpdate:value"?: (value: CheckboxValue[]) => void;

  onChange?: CheckboxGroupChangeEvent;
}
