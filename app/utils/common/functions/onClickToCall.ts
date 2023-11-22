export const onClickToCall = () => {
  window.location.href = `tel:${process.env.NEXT_PUBLIC_LAURENS_PHONE_NUMBER}`;
};
