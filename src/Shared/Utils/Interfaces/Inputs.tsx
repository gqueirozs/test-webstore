import { TIcons } from "Shared/Utils/Interfaces/Icons";
import { ReactNode, ChangeEvent, MouseEvent } from "react";
import { MaskProps } from '@react-input/mask';

type IconAlign = 'Left' | 'Right';
type IconStyle = 'Transparent' | 'Box';
type InputSize = 'Full' | 'Medium' | 'Half' | 'Minimum';
interface ITextInput {
  holder?: boolean; 
  label?: string;
  type?: 'text' | 'email' | 'password' | 'date' | 'number';
  mask?: MaskProps;
  name: string;
  placeholder?: string;
  showMax?: boolean;
  max?: number;
  readonly?: boolean; 
  value?: string;
  iconAlign?: IconAlign;
  iconStyle?: IconStyle;
  icon?: TIcons;
  size?: InputSize;
  className?: string;
  customName?: string;
  error?: string;
  maxRows?: number;
  required?: boolean,
  children?: ReactNode;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  rightAdditional?: string;
  leftAdditional?: string;
  disabled?: boolean;
}


type CheckboxStyle = 'Default' | 'Switch';
type CheckboxAlign = 'Flex_Row' | 'Flex_Row_Reverse' | 'Flex_Row Justify_Between' | 'Flex_Row_Reverse Justify_Between';
interface ICheckInput {
  label: string;
  name: string;
  value?: string;
  required?: boolean;
  readonly?: boolean;
  defaultChecked?: boolean;
  style?: CheckboxStyle;
  align?: CheckboxAlign;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}

interface IRangeInput {
  label: string;
  name: string;
  min: number;
  max: number;
  value?: number;
  range?: true;
  minDistance?: number;
  maxDistance?: number;
}

interface IDataOption {
  value: string;
  label?: string;
  action?: (value: IDataOption) => void;
  background?: string;
  selected?: boolean;
  color?: string;
  clear?: boolean;
}

interface IDataList extends Omit<ITextInput, "defaultAction"> {
  label?: string;
  name: string;
  options: Array<IDataOption>;
  defaultAction?: (value: IDataOption) => void;
  defaultOption?: number;
  defaultClear?: boolean;
  alwaysOpen?: boolean;
};

interface SelectPropsExtensions {
  defaultOption?: number | number[];
  defaultMaxOptions?: number;
  defaultEmpty?: boolean;
}

interface ISelectInput
  extends Omit<IDataList, "defaultOption">,
    SelectPropsExtensions {}

export type {
  ITextInput,
  ICheckInput,
  IRangeInput,
  IDataOption,
  IDataList,
  ISelectInput
}