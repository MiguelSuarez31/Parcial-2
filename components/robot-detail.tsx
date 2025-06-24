"use client"

import type { Robot } from "@/lib/types"
import type { Translations } from "@/lib/translations"
import { X } from "lucide-react"
import Image from "next/image"

interface RobotDetailProps {
  robot: Robot
  translations: Translations
  onClose: () => void
}

export default function RobotDetail({ robot, translations, onClose }: RobotDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow border-2 border-black">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">{translations.robotDetail}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 lg:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-6">
        {/* Robot Image */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{robot.nombre}</h3>
          <p className="text-lg text-gray-600">{robot.modelo}</p>
          <div className="relative w-48 h-48 mx-auto mb-4">
            <Image
              src={robot.imagen || "/placeholder.svg"}
              alt={robot.nombre}
              fill
              className="object-cover rounded-lg"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        {/* Robot Details */}
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              {translations.manufacturingYear}
            </h4>
            <p className="text-lg text-gray-900">{robot.añoFabricacion}</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              {translations.processingCapacity}
            </h4>
            <p className="text-lg text-gray-900">{robot.capacidadProcesamiento}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              {translations.additionalFeatures}
            </h4>
            <p className="text-gray-900 leading-relaxed">{robot.humor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
