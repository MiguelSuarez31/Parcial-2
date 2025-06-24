"use client"

import Image from "next/image"

export default function RobotsBanner() {
  return (
    <div className="bg-white py-8 mb-6">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-48 md:h-64">
          <Image
            src="/images/robots-banner.png"
            alt="Variedad de robots disponibles para adopción"
            fill
            className="object-contain"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </div>
  )
}
