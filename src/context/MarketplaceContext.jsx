import { createContext, useContext, useState } from "react";

const MarketplaceContext = createContext(null);

export function MarketplaceProvider({ children }) {
  const [savedItems, setSavedItems] = useState([1, 2, 3, 4]);

  const [activeBids, setActiveBids] = useState([
    {
      id: 1,
      name: "Cute Cube Cool",
      artist: "John Abraham",
      openPrice: "0.0025 ETH",
      yourOffer: "0.0025 ETH",
      recentOffer: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s",
    },
    {
      id: 2,
      name: "Liquid Wave",
      artist: "John Abraham",
      openPrice: "0.0025 ETH",
      yourOffer: "0.0025 ETH",
      recentOffer: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s",
    },
    {
      id: 3,
      name: "Cute Cube Cool",
      artist: "John Abraham",
      openPrice: "0.0025 ETH",
      yourOffer: "0.0025 ETH",
      recentOffer: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s",
    },
    {
      id: 4,
      name: "Liquid Wave",
      artist: "John Abraham",
      openPrice: "0.0025 ETH",
      yourOffer: "0.0025 ETH",
      recentOffer: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s",
    },
    {
      id: 5,
      name: "Liquid Wave",
      artist: "John Abraham",
      openPrice: "0.0025 ETH",
      yourOffer: "0.0025 ETH",
      recentOffer: "0.0025 ETH",
      timeLeft: "2 Hours 1 min 30s",
    },
  ]);

  const [following, setFollowing] = useState([
    "Papaya-1",
    "Papaya-2",
    "Papaya-3",
    "Papaya-4",
  ]);

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({
      id: Date.now(),
      message,
      type,
    });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const toggleSaved = (id) => {
    setSavedItems((current) => {
      if (current.includes(id)) {
        showToast("Removed from Saved Items");
        return current.filter((itemId) => itemId !== id);
      }

      showToast("Added to Saved Items");
      return [...current, id];
    });
  };

  const removeBid = (id) => {
    setActiveBids((current) =>
      current.filter((bid) => bid.id !== id)
    );

    showToast("Bid removed");
  };

  const toggleFollow = (id) => {
    setFollowing((current) => {
      if (current.includes(id)) {
        showToast("Unfollowed successfully");
        return current.filter((item) => item !== id);
      }

      showToast("Following successfully");
      return [...current, id];
    });
  };

  const placeBid = (nftName, amount) => {
    showToast(`Bid placed on ${nftName} for ${amount} ETH`);
  };

  const saveProfile = () => {
    showToast("Profile updated successfully");
  };

  return (
    <MarketplaceContext.Provider
      value={{
        savedItems,
        activeBids,
        following,
        toast,
        showToast,
        toggleSaved,
        removeBid,
        toggleFollow,
        placeBid,
        saveProfile,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);

  if (!context) {
    throw new Error(
      "useMarketplace must be used inside MarketplaceProvider"
    );
  }

  return context;
}