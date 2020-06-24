import styled from 'styled-components';

const formatValue = (value: number): string =>
  Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(value); // TODO

export default formatValue;
