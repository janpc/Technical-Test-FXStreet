import * as React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PostsFilter from '.';

describe('Posts Filter tests', () => {
  test('button interaction', () => {
    let important = 'latest';
    const changeImportant = (newImportant) => {
      important = newImportant;
    };
    render(<PostsFilter setPostsType={changeImportant} selected={important} />);
    const Latest = screen.getByText(/latest/i);
    const Popular = screen.getByText(/popular/i);

    fireEvent.click(Popular);

    expect(important).toBe('popular');

    fireEvent.click(Latest);

    expect(important).toBe('latest');
  });
});
