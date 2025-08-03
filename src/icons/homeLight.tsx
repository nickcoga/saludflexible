import type { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const IconHomeLight: FC<Props> = ({
  className = "",
  width = 56,
  height = 56,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={className}
    fill="none"
  >
    <path
      fill="#F7052D"
      d="M54.25 35a7 7 0 1 0-8.75 6.781V52.5H49V41.781A7 7 0 0 0 54.25 35Z"
    />
    <path
      fill="#13172C"
      d="M42.875 49H35v-7a7 7 0 1 0-14 0v7H9.625V20.344h-.12l16.977-12a2.625 2.625 0 0 1 3.027 0l16.866 11.901v5.172a9.552 9.552 0 0 1 3.5.326v-3.028l4.375 3.098v-4.294L31.528 5.482a6.14 6.14 0 0 0-7.067 0L1.75 21.538v4.288l4.375-3.093V49a3.5 3.5 0 0 0 3.5 3.5h33.25V49ZM31.5 49h-7v-7a3.5 3.5 0 1 1 7 0v7Z"
    />
  </svg>
);

export default IconHomeLight;
