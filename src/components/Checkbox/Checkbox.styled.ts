import styled from "styled-components";

export const CheckboxContainer = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  width: max-content;
  background: ${({ checked, theme }) =>
    checked ? theme.Checkbox.Activo.Fondo : theme.Checkbox.Inactivo.Fondo};
  color: ${({ checked, theme }) =>
    checked ? theme.Checkbox.Activo.Texto : theme.Checkbox.Inactivo.Texto};

  cursor: pointer;
`;

export const Label = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked, theme }) =>
    checked ? theme.Checkbox.Activo.Icon : theme.Checkbox.Inactivo.Icon};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

export const LayoutCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;
