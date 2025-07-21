import React from "react"
import { navbarData } from "~/modules/common/data/headerData"

export function BrandLogo({ className }: { className?: string }) {
  const { src, alt, className: defaultClass, height } = navbarData.logo

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      className={`${defaultClass} ${className ?? ""}`}
    />
  )
}