import React from "react";
import { clsx } from "clsx";

import styles from "./icon.module.scss";

interface IIconProps extends React.SVGProps<SVGSVGElement> {
   name: string;
   prefix?: string;
   color?: string;
   className?: string;
}

export const Icon = ({
   name,
   prefix = "icon",
   color = "currentColor",
   className,
   ...props
}: IIconProps) => {
   const symbolId = `#${prefix}-${name}`;

   return (
      <svg
         className={clsx(styles.icon, className)}
         {...props}
         aria-hidden="true"
      >
         <use href={symbolId} fill={color} />
      </svg>
   );
};
