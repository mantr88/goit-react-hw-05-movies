import styled from 'styled-components';

export const CastWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  text-align: center;
  text-decoration: none;
`;

export const CastItem = styled.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  list-style: none;
`;
