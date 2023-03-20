# Scroll Utilities

This module provides a set of utility methods for managing and controlling scrolling behavior of HTML elements.

## Installation

You can install this module via `npm` using the following command:

```bash
npm install --save @masshuu/scroll-utilities
```

## Usage

You can import the `Scroll` class from the module as follows:

```ts
import Scroll from "@masshuu/scroll-utilities";
```

Once you have imported the class, you can use its methods as follows:

### Scroll.enable(selector: string = "body"): void

This method enables scrolling on an HTML element by setting its overflow style to an empty string.

- `selector` (optional) - A CSS selector for the HTML element to enable scrolling on. Defaults to `"body"`.

### Scroll.disable(selector: string = "body"): void

This method disables scrolling on an HTML element by setting its overflow style to "hidden".

- `selector` (optional) - A CSS selector for the HTML element to disable scrolling on. Defaults to `"body"`.

### Scroll.intoView(options: Readonly<ScrollIntoView>): void

This method scrolls an HTML element into view using the specified options.

- `options` - An options object that specifies the target element to scroll to and the scrolling behavior to use.
  - `target` - A CSS selector or DOM element to scroll into view.
  - `behavior` (optional) - The scrolling behavior to use. Defaults to `"smooth"`.
  - `block` (optional) - The vertical position to align the target element within the viewport. Defaults to `"start"`.
  - `inline` (optional) - The horizontal position to align the target element within the viewport. Defaults to `"nearest"`.

## Example

Here is an example usage of the Scroll class:

```ts
import Scroll from "@masshuu/scroll-utilities";

// enable scrolling on the body element
Scroll.enable();

// scroll to an element with the ID "target" with smooth behavior
Scroll.intoView({
  target: "#target",
});
```

## License

This module is licensed under the `ISC` License. See the `LICENSE` file for more details.
