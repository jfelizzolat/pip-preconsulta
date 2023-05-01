import { useState } from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Label,
} from "./Checkbox.styled";

type IProps = {
  etiqueta: string;
};

const Checkbox = ({ etiqueta }: IProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxContainer onClick={() => setChecked(!checked)} checked={checked}>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Label>{etiqueta}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
