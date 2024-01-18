import type {ComponentSize} from "@stable/shared";
import * as  dayjs from "dayjs";
import type {VNode} from "vue";

export type Dayjs = typeof dayjs;

export type CalendarDateCellRenderOption = {
  date: Dayjs;
}

export type CalendarDateFullCellRenderOption = {
  date: Dayjs;
}

export type CalendarMonthCellRenderOption = {
  date: Dayjs;
}

export  type CalendarMonthFullCellRenderOption = {
  date: Dayjs;
}

export type CalendarHeaderRenderOption = {
  date: Dayjs;
}

export type CalendarMode = "month" | "year";

export interface CalendarLocale {
  // TODO:
}

export type  CalendarValue = Dayjs | string;

export interface CalendarProps {
  size?: ComponentSize;

  dateCellRender?: (option: CalendarDateCellRenderOption) => VNode;

  dateFullCellRender?: (option: CalendarDateFullCellRenderOption) => VNode;

  monthCellRender?: (option: CalendarMonthCellRenderOption) => VNode;

  monthFullCellRender?: (option: CalendarMonthFullCellRenderOption) => VNode;

  headerRender?: (option: CalendarHeaderRenderOption) => VNode;

  fullscreen?: boolean;

  locale?: CalendarLocale;

  mode?: CalendarMode;

  validRange?: [Dayjs, Dayjs];

  value?: CalendarValue;

  "onUpdate:value": (value: CalendarValue) => void;

  defaultValue?: CalendarValue;

  onChange?: CalendarChangeEvent;

  onPanelChange?: CalendarPanelChangeEvent;

  onSelect?: CalendarSelectEvent;
}

export type CalendarChangeEvent = (date: CalendarValue) => void;

export type CalendarPanelChangeEvent = (date: CalendarValue, mode: CalendarMode) => void;

export type CalendarSource = "year" | "month" | "date" | "customize";

export type CalendarSelectEvent = (date: Dayjs, info: { source: CalendarSource }) => void;


export interface CalendarSlots {
  dateCellRender?: (option: CalendarDateCellRenderOption) => unknown;

  dateFullCellRender?: (option: CalendarDateFullCellRenderOption) => unknown;

  monthCellRender?: (option: CalendarMonthCellRenderOption) => unknown;

  monthFullCellRender?: (option: CalendarMonthFullCellRenderOption) => unknown;

  headerRender?: (option: CalendarHeaderRenderOption) => unknown;
}