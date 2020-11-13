import styled from "styled-components";

const StyledHeader = styled.header.attrs({
  className: "flex items-center p-10",
})`
  border-bottom: 1px solid #EEEEEE;
  font-size: 40px;
`;

const StyledLogo = styled.h1.attrs({
  className: "font-bold"
})`
  font-size: 2.5rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>Screen it</StyledLogo>
    </StyledHeader>
  );
}

export default Header;
