import { useState } from 'react';

import {
  IUseGenerateCodeTranslation,
  IUseGenerateCodeTranslationParams,
  IHandleUseGenerateCodeTranslationQueryVariables,
  IUseGenerateCodeTranslationOptions,
} from './useGenerateCodeTranslation.interfaces';

const useGenerateCodeTranslation = (options?: IUseGenerateCodeTranslationOptions): IUseGenerateCodeTranslation => {
  const { onCompleted } = options ?? {};

  const [isLoading, setIsLoading] = useState(true);

  const fetchGenerateCodeTranslation = async ({
    code,
    currentLanguage,
    destinationLanguage,
    max_tokens,
  }: IUseGenerateCodeTranslationParams) => {
    try {
      const response = await fetch('/api/generate-code-translate', {
        method: 'POST',
        body: JSON.stringify({ code, currentLanguage, destinationLanguage, max_tokens }),
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

  const handleUseGenerateCodeTranslation = async ({
    code,
    currentLanguage,
    destinationLanguage,
    max_tokens,
  }: IHandleUseGenerateCodeTranslationQueryVariables) => {
    await fetchGenerateCodeTranslation({ code, currentLanguage, destinationLanguage, max_tokens });
  };

  return {
    isLoading,
    handleUseGenerateCodeTranslation,
  };
};

export { useGenerateCodeTranslation };
