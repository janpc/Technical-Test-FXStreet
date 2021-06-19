import * as React from 'react';
import parse from 'html-react-parser';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Post from '.';

import { formatDate } from '../../utils/postsUtils';

describe('Post Tests', () => {
  const postInfo = {
    id: '2cb26098-e701-4dd9-bcd2-2c090941aa91',
    title:
      'Forex Today: Dollar attempts recovery after Fed, data blows, gold clings to $1,900, cryptos climb',
    content:
      '<p>Hi traders! On Monday we informed our users about a connectivity issue between our servers and those from our automation provider. As a result of that incident, there are still 5 open trades some of which could see delays in sending out the exit signals. The trades will be correctly closed at the indicated Stop Loss and Take Profit levels, but some of them require a manual intervention to send out the signal to the FXS Insights message feed.</p>',
    imageUrl: 'https://editorial.fxstreet.com/images/Signals/Juan.jpg',
    publicationTime: '2021-05-24T11:02:43.511Z',
    isPopular: true,
    feed: 'Analysis',
    subFeed: 'Reviews & Stats',
    author: {
      id: 1,
      name: 'FXStreet Team',
      companyName: 'FXStreet',
      imageUrl:
        'https://editorial.fxstreet.com/authors/FXStreet%20Company%20LOGO%2075%20MAY17_XtraSmall.png'
    }
  };

  beforeEach(() => {
    render(<Post postInfo={postInfo} />);
  });

  it('Post have the Type of Piece of Post and the Subtype', () => {
    const feed = screen.getByText(postInfo.feed);
    expect(feed).toBeInTheDocument();

    const subFeed = screen.getByText(postInfo.subFeed);
    expect(subFeed).toBeInTheDocument();
  });

  it('Post have the publication time', () => {
    const publicationTime = screen.getByText(
      formatDate(postInfo.publicationTime)
    );
    expect(publicationTime).toBeInTheDocument();
  });

  it('Post have the Author Picture', () => {
    const image = screen.getByAltText(postInfo.author.name);

    expect(image).toHaveAttribute('src', postInfo.author.imageUrl);
  });

  it("Post have the Author name and Author's company name", () => {
    const authorName = screen.getByText(
      `${postInfo.author.name} | ${postInfo.author.companyName}`
    );
    expect(authorName).toBeInTheDocument();
  });

  it('Post have the title of the Post', () => {
    const title = screen.getByText(postInfo.title);
    expect(title).toBeInTheDocument();
  });

  it('Post have the content of the Post', () => {
    const element = parse(postInfo.content);
    const text = element.props.children;
    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
  });

  it('Post have the image of the Post', () => {
    const image = screen.getByAltText(postInfo.title);

    expect(image).toHaveAttribute('src', postInfo.imageUrl);
  });
});
