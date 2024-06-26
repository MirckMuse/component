import type { App } from "vue";
import type { PixelUnit, ScodeComponent } from "./typing";

// 给组件打 install 补丁。
export function patchInstall<E extends Record<string, ScodeComponent>>(
  component: ScodeComponent,
  extra?: E,
) {
  component.install =
    component.install ||
    ((app: App) => {
      for (const comp of [component, ...Object.values(extra ?? {})]) {
        if (comp.name) {
          app.component(comp.name, comp);
        }
      }

      return app;
    });

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      (component as any)[key] = comp;
    }
  }

  return component as ScodeComponent & E;
}

export function toPixel(input: PixelUnit) {
  return typeof input === "number" ? `${input}px` : input;
}
