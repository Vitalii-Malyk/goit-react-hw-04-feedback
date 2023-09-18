import styled from 'styled-components';

export const ListElementStyle = styled('ul')(() => {
  return {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});
