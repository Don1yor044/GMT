import styled from "@emotion/styled";
import { IconType } from "react-icons";

export const PrimaryButton = ({
  text,
  size,
}: {
  text: string;
  size?: number;
}) => {
  return <StyledPrimaryButton size={size}>{text}</StyledPrimaryButton>;
};
export const TertiaryButton = ({
  text,
  size,
}: {
  text: string;
  size?: number;
}) => {
  return <StyledTertiaryButton size={size}>{text}</StyledTertiaryButton>;
};
export const SecondaryButton = ({
  text,
  size,
}: {
  text: string;
  size?: number;
}) => {
  return <StyledSecondaryButton size={size}>{text}</StyledSecondaryButton>; // Pass size explicitly
};
export const QuaternaryButton = ({
  text,
  size,
}: {
  text: string;
  size?: number;
}) => {
  return <StyledQuaternaryButton size={size}>{text}</StyledQuaternaryButton>;
};

export const LeftButton = ({
  icon: Icon,
  size,
}: {
  icon: IconType;
  size?: number;
}) => {
  return <StyledLeftButton>{<Icon size={size} />}</StyledLeftButton>;
};

const StyledPrimaryButton = styled.button<{ size?: number }>`
  background-color: #088269;
  padding: 8px 20px;
  border-radius: 50px;
  width: ${(props) => (props.size ? `${props.size}px` : "auto")};
  cursor: pointer;
  font-weight: 500;
  color: white;
  &:hover {
    background-color: #07745e;
  }
  &:focus {
    background-color: #088269;
  }

  &:active {
    background-color: #07745e;
  }
`;
const StyledTertiaryButton = styled.button<{ size?: number }>`
  background-color: inherit;
  padding: 8px 20px;
  border-radius: 50px;
  width: ${(props) => (props.size ? `${props.size}px` : "auto")};
  border: 1px solid #d5d1e1;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    border: 1px solid #07745e;
  }
  &:active {
    border: 1px solid #07745e;
  }
`;
const StyledSecondaryButton = styled.button<{ size?: number }>`
  background-color: inherit;
  padding: 8px 20px;
  width: ${(props) => (props.size ? `${props.size}px` : "auto")};
  border-radius: 50px;
  border: 1px solid #d5d1e1;
  color: #088269 !important;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border: 1px solid #07745e;
  }
  &:active {
    border: 1px solid #07745e;
  }
`;
const StyledQuaternaryButton = styled.button<{ size?: number }>`
  background-color: inherit;
  padding: 8px 70px;
  border-radius: 50px;
  border: 1px solid #d5d1e1;
  width: ${(props) => (props.size ? `${props.size}px` : "auto")};
  color: #088269 !important;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #07745e;
    color: white !important;
  }
  &:active {
    background-color: #066753;
    color: white !important;
  }
`;
const StyledLeftButton = styled.button`
  background-color: inherit;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid #d5d1e1;
  cursor: pointer;
  &:hover {
    border: 1px solid #07745e;
  }
  &:active {
    border: 1px solid #056552;
  }
`;
