<!-- Setup instructions -->
- Node.js >= 22
- npm >= 10

<!-- Clone repository -->
git clone https://github.com/imeanmybabyboy/TraineeReactTestTask
cd TraineeReactTestTask

<!-- Dependencies installation -->
npm ci

<!-- Run Storybook -->
npm run storybook



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
- Accordion open
- Accordion closed

<!-- Sidebar menu screenshots -->
- Sidebar closed:
![sidebar closed](<./public/img/sidebar closed.png>)

- Sidebar open accordion closed:
![sidebar open accordion closed](<./public/img/sidebar open accordion closed.png>)

- Sidebar open accordion main-menu open:
![sidebar open accordion main-menu open](<./public/img/sidebar open accordion main-menu open.png>)

- Sidebar open accordion feedback open:
![sidebar open accordion feedback open](<./public/img/sidebar open accordion feedback open.png>)

<!-- Toast -->
Notification component that appears at the bottom right

Features:
- Auto dismisses after timeout
- Manual dismiss 
- Includes fade / slide transitions

States:
- Manual close
- Auto close after timeout (manually chosen)

<!-- Toast screenshots -->
- Toast triggered:
![toast triggered](<./public/img/toast triggered.png>)

- Toast closed:
![toast closed](<./public/img/toast closed.png>)

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

<!-- Input screenshots -->
- Input pass hidden lg size:
![input pass hidden lg size](<./public/img/input pass hidden lg size.png>)

- Input pass visible lg size:
![input pass visible lg size](<./public/img/input pass visible lg size.png>)

- Input text md size:
![input text md size](<./public/img/input text md size.png>)

- Input number sm size:
![input number sm size](<./public/img/input number sm size.png>)