import styled from 'styled-components';

const UITextField = styled.input.attrs({
  className: "flex items-center bg-white box-border text-2xl px-6 w-full focus:outline-none focus:shadow-outline rounded-lg font-light placeholder-brand-gray-dark placeholder-opacity-100 focus:placeholder-brand-gray"
})`
  height: 4.5rem;
  border: 1px solid #CCCCCC;
`;

export default UITextField;
