# npm-modal-package
![Version](https://img.shields.io/badge/version-1.0.0-005bff)
[![React](https://img.shields.io/badge/React-18.2-blueviolet)](https://reactjs.org/)
[![React DOM](https://img.shields.io/badge/React_dom-18.2-orange)](https://reactrouter.com/)

A simple and customizable modal component for React.

### Prérequis
- Node.js
- npm
- Un navigateur web
- Un terminal
- Un éditeur de texte
- Tailwindcss

### Installation

You can install `vite-react-mymodal` using npm or yarn:

```bash
npm i vite-react-mymodal
# or
yarn i vite-react-mymodal
```

## Usage

To use the custom modal component in your React application, you can import it and use it as follows:

```jsx
import React, { useRef } from "react";
import {Modal} from "vite-react-mymodal";

const App = () => {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.open();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal ref={modalRef} 
             title="Modal Title" 
             body={"<p>This is the content of the modal.</p>"} 
             footer={"<p>This is the footer of the modal.</p>"}>
      </Modal>
    </div>
  );
};

export default App;

```

## Props
The npm-modal-package component accepts the following props:

| Prop name | Type        | Description                                        |
|-----------|-------------|----------------------------------------------------|
| `title`   | `string`    | The title of the modal.                            |
| `body`    | `ReactNode` | The content to display in the body of the modal.   |
| `footer`  | `ReactNode`   | The content to display in the footer of the modal. |

## Methods
The react-custom-modal component also exposes two imperative methods via the ref prop:

1. `open`: Opens the modal.
2. `close`: Closes the modal.

You can use these methods to programmatically control the visibility of the modal.

## Styling

The npm-modal-package component is styled by default with Tailwind. You can style it by adding CSS rules to your project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
