import type { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}
const IconChevronLeft: FC<Props> = ({
  className = "",
  width = 20,
  height = 20,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
  >
    <circle
      cx={10}
      cy={10}
      r={9}
      stroke="#4F4FFF"
      strokeWidth={2}
      transform="rotate(90 10 10)"
    />
    <path
      fill="#4F4FFF"
      d="m7.553 10 3.256-3.253.881.881L9.322 10l2.368 2.372-.88.881L7.552 10Z"
    />
  </svg>
);
export default IconChevronLeft;
