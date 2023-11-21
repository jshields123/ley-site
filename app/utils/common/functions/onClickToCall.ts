export const onClickToCall = () => {
  window.open(`tel:${process.env.NEXT_PUBLIC_LAURENS_PHONE_NUMBER}`);
};
