import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  LockKeyhole,
  Heart,
  ChevronRight,
} from "lucide-react";
const CREATOR_IMAGE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/creator";
const NFT_IMAGE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/nft-1";
const followingUsers = [
  {
    id: 1,
    name: "Papaya",
    items: "60 Items",
  },
  {
    id: 2,
    name: "Papaya",
    items: "60 Items",
  },
  {
    id: 3,
    name: "Papaya",
    items: "60 Items",
  },
  {
    id: 4,
    name: "Papaya",
    items: "60 Items",
  },
];
const boughtItems = [
  {
    id: 1,
    name: "Liquid Wave",
  },
  {
    id: 2,
    name: "Liquid Wave",
  },
  {
    id: 3,
    name: "Liquid Wave",
  },
  {
    id: 4,
    name: "Liquid Wave",
  },
];
const collectionItems = [
  {
    id: 5,
    name: "Liquid Wave",
  },
  {
    id: 6,
    name: "Liquid Wave",
  },
  {
    id: 7,
    name: "Liquid Wave",
  },
  {
    id: 8,
    name: "Liquid Wave",
  },
];
/* =========================================================
   FOLLOWING CARD
========================================================= */
function FollowingCard({
  user,
  following,
  onToggle,
}) {
  return (
    <div
      className="
        flex
        min-h-[72px]
        items-center
        rounded-[15px]
        border
        border-[var(--border)]
        bg-[var(--card)]
        px-4
        transition
        hover:shadow-md
      "
    >
      {/* Avatar */}
      <img
        src={CREATOR_IMAGE}
        alt={user.name}
        className="
          h-10
          w-10
          shrink-0
          rounded-full
          object-cover
          ring-1
          ring-[var(--border)]
        "
      />
      {/* User */}
      <div className="ml-3 min-w-0">
        <h3 className="truncate text-sm font-semibold text-[var(--text)]">
          {user.name}
        </h3>
        <p className="mt-1 text-xs text-[var(--secondary)]">
          {user.items}
        </p>
      </div>
      {/* Follow */}
      <button
        type="button"
        onClick={() => onToggle(user.id)}
        className={`
          ml-auto
          h-7
          min-w-[86px]
          rounded-lg
          px-3
          text-[11px]
          font-semibold
          text-white
          transition
          active:scale-95
          ${
            following
              ? "bg-[#d84655] hover:bg-[#c83c4b]"
              : "bg-[#7350ff] hover:bg-[#6242e8]"
          }
        `}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}
/* =========================================================
   NFT CARD
========================================================= */
function NFTCard({ item }) {
  const [saved, setSaved] = useState(false);
  return (
    <div
      className="
        group
        overflow-visible
        rounded-[15px]
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        text-[var(--text)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative overflow-visible">
        <div className="overflow-hidden rounded-[14px]">
          <img
            src={NFT_IMAGE}
            alt={item.name}
            className="
              h-[164px]
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
        {/* Creator / favorite button */}
        <button
          type="button"
          onClick={() => setSaved((value) => !value)}
          title={
            saved
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-label={
            saved
              ? "Remove from favorites"
              : "Add to favorites"
          }
          className="
            absolute
            -bottom-[17px]
            right-2
            flex
            h-[38px]
            w-[38px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-[3px]
            border-[var(--card)]
            bg-[#f6d84a]
            transition
            hover:scale-105
            active:scale-90
          "
        >
          <img
            src={CREATOR_IMAGE}
            alt="Creator"
            className="h-full w-full rounded-full object-cover"
          />
          {saved && (
            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                rounded-full
                bg-[#7350ff]/80
              "
            >
              <Heart
                size={15}
                fill="white"
                className="text-white"
              />
            </span>
          )}
        </button>
      </div>
      {/* Title */}
      <div className="pt-5">
        <h3 className="truncate text-[15px] font-semibold text-[var(--text)]">
          {item.name}
        </h3>
        <p className="mt-1 text-[11px] text-[var(--secondary)]">
          Digital Artwork
        </p>
      </div>
    </div>
  );
}
/* =========================================================
   PROFILE PAGE
========================================================= */
export default function Profile() {
  const [following, setFollowing] = useState(
    followingUsers.map((user) => user.id)
  );
  const [verified, setVerified] = useState(false);
  /* Toggle follow */
  const toggleFollow = (id) => {
    setFollowing((current) => {
      if (current.includes(id)) {
        return current.filter(
          (item) => item !== id
        );
      }
      return [...current, id];
    });
  };
  return (
    <div
      className="
        min-h-screen
        bg-[var(--page)]
        px-4
        pb-20
        pt-[100px]
        text-[var(--text)]
        sm:px-6
        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-[1120px]">
        {/* =================================================
            PAGE HEADER
        ================================================= */}
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <h1
              className="
                text-xl
                font-bold
                tracking-tight
                sm:text-[22px]
              "
            >
              Profile
            </h1>
            <p className="mt-1 text-sm text-[var(--secondary)]">
              Welcome Profile Page
            </p>
          </div>
          {/* Breadcrumb */}
          <div className="hidden items-center text-sm md:flex">
            <Link
              to="/"
              className="
                text-[var(--secondary)]
                transition
                hover:text-[#7350ff]
              "
            >
              Home
            </Link>
            <ChevronRight
              size={15}
              className="mx-1 text-[var(--secondary)]"
            />
            <span className="text-[var(--text)]">
              Profile
            </span>
          </div>
        </div>
        {/* =================================================
            PROFILE + FOLLOWING
        ================================================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-[333px_minmax(0,1fr)]
          "
        >
          {/* =================================================
              VERIFICATION CARD
          ================================================= */}
          <div
            className="
              rounded-[15px]
              border
              border-[var(--border)]
              bg-[var(--card)]
              px-[18px]
              py-[17px]
            "
          >
            {/* Avatar */}
            <img
              src={CREATOR_IMAGE}
              alt="John Smith"
              className="
                h-[39px]
                w-[39px]
                rounded-full
                border-2
                border-[var(--border)]
                object-cover
              "
            />
            <h2 className="mt-3 text-base font-semibold">
              Welcome, John Smith
            </h2>
            <p
              className="
                mt-1
                max-w-[290px]
                text-xs
                leading-[18px]
                text-[var(--secondary)]
              "
            >
              Looks like you are not verified yet. Verify
              yourself to use the full potential of Xtrader.
            </p>
            {/* Verify */}
            <button
              type="button"
              onClick={() =>
                setVerified((value) => !value)
              }
              className="
                mt-5
                flex
                items-center
                gap-2.5
                text-xs
                text-[#7350ff]
              "
            >
              <span
                className={`
                  flex
                  h-[26px]
                  w-[26px]
                  items-center
                  justify-center
                  rounded-full
                  ${
                    verified
                      ? "bg-[#7350ff]"
                      : "bg-[#69be48]"
                  }
                `}
              >
                <Check
                  size={15}
                  strokeWidth={3}
                  className="text-white"
                />
              </span>
              <span>
                {verified
                  ? "Account verified"
                  : "Verify account"}
              </span>
            </button>
            {/* Divider */}
            <div className="my-3 h-px bg-[var(--border)]" />
            {/* 2FA */}
            <button
              type="button"
              onClick={() => {}}
              className="
                flex
                items-center
                gap-2.5
                text-xs
                text-[#7350ff]
              "
            >
              <span
                className="
                  flex
                  h-[26px]
                  w-[26px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7350ff]
                "
              >
                <LockKeyhole
                  size={14}
                  className="text-white"
                />
              </span>
              <span>
                Two-factor Authentication (2FA)
              </span>
            </button>
          </div>
          {/* =================================================
              FOLLOWING
          ================================================= */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold">
                Following
              </h2>
              <span className="text-xs text-[var(--secondary)]">
                {following.length} Following
              </span>
            </div>
            <div
              className="
                grid
                grid-cols-1
                gap-[18px]
                md:grid-cols-2
              "
            >
              {followingUsers.map((user) => (
                <FollowingCard
                  key={user.id}
                  user={user}
                  following={following.includes(
                    user.id
                  )}
                  onToggle={toggleFollow}
                />
              ))}
            </div>
          </div>
        </div>
        {/* =================================================
            MY BOUGHT
        ================================================= */}
        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-semibold">
              My bought
            </h2>
            <span className="text-xs text-[var(--secondary)]">
              {boughtItems.length} Items
            </span>
          </div>
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {boughtItems.map((item) => (
              <NFTCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>
        {/* =================================================
            MY COLLECTIONS
        ================================================= */}
        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-semibold">
              My Collections
            </h2>
            <span className="text-xs text-[var(--secondary)]">
              {collectionItems.length} Items
            </span>
          </div>
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {collectionItems.map((item) => (
              <NFTCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}