# Custom Modal React Component

A beautiful and customizable modal component for React applications.

## Installation

```bash
npm install @jeremydlny/custommodal
```

## Usage

```jsx
import { CustomModal } from "@jeremydlny/custommodal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <CustomModal
        show={showModal}
        message="Your message here"
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
```

## Props

| Prop      | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| `show`    | boolean  | Controls the visibility of the modal   |
| `message` | string   | The message to display in the modal    |
| `onClose` | function | Callback function when modal is closed |

## License

MIT
