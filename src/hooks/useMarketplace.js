import { useMarketplace as useMarketplaceContext } from "../context/MarketplaceContext";

export default function useMarketplace() {
  return useMarketplaceContext();
}