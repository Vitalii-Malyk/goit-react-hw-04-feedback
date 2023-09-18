import styled from 'styled-components';

export const ButtonElementStyle = styled('button')(() => {
  return {
    appearance: 'none',
    border: '0',
    borderRadius: '10px',
    background: '#39d8b2',
    color: 'darkslategray',
    width: '135px',
    height: '44px',
    fontSize: '24px',
    cursor: 'pointer',
  };
});

export const WrapElementStyle = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  };
});
