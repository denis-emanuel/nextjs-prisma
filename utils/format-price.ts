export default function formatPrice(
  price: number,
  decimalNumber: number = 0
): string {
  const priceString = price.toString();
  const [integerPart, decimalPart] = priceString.split(".");
  const priceArray = integerPart.split("");

  let formattedPrice = "";
  let count = 0;

  for (let i = priceArray.length - 1; i >= 0; i--) {
    formattedPrice = priceArray[i] + formattedPrice;
    count++;

    if (count % 3 === 0 && i !== 0) {
      formattedPrice = " " + formattedPrice;
    }
  }

  if (decimalNumber > 0) {
    formattedPrice += "." + (decimalPart ?? "0").slice(0, decimalNumber);
  }

  return formattedPrice;
}
