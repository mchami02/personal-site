/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

class IntersectionObserverMock {
  observe() {}

  disconnect() {}
}

global.IntersectionObserver = IntersectionObserverMock;

describe('portfolio', () => {
  let container;

  beforeEach(() => {
    ({ container } = render(<App />));
  });

  afterEach(() => {
    cleanup();
  });

  it('renders Mamoun’s profile and current company', () => {
    expect(container).toHaveTextContent('Jump Trading');
    expect(container).toHaveTextContent('UC Berkeley');
  });

  it('provides working contact destinations', () => {
    expect(container.querySelector('a[href="mailto:mchami.uni@gmail.com"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://www.linkedin.com/in/mamoun-chami/"]'))
      .toBeInTheDocument();
  });
});
