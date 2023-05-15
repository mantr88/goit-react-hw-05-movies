import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const WrapInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const WrapText = styled.div`
  margin-left: 40px;

  p {
    margin-bottom: 20px;
  }
`;

export const LinkInfoWrap = styled.div`
  margin-bottom: 30px;
`;

export const LinkInfo = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
