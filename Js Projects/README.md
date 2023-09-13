# JavaScript-Projects
This repository has JavaScript projects which i had practiced
-----------------------------------------------------------------------------------------------------------------------
Project 1: Digital Clock:
NOTES: 

Three topics: 
1. The reason for setting `margin: 0;` and `padding: 0;` on the `body` element in CSS is to eliminate default spacing and gaps around the content, giving more control over the layout and appearance of the webpage.

2. The usage of viewport units (`vw` and `vh`) to size elements relative to the size of the viewport (visible area of the web page) and other commonly used CSS units like percentage, pixels, em, and rem.

3. The Flexbox layout model in CSS, which provides a flexible and responsive way to arrange and align elements within a container. It includes attributes like `display`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, and `flex` for organizing and aligning flex items within the container.

**Here's a brief explanation of percentage, pixels, em, and rem units, as well as the key Flexbox attributes:**

**Percentage (%):**
- `1%` is equal to `1%` of the parent element's size (width or height).
- Used to size elements based on a percentage of their parent element's size.
- Useful for creating responsive layouts within a parent container, as elements scale with their container.

**Pixels (px):**
- Pixels are fixed units used to size elements in absolute terms.
- The size of the element remains fixed regardless of the viewport size or parent element's size.
- Useful for creating elements with fixed dimensions that should not change with screen size.

**Em and Rem:**
- `Em` and `rem` are relative units that depend on the font size of the element or the root (html) element, respectively.
- `1em` is equal to the font size of the element, while `1rem` is equal to the font size of the root (html) element.
- They are used to create responsive designs that scale based on the font size.
- `Em` is relative to the parent element's font size, while `rem` is relative to the root (html) element's font size.
- `rem` is often preferred for responsive design because it's relative to the root element and unaffected by nested font size changes.

**Flexbox:**
- Flexbox is a layout model in CSS that provides a flexible way to arrange and align elements within a container.
- To use Flexbox, set the `display` property of the container element to `flex`. This turns the container into a flex container, and its direct children become flex items.
- Key Flexbox attributes:
  - `flex-direction`: Specifies the direction of the main axis along which flex items are placed (e.g., `row`, `column`, etc.).
  - `flex-wrap`: Specifies whether flex items should wrap to multiple lines if they overflow the container's width (e.g., `wrap`, `wrap-reverse`, etc.).
  - `justify-content`: Aligns flex items along the main axis (e.g., `flex-start`, `center`, `space-between`, etc.).
  - `align-items`: Aligns flex items along the cross axis (perpendicular to the main axis) (e.g., `stretch`, `flex-start`, `center`, etc.).
  - `align-content`: Aligns lines of flex items along the cross axis when there are multiple lines of flex items (e.g., `flex-start`, `center`, `space-around`, etc.).
  - `flex`: Specifies how flex items grow and shrink to fill the available space (e.g., `flex: 1 1 auto`).

**Usage:**
- Flexbox is commonly used for creating responsive and dynamic layouts without relying on float or positioning properties.
- It simplifies the process of creating complex layouts with less code and is widely supported across modern browsers.
-------------------------------------------------------------------------------------------------------------------------------------------------------------
