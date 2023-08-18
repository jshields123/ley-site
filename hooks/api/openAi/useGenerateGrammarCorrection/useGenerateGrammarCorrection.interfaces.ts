import { IOnCompleted } from '@/interfaces';

export interface IHandleUseGenerateGrammarCorrectionQueryVariables {
  max_tokens?: string;
  text: string;
}

export interface IUseGenerateGrammarCorrectionParams extends IHandleUseGenerateGrammarCorrectionQueryVariables {}

export interface IUseGenerateGrammarCorrection {
  handleUseGenerateGrammarCorrection: (params: IHandleUseGenerateGrammarCorrectionQueryVariables) => Promise<void>;
  isLoading: boolean;
}

export interface UseGenerateGrammarCorrectionsResponse {
  data?: string;
}

export interface IUseGenerateGrammarCorrectionOptions extends IOnCompleted<UseGenerateGrammarCorrectionsResponse> {}
