import { ChangeEvent, CSSProperties, ReactNode, SyntheticEvent } from 'react';

import { ButtonVariantType, HeadingType, SizeType } from '@/types';

export interface IAdditionalClassNames {
  /**
   * Specify additional class names that apply to the parent node
   */
  additionalClassNames?: string;
}

export interface IImage {
  /**
   * Provide meaningful text that will be displayed if the image is broken
   */
  altText: string;
  /**
   * Specify the src for the image to be displayed
   */
  src: string;
}

export interface IHeading {
  /**
   * Specify a heading level that will be displayed as the title
   */
  heading?: HeadingType;
}

export interface ILink {
  linkText: string;
  linkUrl: string;
}

export interface IColor {
  /**
   * Color for the item - is applied via inline style
   */
  color?: CSSProperties['color'];
}

export interface IErrorMessage {
  /**
   * The error message to display
   */
  errorMessage?: string;
}

export interface IForId {
  /**
   * The descriptive id to match the input for accessibility
   */
  forId: string;
}

export interface IIdentifier {
  /**
   * Unique id of an item
   */
  id: string;
}

export interface IIsLabelHidden {
  /**
   * Visually hides the label but keeps it for screen readers
   */
  isLabelHidden?: boolean;
}

export interface IIsReadOnly {
  /**
   * The boolean value deciding whether the textarea is read only
   */
  isReadOnly?: boolean;
}

export interface ILabelText {
  /**
   * The label text
   */
  labelText: string;
}

export interface IName {
  /**
   * The name of the HTML element
   */
  name: string;
}

export interface IOnClickButton {
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface IOnChangeInput {
  /**
   * Provide a function that will be triggered when the toggle switch changes
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPlaceholder {
  /**
   * The placeholder of an input
   */
  placeholder?: string;
}

export interface ISupportiveText {
  /**
   * Specify supportive text for screen readers
   */
  supportiveText: string;
}

export interface ITitle {
  /**
   * Specify a title that will be displayed on the page
   */
  title?: string;
}

export interface IEnumValues {
  enumValues: IKeyValuePair<string, string>[];
}

export interface IIsRequired {
  /**
   * Specify an optional boolean that decides weather the element is required
   */
  isRequired?: boolean;
}

export interface ILabelText {
  /**
   * Provide meaningful text that will be displayed as the label
   */
  labelText: string;
}

export interface ISubTitle {
  /**
   * Provide meaningful text that will be displayed as the sub title
   */
  subTitle: string;
}

export interface IReactChildren {
  /**
   * Provide children that will be displayed in the contents of your component
   */
  children?: ReactNode;
}

export interface ICoverLink {
  /**
   * Provide a link that will cover the element
   */
  coverLink: ReactNode;
}

export interface IIsDisabled {
  /**
   * Specify if the input element is disabled
   */
  isDisabled?: boolean;
}

export interface IOnClickButton {
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export interface IButtonVariant {
  /**
   * Specify the variant of button you would like to display
   */
  variant?: ButtonVariantType;
}

export interface ISupportiveText {
  /**
   * Specify supportive text for screen readers
   */
  supportiveText: string;
}

export interface IIsCompleted {
  isCompleted: boolean;
}

export interface IKeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

export interface IPrimaryKey<T> {
  id: T;
}

export interface ISort {
  sort: number;
}

export interface ITypeName<T> {
  __typename: T;
}

export interface IVisible {
  visible: boolean;
}

export interface ISize {
  /**
   * Specify a size that will determine the size of the element
   */
  size?: SizeType;
}

export interface IWidthHeight {
  height?: number;
  width?: number;
}

export interface IIsLoading {
  isLoading: boolean;
}

export interface IOnCompleted<T> {
  onCompleted?: (data: T) => void;
}

export interface IOnCompletedAsync<T> {
  onCompletedAsync?: (data: T) => Promise<void>;
}

export interface IOnError<T> {
  onError?: (error: T) => void;
}

export interface IOnErrorAsync<T> {
  onErrorAsync?: (error: T) => Promise<void>;
}
