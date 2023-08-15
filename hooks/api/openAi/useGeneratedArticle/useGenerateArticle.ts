import { useState } from 'react';

import {
  IUseGeneratedArticle,
  IUseGeneratedArticleParams,
  IHandleUseGeneratedArticleQueryVariables,
  IUseGeneratedArticleOptions,
} from './useGeneratedArticle.interfaces';

const useFetchGeneratedArticle = (options?: IUseGeneratedArticleOptions): IUseGeneratedArticle => {
  const { onCompleted } = options ?? {};

  const [isLoading, setIsLoading] = useState(true);

  const fetchGeneratedArticle = async ({ articlePrompt, max_tokens }: IUseGeneratedArticleParams) => {
    try {
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        body: JSON.stringify({ articlePrompt, max_tokens }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${String(response)}`);
      }

      if (!onCompleted) {
        return;
      }

      setIsLoading(false);

      onCompleted({ data });
    } catch (error) {
      setIsLoading(false);
      throw new Error('Something went wrong');
    }
  };

  const handleFetchArticle = async ({ articlePrompt, max_tokens }: IHandleUseGeneratedArticleQueryVariables) => {
    await fetchGeneratedArticle({ articlePrompt, max_tokens });
  };

  return {
    isLoading,
    handleFetchArticle,
  };
};

export { useFetchGeneratedArticle };
