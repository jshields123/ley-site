import { IOnCompleted } from '@/interfaces';

export interface IHandleUseGeneratedArticleQueryVariables {
  articlePrompt: string;
  max_tokens?: string;
}

export interface IUseGeneratedArticleParams extends IHandleUseGeneratedArticleQueryVariables {}

export interface IUseGeneratedArticle {
  handleFetchArticle: (params: IHandleUseGeneratedArticleQueryVariables) => Promise<void>;
  isLoading: boolean;
}

export interface UseGeneratedArticlesResponse {
  data?: string;
}

export interface IUseGeneratedArticleOptions extends IOnCompleted<UseGeneratedArticlesResponse> {}
