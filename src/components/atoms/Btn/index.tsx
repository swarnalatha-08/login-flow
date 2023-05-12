import {
  Button as ChakraButton,
  ButtonProps
} from "@chakra-ui/react";
import * as React from "react";

export enum Size {
  xs = "xs",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum Variant {
  ghost = "ghost",
  outline = "outline",
  solid = "solid",
  link = "link",
  unstyled = "unstyled",
}

interface ButtonLayout extends ButtonProps {
  btnTxt?: string;
  className?: any;
}

export default function Button({ btnTxt,className,...rest }: ButtonLayout) {
  return <ChakraButton className={className} {...rest}>{btnTxt}</ChakraButton>;
}

Button.defaultProps = {};
