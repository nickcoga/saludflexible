import type { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}
const IconChevronRight: FC<Props> = ({
  className = "",
  width = 6,
  height = 10,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.253.239a.856.856 0 0 1 1.186 0l4.308 4.166a.825.825 0 0 1 0 1.19L1.439 9.76a.856.856 0 0 1-1.186 0 .825.825 0 0 1 0-1.189L3.946 5 .253 1.428a.825.825 0 0 1 0-1.19Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IconChevronRight;
