import { IOnCompleted } from '@/interfaces';

export interface IHandleUseGenerateImageQueryVariables {
  imageDescription: string;
}

export interface IUseGenerateImageParams extends IHandleUseGenerateImageQueryVariables {}

export interface IUseGenerateImage {
  handleUseGenerateImage: (params: IHandleUseGenerateImageQueryVariables) => Promise<void>;
  isLoading: boolean;
}

export interface UseGenerateImagesResponse {
  url?: string;
}

export interface IUseGenerateImageOptions extends IOnCompleted<UseGenerateImagesResponse> {}
