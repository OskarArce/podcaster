import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card title="" />);
    expect(baseElement).toBeTruthy();
  });
});
