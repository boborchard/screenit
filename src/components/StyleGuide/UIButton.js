import styled from 'styled-components';

const UIButton = styled.button.attrs({
  className: "text-white box-border font-medium text-2xl text-center px-8 h-16 w-full rounded-lg bg-gradient-to-b from-brand-blue to-brand-blue-dark border border-brand-blue-dark mb-6 mr-4"
})`
  box-shadow: 0px 2px 4px rgba(97, 160, 255, 0.5), 0px 4px 8px rgba(97, 160, 255, 0.25);
`;

export default UIButton;
