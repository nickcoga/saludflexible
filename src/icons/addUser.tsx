import type { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const IconAddUser: FC<Props> = ({
  className = "",
  width = 32,
  height = 32,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
    viewBox="0 0 36 36"
  >
    <path
      fill="url(#addUserGradientA)"
      d="M28.819 7.216 16.956 1.285a2.153 2.153 0 0 0-1.912 0L3.18 7.216a2.145 2.145 0 0 0-1.14 2.331l1.661 8.304a13.991 13.991 0 0 0 5.423 8.524l5.61 4.144a2.125 2.125 0 0 0 2.54 0l.709-.524c-.472-.473-.886-1-1.234-1.57l-.663.489a.135.135 0 0 1-.162 0l-5.61-4.144c-.45-.332-.876-.695-1.276-1.086a7.067 7.067 0 0 1 3.553-5.027L14 17.875a5 5 0 0 0 7-4.584V11.71a5 5 0 0 0-10 0v1.582a4.98 4.98 0 0 0 1.23 3.279l-.605.336a9.068 9.068 0 0 0-4.154 4.887A12 12 0 0 1 5.67 17.46l-1.67-8.305a.14.14 0 0 1 .075-.15l11.862-5.931a.144.144 0 0 1 .125 0L27.924 9a.14.14 0 0 1 .073.15l-1.353 6.765a8.397 8.397 0 0 1 1.865.875l1.45-7.25a2.146 2.146 0 0 0-1.14-2.324Zm-15.82 4.493a3 3 0 0 1 6 0v1.582a3 3 0 1 1-6 0V11.71Z"
    />
    <path
      fill="url(#addUserGradientB)"
      d="M28.95 19.05a7 7 0 1 0-9.899 9.9 7 7 0 0 0 9.899-9.9ZM28 25h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"
    />
    <defs>
      <linearGradient
        id="addUserGradientA"
        x1={2}
        x2={18.712}
        y1={1.061}
        y2={36.293}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.272} stopColor="#34263B" />
        <stop offset={0.658} stopColor="#13172C" />
      </linearGradient>
      <linearGradient
        id="addUserGradientB"
        x1={17.367}
        x2={28.902}
        y1={18.099}
        y2={29.634}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.35} stopColor="#F7052D" />
        <stop offset={0.85} stopColor="#CA5AFA" />
      </linearGradient>
    </defs>
  </svg>
);

export default IconAddUser;
