import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Monitor,
  Shield,
  Activity,
  CreditCard,
  KeyRound,
  Save,
  Eye,
  EyeOff,
  Check,
  ChevronRight,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const PROFILE_IMAGE =
  "https://res.cloudinary.com/owilpwin/image/upload/f_auto,q_auto/profile";

const tabs = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "application",
    label: "Application",
    icon: Monitor,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
  {
    id: "activity",
    label: "Activity",
    icon: Activity,
  },
  {
    id: "payment",
    label: "Payment Method",
    icon: CreditCard,
  },
  {
    id: "api",
    label: "API",
    icon: KeyRound,
  },
];

export default function Settings() {
  const { darkMode } = useTheme();

  const [activeTab, setActiveTab] = useState("profile");

  const [name, setName] = useState("John Smith");
  const [username, setUsername] = useState("johnsmith");
  const [email, setEmail] = useState(
    "johnsmith@example.com"
  );
  const [phone, setPhone] = useState("+91 9876543210");

  const [notifications, setNotifications] =
    useState(true);

  const [emailAlerts, setEmailAlerts] =
    useState(true);

  const [twoFactor, setTwoFactor] =
    useState(true);

  const [showPassword, setShowPassword] =
    useState(false);

  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const saveProfile = () => {
    showToast("Profile settings saved successfully.");
  };

  const saveApplication = () => {
    showToast("Application settings saved.");
  };

  const saveSecurity = () => {
    showToast("Security settings updated.");
  };

  const savePayment = () => {
    showToast("Payment method saved.");
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
            TOAST
        ================================================= */}

        {toast && (
          <div
            className="
              fixed
              right-4
              top-[90px]
              z-[10000]
              flex
              max-w-[calc(100vw-32px)]
              items-center
              gap-2
              rounded-xl
              bg-[#7350ff]
              px-4
              py-3
              text-xs
              font-medium
              text-white
              shadow-2xl
              sm:right-6
            "
          >
            <Check size={15} />
            <span>{toast}</span>
          </div>
        )}

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold sm:text-[22px]">
              Settings
            </h1>

            <p className="mt-1 text-sm text-[var(--secondary)]">
              Welcome Settings Page
            </p>
          </div>

          {/* Breadcrumb */}
          <div className="hidden items-center text-sm sm:flex">
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
              Settings
            </span>
          </div>
        </div>

        {/* =================================================
            SETTINGS TABS
        ================================================= */}

        <div
          className="
            mb-7
            overflow-x-auto
            rounded-[14px]
            border
            border-[var(--border)]
            bg-[var(--card)]
          "
        >
          <div className="flex min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex
                    items-center
                    gap-2
                    border-b-2
                    px-4
                    py-4
                    text-xs
                    font-medium
                    transition
                    sm:px-5
                    ${
                      active
                        ? "border-[#7350ff] text-[var(--text)]"
                        : "border-transparent text-[var(--secondary)] hover:text-[var(--text)]"
                    }
                  `}
                >
                  <Icon size={14} />

                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            PROFILE
        ================================================= */}

        {activeTab === "profile" && (
          <div className="space-y-6">

            {/* User Profile */}

            <div className="theme-card rounded-[15px] border p-5 sm:p-6">
              <div className="mb-6">
                <h2 className="text-base font-semibold">
                  User Profile
                </h2>

                <p className="mt-1 text-xs text-[var(--secondary)]">
                  Manage your profile information
                </p>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <img
                  src={PROFILE_IMAGE}
                  alt="Profile"
                  className="
                    h-[80px]
                    w-[80px]
                    shrink-0
                    rounded-full
                    object-cover
                    ring-2
                    ring-[var(--border)]
                  "
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold">
                    {name}
                  </h3>

                  <p className="mt-1 text-xs text-[var(--secondary)]">
                    {email}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      showToast(
                        "Profile image update opened."
                      )
                    }
                    className="
                      mt-3
                      rounded-lg
                      border
                      border-[var(--border)]
                      bg-[var(--input)]
                      px-4
                      py-2
                      text-[10px]
                      text-[var(--secondary)]
                      transition
                      hover:text-[var(--text)]
                    "
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            </div>

            {/* Update Profile */}

            <div className="theme-card rounded-[15px] border p-5 sm:p-6">
              <div className="mb-6">
                <h2 className="text-base font-semibold">
                  Update Profile
                </h2>

                <p className="mt-1 text-xs text-[var(--secondary)]">
                  Update your personal details
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <InputField
                  label="Full Name"
                  value={name}
                  onChange={setName}
                />

                <InputField
                  label="Username"
                  value={username}
                  onChange={setUsername}
                />

                <InputField
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={setEmail}
                />

                <InputField
                  label="Phone Number"
                  value={phone}
                  onChange={setPhone}
                />

              </div>

              <button
                type="button"
                onClick={saveProfile}
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#7350ff]
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-white
                  transition
                  hover:bg-[#6340e8]
                  active:scale-95
                "
              >
                <Save size={14} />
                Save Changes
              </button>
            </div>

            {/* Personal Information */}

            <div className="theme-card rounded-[15px] border p-5 sm:p-6">
              <div className="mb-6">
                <h2 className="text-base font-semibold">
                  Personal Information
                </h2>

                <p className="mt-1 text-xs text-[var(--secondary)]">
                  Your personal account information
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <InfoField
                  label="First Name"
                  value="John"
                />

                <InfoField
                  label="Last Name"
                  value="Smith"
                />

                <InfoField
                  label="Country"
                  value="India"
                />

                <InfoField
                  label="City"
                  value="Hyderabad"
                />
              </div>
            </div>
          </div>
        )}

        {/* =================================================
            APPLICATION
        ================================================= */}

        {activeTab === "application" && (
          <div className="theme-card rounded-[15px] border p-5 sm:p-6">
            <h2 className="text-base font-semibold">
              Application Settings
            </h2>

            <p className="mt-1 text-xs text-[var(--secondary)]">
              Customize your marketplace experience.
            </p>

            <div className="mt-7 space-y-5">

              <ToggleRow
                title="Push Notifications"
                description="Receive marketplace notifications."
                enabled={notifications}
                onChange={() =>
                  setNotifications((value) => !value)
                }
              />

              <ToggleRow
                title="Email Alerts"
                description="Receive important updates by email."
                enabled={emailAlerts}
                onChange={() =>
                  setEmailAlerts((value) => !value)
                }
              />

              <ToggleRow
                title="Dark Mode"
                description={
                  darkMode
                    ? "Dark mode is currently enabled from the header."
                    : "Light mode is currently enabled from the header."
                }
                enabled={darkMode}
                disabled
              />

            </div>

            <button
              type="button"
              onClick={saveApplication}
              className="
                mt-7
                flex
                items-center
                gap-2
                rounded-lg
                bg-[#7350ff]
                px-5
                py-3
                text-xs
                font-medium
                text-white
                hover:bg-[#6340e8]
              "
            >
              <Save size={14} />
              Save Changes
            </button>
          </div>
        )}

        {/* =================================================
            SECURITY
        ================================================= */}

        {activeTab === "security" && (
          <div className="space-y-6">

            <div className="theme-card rounded-[15px] border p-5 sm:p-6">
              <h2 className="text-base font-semibold">
                Security
              </h2>

              <p className="mt-1 text-xs text-[var(--secondary)]">
                Protect your account and manage security
                settings.
              </p>

              {/* Current Password */}

              <div className="mt-7">
                <label className="mb-2 block text-xs text-[var(--secondary)]">
                  Current Password
                </label>

                <div className="relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter current password"
                    className="
                      theme-input
                      h-[46px]
                      w-full
                      rounded-lg
                      border
                      px-4
                      pr-12
                      text-xs
                      outline-none
                      focus:border-[#7350ff]
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (value) => !value
                      )
                    }
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-[var(--secondary)]
                      hover:text-[var(--text)]
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* New Password */}

              <div className="mt-5">
                <label className="mb-2 block text-xs text-[var(--secondary)]">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="
                    theme-input
                    h-[46px]
                    w-full
                    rounded-lg
                    border
                    px-4
                    text-xs
                    outline-none
                    focus:border-[#7350ff]
                  "
                />
              </div>

              <button
                type="button"
                onClick={saveSecurity}
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#7350ff]
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-white
                  hover:bg-[#6340e8]
                "
              >
                <Save size={14} />
                Update Password
              </button>
            </div>

            {/* 2FA */}

            <div className="theme-card rounded-[15px] border p-5 sm:p-6">
              <ToggleRow
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account."
                enabled={twoFactor}
                onChange={() =>
                  setTwoFactor((value) => !value)
                }
              />
            </div>
          </div>
        )}

        {/* =================================================
            ACTIVITY
        ================================================= */}

        {activeTab === "activity" && (
          <div className="theme-card rounded-[15px] border p-5 sm:p-6">
            <h2 className="text-base font-semibold">
              Recent Activity
            </h2>

            <p className="mt-1 text-xs text-[var(--secondary)]">
              Review recent activity on your account.
            </p>

            <div className="mt-6 space-y-3">

              <ActivityRow
                title="Profile Updated"
                time="Today, 10:30 AM"
              />

              <ActivityRow
                title="New NFT Saved"
                time="Yesterday, 06:42 PM"
              />

              <ActivityRow
                title="Bid Placed"
                time="Yesterday, 04:20 PM"
              />

              <ActivityRow
                title="Account Login"
                time="2 days ago"
              />

            </div>
          </div>
        )}

        {/* =================================================
            PAYMENT
        ================================================= */}

        {activeTab === "payment" && (
          <div className="theme-card rounded-[15px] border p-5 sm:p-6">
            <h2 className="text-base font-semibold">
              Payment Method
            </h2>

            <p className="mt-1 text-xs text-[var(--secondary)]">
              Manage your preferred payment method.
            </p>

            <div
              className="
                mt-7
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--input)]
                p-5
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#7350ff]/10
                  "
                >
                  <CreditCard
                    size={20}
                    className="text-[#7350ff]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">
                    Wallet
                  </p>

                  <p className="mt-1 truncate text-[10px] text-[var(--secondary)]">
                    0x82...7F92
                  </p>
                </div>

                <span
                  className="
                    ml-auto
                    rounded-full
                    bg-green-500/10
                    px-3
                    py-1
                    text-[9px]
                    text-green-500
                  "
                >
                  Connected
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={savePayment}
              className="
                mt-6
                flex
                items-center
                gap-2
                rounded-lg
                bg-[#7350ff]
                px-5
                py-3
                text-xs
                font-medium
                text-white
                hover:bg-[#6340e8]
              "
            >
              <Save size={14} />
              Save Payment Method
            </button>
          </div>
        )}

        {/* =================================================
            API
        ================================================= */}

        {activeTab === "api" && (
          <div className="theme-card rounded-[15px] border p-5 sm:p-6">
            <h2 className="text-base font-semibold">
              API Settings
            </h2>

            <p className="mt-1 text-xs text-[var(--secondary)]">
              Manage your API access.
            </p>

            <div className="mt-7">
              <label className="mb-2 block text-xs text-[var(--secondary)]">
                API Key
              </label>

              <input
                readOnly
                value="••••••••••••••••••••••••••••"
                className="
                  theme-input
                  h-[46px]
                  w-full
                  rounded-lg
                  border
                  px-4
                  text-xs
                  outline-none
                "
              />
            </div>

            <button
              type="button"
              onClick={() =>
                showToast("New API key generated.")
              }
              className="
                mt-5
                rounded-lg
                bg-[#7350ff]
                px-5
                py-3
                text-xs
                font-medium
                text-white
                hover:bg-[#6340e8]
              "
            >
              Generate New API Key
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 block text-xs text-[var(--secondary)]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          theme-input
          h-[45px]
          w-full
          rounded-lg
          border
          px-4
          text-xs
          outline-none
          focus:border-[#7350ff]
        "
      />
    </div>
  );
}

/* =========================================================
   INFO FIELD
========================================================= */

function InfoField({ label, value }) {
  return (
    <div>
      <label className="mb-2 block text-xs text-[var(--secondary)]">
        {label}
      </label>

      <div
        className="
          flex
          h-[45px]
          items-center
          rounded-lg
          border
          border-[var(--border)]
          bg-[var(--input)]
          px-4
          text-xs
          text-[var(--secondary)]
        "
      >
        {value}
      </div>
    </div>
  );
}

/* =========================================================
   TOGGLE
========================================================= */

function ToggleRow({
  title,
  description,
  enabled,
  onChange,
  disabled = false,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-5
        border-b
        border-[var(--border)]
        pb-5
        last:border-0
        last:pb-0
      "
    >
      <div className="min-w-0">
        <h3 className="text-sm font-medium">
          {title}
        </h3>

        <p className="mt-1 text-[10px] text-[var(--secondary)]">
          {description}
        </p>
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={onChange}
        className={`
          relative
          h-6
          w-11
          shrink-0
          rounded-full
          transition
          ${
            enabled
              ? "bg-[#7350ff]"
              : "bg-gray-300 dark:bg-white/10"
          }
          ${
            disabled
              ? "cursor-not-allowed opacity-70"
              : ""
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-4
            w-4
            rounded-full
            bg-white
            shadow
            transition
            ${
              enabled
                ? "left-6"
                : "left-1"
            }
          `}
        />
      </button>
    </div>
  );
}

/* =========================================================
   ACTIVITY ROW
========================================================= */

function ActivityRow({
  title,
  time,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        rounded-lg
        border
        border-[var(--border)]
        bg-[var(--input)]
        px-4
        py-4
      "
    >
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 shrink-0 rounded-full bg-[#7350ff]" />

        <span className="text-xs text-[var(--text)]">
          {title}
        </span>
      </div>

      <span className="shrink-0 text-[10px] text-[var(--secondary)]">
        {time}
      </span>
    </div>
  );
}