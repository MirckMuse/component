import type {ComponentSize, SOption, PixelUnit, FormItemStatus, DefaultSlot, Noop} from "@stable/shared";
import type {StyleValue} from "vue";

export type AutoComplateValue = string | SOption | (string | SOption)[];

export interface AutoCompleteEvent {
  onBlur?: Noop;

  onFocus?: Noop;

  onClear?: Noop;

  onChange?: (value: AutoComplateValue) => void;

  onDropdownVisibleChange?: (open: boolean) => void;

  onSearch?: (inputValue: string) => void;

  onSelect?: (value: AutoComplateValue, option: SOption) => void;
}

export interface AutoCompleteProps extends AutoCompleteEvent {
  size?: ComponentSize;

  allowClear?: boolean;

  autofocus?: boolean;

  backfill?: boolean;

  bordered?: boolean;

  defaultActiveFirstOption?: boolean;

  defaultOption?: boolean;

  disabled?: boolean;

  popupClassName?: string;

  dropdownMatchSelectWidth?: boolean | PixelUnit;

  dropdownMenuStyle?: StyleValue;

  filterOption?: boolean | ((inputValue: string, option: SOption) => boolean);

  open?: boolean;

  options?: SOption[];

  placeholde?: string;

  status?: FormItemStatus;

  value?: AutoComplateValue;

  "onUpdate:value"?: (value: AutoComplateValue) => void;
}


export interface AutoComplateSlot {
  default?: DefaultSlot;

  cleaerIcon?: DefaultSlot;

  placeholder?: DefaultSlot;

  option?: (option: SOption) => unknown;
}
