import React from 'react';
import styled from 'styled-components';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const SearchAndMenu = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24}/>
      </button>
      <button>
        <Menu size={24}/>
      </button>
    </ActionGroup>
  )
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <SearchAndMenu/>

          <ActionGroup>
            <button>
              <User size={24}/>
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>

        <MainHeaderLeft>
          <SearchAndMenu/>
        </MainHeaderLeft>

        <Logo/>

        <MainHeaderRight>
          <Button>Subscribe</Button>
          <AlreadySubscribed>Already a subscriber?</AlreadySubscribed>
        </MainHeaderRight>

      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
      display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */

    svg {
        display: block;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
    
    @media ${QUERIES.tabletAndUp} {
        margin-top: 48px;
        margin-bottom: 72px;
    }
    
    @media ${QUERIES.laptopAndUp} {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        justify-content: revert;
        margin-top: 16px;
        margin-bottom: 72px;
    }
`;

const MainHeaderLeft = styled.div`
    display: none;

    @media ${QUERIES.laptopAndUp} {
        display: flex;
    }
`;

const MainHeaderRight = styled.div`
    display: none;

    @media ${QUERIES.laptopAndUp} {
        justify-self: end;
        align-self: end;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`
const AlreadySubscribed = styled.a`
    font-size: 0.875rem;
    font-family: var(--font-family-serif);
    font-style: italic;
    text-decoration: underline;
    font-weight: var(--font-weight-normal);
    color: var(--color-gray-900);
`

export default Header;
