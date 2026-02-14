<!-- Setup instructions -->
- Node.js >= 22
- npm >= 10

<!-- Clone repository -->



<!-- Components overview -->

<!-- SidebarMenu -->

Collapsible sidebar component with accordion-styled sub-links

Features:
- Open / close sidebar
- Navigation group using accordion
- Closes when background is clicked

States:
- Open
- Closed

<!-- Toast -->
Notification component that appears at the bottom right

Features:
- Auto dismisses after timeout
- Manual dismiss is allowed
- Includes fade / slide transitions

States:
- Manual close
- Auto close after timeout (manually chosen)

<!-- Input -->
Input component with different states and different types

Features:
- Has 3 types: password, text and number
- When type === password, eye icon is available to toggle password visibility
- If input is clearable, clear button appears that cleans the input on click
- Input size choice is available: small (sm), middle (md), large (lg)

States:
- Password with eye icon
- Text
- Number