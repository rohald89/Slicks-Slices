import styled from 'styled-components';

const MenuItemStyles = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 100px 1.3rem 1fr;
  grid-template-columns: 100px 1fr;
  -ms-grid-rows: 1fr 0 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 1.3rem;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  .gatsby-image-wrapper {
    grid-row: span 2;
    height: 100%;
  }
  p {
    margin: 0;
  }
  button {
    width: 30%;
    font-size: 1.5rem;
  }
  button + button {
    margin-left: 0.4rem;
  }
  .remove {
    background: none;
    color: var(--red);
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    line-height: 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    button {
      font-size: 1.2rem;
    }
  }
`;

export default MenuItemStyles;
