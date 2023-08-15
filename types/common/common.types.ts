// TODO: Sort all types alphabetically

export type AutoCompleteType =
  | 'name'
  | 'honorific-prefix'
  | 'family-name'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'street-address'
  | 'country'
  | 'language'
  | 'bday'
  | 'sex'
  | 'tel'
  | 'url';

export type ButtonType = 'submit' | 'reset' | 'button';

export type ButtonVariantType = 'primary' | 'secondary';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextInputType = 'date' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

export type SizeType = 'small' | 'medium' | 'large' | 'x-large';

export type TabThemeType = 'left-align' | 'switch' | 'tag' | 'underline';

export type TokenType = 'bearer' | 'grant';
