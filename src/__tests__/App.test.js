/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

describe('portfolio', () => {
  let container;

  beforeEach(() => {
    ({ container } = render(<App />));
  });

  afterEach(() => cleanup());

  it('renders factual experience with Jump as a past position', () => {
    expect(container).toHaveTextContent('Previous position at Jump Trading');
    expect(container).toHaveTextContent('Visiting Student Researcher');
    expect(container).toHaveTextContent('Events Team Member');
    expect(container).not.toHaveTextContent('currently at Jump Trading');
  });

  it('includes coursework without publishing grades', () => {
    expect(container).toHaveTextContent('Selected coursework');
    expect(container).toHaveTextContent('Machine Learning');
    expect(container).not.toHaveTextContent('5.3 / 6');
  });

  it('provides contact links without a phone number', () => {
    expect(container.querySelector('a[href="mailto:mchami.uni@gmail.com"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://www.linkedin.com/in/mamoun-chami/"]'))
      .toBeInTheDocument();
    expect(container.querySelector('a[href^="tel:"]')).not.toBeInTheDocument();
  });
});
