export function formatPrice(value, currency = "ETH") {
  if (value === null || value === undefined || value === "") {
    return `0 ${currency}`;
  }

  const numericValue =
    typeof value === "number"
      ? value
      : Number.parseFloat(String(value).replace(/[^0-9.-]/g, ""));

  if (Number.isNaN(numericValue)) {
    return `${value} ${currency}`;
  }

  return `${numericValue.toLocaleString("en-US", {
    maximumFractionDigits: 4,
  })} ${currency}`;
}

export function formatEth(value) {
  return formatPrice(value, "ETH");
}

export default formatPrice;