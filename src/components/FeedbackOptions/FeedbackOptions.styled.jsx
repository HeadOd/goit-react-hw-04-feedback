import styled from "@emotion/styled";

export const Btn = styled.button`
  margin: 10px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;

  color: ${p => p.theme.colors.secondTextColor};
  background-color: ${p => p.theme.colors.colorBtn};

  transition: background-color 300ms linear, transform 300ms ease-in-out;

  :hover, :focus {
    background-color:${p => p.theme.colors.tomato};
    transform: scale(1.3);
  }
`;