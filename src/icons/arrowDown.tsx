import type { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}
const IconArrowDown: FC<Props> = ({
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
    <path
      fill="#03050F"
      d="M10 14.894 3.494 8.38 5.256 6.62 10 11.356l4.744-4.737 1.762 1.762L10 14.894Z"
    />
  </svg>
);
export default IconArrowDown;
