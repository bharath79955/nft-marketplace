import { CheckCircle2, ExternalLink, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TopCreators({ creators = [] }) {
  const navigate = useNavigate();

  const defaultCreators = [
    {
      id: 1,
      name: "John Abraham",
      username: "@johnabraham",
      image: "/src/assets/images/creator.jpg",
      followers: "24.8K",
      artworks: "128",
      verified: true,
    },
    {
      id: 2,
      name: "John Abraham",
      username: "@johnabraham",
      image: "/src/assets/images/profile.jpg",
      followers: "18.2K",
      artworks: "96",
      verified: true,
    },
    {
      id: 3,
      name: "John Abraham",
      username: "@johnabraham",
      image: "/src/assets/images/creator.jpg",
      followers: "15.7K",
      artworks: "84",
      verified: true,
    },
    {
      id: 4,
      name: "John Abraham",
      username: "@johnabraham",
      image: "/src/assets/images/profile.jpg",
      followers: "12.4K",
      artworks: "72",
      verified: true,
    },
    {
      id: 5,
      name: "John Abraham",
      username: "@johnabraham",
      image: "/src/assets/images/creator.jpg",
      followers: "9.8K",
      artworks: "61",
      verified: true,
    },
  ];

  const items = creators.length ? creators : defaultCreators;

  const handleCreatorClick = (creator) => {
    navigate(`/profile?creator=${creator.id}`);
  };

  return (
    <section
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-4
        text-[var(--text)]
        sm:p-5
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-[#6C4DF6]/10
                text-[#6C4DF6]
              "
            >
              <Users size={17} />
            </div>

            <h2 className="text-sm font-semibold sm:text-base">
              Top Creators
            </h2>
          </div>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Popular creators this week
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/collections")}
          className="
            flex
            items-center
            gap-1
            rounded-lg
            px-2.5
            py-2
            text-xs
            font-medium
            text-[#6C4DF6]
            transition
            hover:bg-[#6C4DF6]/10
          "
        >
          View All
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Creators */}
      <div className="mt-5 space-y-1">
        {items.map((creator, index) => (
          <button
            key={creator.id || index}
            type="button"
            onClick={() => handleCreatorClick(creator)}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              p-2
              text-left
              transition
              hover:bg-[var(--card-hover)]
            "
          >
            {/* Rank */}
            <span
              className="
                w-5
                shrink-0
                text-center
                text-[11px]
                font-semibold
                text-[var(--text-muted)]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Avatar */}
            <img
              src={
                creator.image ||
                "/src/assets/images/creator.jpg"
              }
              alt={creator.name}
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

            {/* Name */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <h3 className="truncate text-xs font-semibold sm:text-sm">
                  {creator.name}
                </h3>

                {creator.verified && (
                  <CheckCircle2
                    size={13}
                    fill="#6C4DF6"
                    className="shrink-0 text-white"
                  />
                )}
              </div>

              <p className="mt-0.5 truncate text-[10px] text-[var(--text-muted)]">
                {creator.username}
              </p>
            </div>

            {/* Stats */}
            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold">
                {creator.followers}
              </p>

              <p className="mt-0.5 text-[9px] text-[var(--text-muted)]">
                Followers
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold">
                {creator.artworks}
              </p>

              <p className="mt-0.5 text-[9px] text-[var(--text-muted)]">
                Artworks
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default TopCreators;