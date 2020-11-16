import styled from 'styled-components';

const UISelectField = styled.select.attrs({
  className: "block appearance-none w-full bg-white border border-brand-gray box-border text-2xl px-6 rounded focus:outline-none focus:shadow-outline rounded-lg font-light placeholder-brand-gray-dark placeholder-opacity-100 focus:placeholder-brand-gray"
})`
  height: 4.5rem;
`;

export default UISelectField;
