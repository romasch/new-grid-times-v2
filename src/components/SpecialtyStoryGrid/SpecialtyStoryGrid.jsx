import React from 'react';
import styled from 'styled-components';

import {MARKET_DATA, SPORTS_STORIES} from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from "../../constants.js";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id} >
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: grid;
    gap: 48px;

    @media ${QUERIES.tabletAndUp} {
        grid-template-columns: 100%;
        gap: 64px;
    }
    
    @media ${QUERIES.laptopAndUp} {
        grid-template-columns: repeat(2, minmax(0px, 1fr));
        gap: 0;
    }
`;

const MarketsSection = styled.section`
    @media ${QUERIES.laptopAndUp} {
        padding-right: 16px;
        border-right: 1px solid var(--color-gray-300);
        margin-right: 16px;
    }
`;

const MarketCards = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
`;

const SportsStories = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    @media ${QUERIES.tabletAndUp} {
        display: flex;
        overflow: auto;
    }
`;

const SportsStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
      min-width: 220px;
  }
`

export default SpecialtyStoryGrid;
