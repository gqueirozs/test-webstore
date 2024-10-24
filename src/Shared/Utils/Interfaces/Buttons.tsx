import ButtonObj from "Shared/Utils/Data/Button";
import { ReactNode } from 'react'

type JSONKeys<T extends object> = keyof T;
type TButton = JSONKeys<typeof ButtonObj>;

interface IButton {
  type: TButton;
  children?: ReactNode;
  className?: 'Flex_Row' | 'Flex_Row_Reverse'; 
  icon?: boolean;
  label?: boolean;
  onClick?: VoidFunction;
  disabled?: boolean;
}

export type {
  IButton,
  TButton
}