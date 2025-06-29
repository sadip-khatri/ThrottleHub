export const formatPrice = (price: number, currencyCode: string) => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return `${price.toFixed(2)} ${currencyCode}`;
  }
};
