export type AlertType = "primary" | "success" | "warning" | "danger";

export type AlertCloseEvent = ($event: MouseEvent) => void;

export interface AlertProps {
  // 关闭后的回调
  afterClose?: () => void;

  banner?: boolean;

  closable?: boolean;

  closeText?: string;

  description?: string;

  message?: string;

  showIcon?: boolean;

  type?: AlertType;

  onClose?: AlertCloseEvent;
}

export interface AlertSlot {
  action?: () => unknown,

  closeIcon?: () => unknown,

  closeText?: () => unknown,

  description?: () => unknown,

  icon?: () => unknown,

  message?: () => unknown,
}
