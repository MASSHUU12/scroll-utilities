import { ScrollIntoView } from "./types";

class Scroll {
  public static enable(selector = "body"): void {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    element.style.overflow = "";
  }

  public static disable(selector = "body"): void {
    const element = document.querySelector<HTMLElement>(selector);

    if (!element) return;

    element.style.overflow = "hidden";
  }

  public static intoView({
    target,
    behavior = "smooth",
    block = "start",
    inline = "nearest",
  }: ScrollIntoView): void {
    document.querySelector(target)?.scrollIntoView({
      behavior: behavior,
      block: block,
      inline: inline,
    });
  }
}

export default Scroll;
