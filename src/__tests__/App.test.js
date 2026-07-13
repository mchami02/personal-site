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
    expect(container).toHaveTextContent('ML Research Engineer');
    expect(container).toHaveTextContent('Events Team Member');
    expect(container).not.toHaveTextContent('currently at Jump Trading');
  });

  it('includes coursework without publishing grades', () => {
    const courseworkDetails = container.querySelector('details.coursework');
    expect(courseworkDetails).toBeInTheDocument();
    expect(courseworkDetails).not.toHaveAttribute('open');
    expect(courseworkDetails).toHaveTextContent('Machine Learning');
    expect(container).not.toHaveTextContent('5.3 / 6');
  });

  it('places Berkeley in research and links to the research group', () => {
    const experienceSection = container.querySelector('#experience');
    const researchSection = container.querySelector('#projects');
    expect(experienceSection).not.toHaveTextContent('Visiting Student Researcher');
    expect(researchSection).toHaveTextContent('Visiting Student Researcher');
    expect(researchSection.querySelector('a[href="https://bayen.berkeley.edu/"]'))
      .toBeInTheDocument();
  });

  it('provides contact links without a phone number', () => {
    expect(container.querySelector('a[href="mailto:mchami.uni@gmail.com"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="https://www.linkedin.com/in/mamoun-chami/"]'))
      .toBeInTheDocument();
    expect(container.querySelector('a[href^="tel:"]')).not.toBeInTheDocument();
  });
});
