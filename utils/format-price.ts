export default function formatPrice(price: number) {
  const priceString = price.toString();
  const priceArray = priceString.split("");
  let formattedPrice = "";
  let count = 0;

  for (let i = priceArray.length - 1; i >= 0; i--) {
    formattedPrice = priceArray[i] + formattedPrice;
    count++;

    if (count % 3 === 0 && i !== 0) {
      formattedPrice = " " + formattedPrice;
    }
  }

  return formattedPrice;
}
