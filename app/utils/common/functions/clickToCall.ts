export const onClickToCall = () => {
  window.open(`tel:${process.env.LAURENS_PHONE_NUMBER}`);
};
