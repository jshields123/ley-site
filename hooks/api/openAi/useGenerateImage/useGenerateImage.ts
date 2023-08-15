import { useState } from 'react';

import {
  IUseGenerateImage,
  IUseGenerateImageParams,
  IHandleUseGenerateImageQueryVariables,
  IUseGenerateImageOptions,
} from './useGenerateImage.interfaces';

const useGenerateImage = (options?: IUseGenerateImageOptions): IUseGenerateImage => {
  const { onCompleted } = options ?? {};

  const [isLoading, setIsLoading] = useState(true);

  const fetchGenerateImage = async ({ imageDescription }: IUseGenerateImageParams) => {
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        body: JSON.stringify({ imageDescription }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const url = await response.json();

      if (response.status !== 200) {
        throw url.error || new Error(`Request failed with status ${String(response)}`);
      }

      if (!onCompleted) {
        return;
      }

      setIsLoading(false);

      onCompleted({ url });
    } catch (error) {
      setIsLoading(false);
      throw new Error('Something went wrong');
    }
  };

  const handleUseGenerateImage = async ({ imageDescription }: IHandleUseGenerateImageQueryVariables) => {
    await fetchGenerateImage({ imageDescription });
  };

  return {
    isLoading,
    handleUseGenerateImage,
  };
};

export { useGenerateImage };
