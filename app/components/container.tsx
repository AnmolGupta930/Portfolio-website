import React, { ReactNode } from "react";
import cn from "../lib/utils/cn";

function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto flex max-w-4xl flex-col", className)}>
      {children}
    </div>
  );
}

export default Container;
