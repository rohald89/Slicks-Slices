import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    gap: 2rem;
    align-content: start;
    div {
      margin-bottom: 1rem;
    }
    &.order,
    &.menu {
      grid-column: span 1;
    }
  }
  .mapleSyrup {
    display: none;
  }
    @media(max-width: 900px) {
        fieldset.menu, 
        fieldset.order {
            grid-column: span 2;
  }
`;

export default OrderStyles;
