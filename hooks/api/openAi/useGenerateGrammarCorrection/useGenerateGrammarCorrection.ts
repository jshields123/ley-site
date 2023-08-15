import { useState } from 'react';

import {
  IUseGenerateGrammarCorrection,
  IUseGenerateGrammarCorrectionParams,
  IHandleUseGenerateGrammarCorrectionQueryVariables,
  IUseGenerateGrammarCorrectionOptions,
} from './useGenerateGrammarCorrection.interfaces';

const useGenerateGrammarCorrection = (options?: IUseGenerateGrammarCorrectionOptions): IUseGenerateGrammarCorrection => {
  const { onCompleted } = options ?? {};

  const [isLoading, setIsLoading] = useState(true);

  const fetchGenerateGrammarCorrection = async ({ text }: IUseGenerateGrammarCorrectionParams) => {
    try {
      const response = await fetch('/api/generate-grammar-correction', {
        method: 'POST',
        body: JSON.stringify({ text }),
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

  const handleUseGenerateGrammarCorrection = async ({ text }: IHandleUseGenerateGrammarCorrectionQueryVariables) => {
    await fetchGenerateGrammarCorrection({ text });
  };

  return {
    isLoading,
    handleUseGenerateGrammarCorrection,
  };
};

export { useGenerateGrammarCorrection };
