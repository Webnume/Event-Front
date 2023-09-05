import { render, fireEvent, screen } from "@testing-library/react";
import ReactDOM from 'react-dom';
import Portal from "./Portal";

describe('Portal', () => {
    it('renders children in a portal', () => {
      const container = document.createElement('div');
      const child = <h1>Portal Content</h1>;
  
      ReactDOM.render(<Portal>{child}</Portal>, container);
  
      expect(container.firstChild).toMatchSnapshot();
    });
  });