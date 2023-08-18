import { IOnCompleted } from '@/interfaces';

export interface IHandleUseGenerateCodeTranslationQueryVariables {
  code: string;
  currentLanguage: string;
  destinationLanguage: string;
  max_tokens?: string;
}

export interface IUseGenerateCodeTranslationParams extends IHandleUseGenerateCodeTranslationQueryVariables {}

export interface IUseGenerateCodeTranslation {
  handleUseGenerateCodeTranslation: (params: IHandleUseGenerateCodeTranslationQueryVariables) => Promise<void>;
  isLoading: boolean;
}

export interface UseGenerateCodeTranslationsResponse {
  data?: string;
}

export interface IUseGenerateCodeTranslationOptions extends IOnCompleted<UseGenerateCodeTranslationsResponse> {}
