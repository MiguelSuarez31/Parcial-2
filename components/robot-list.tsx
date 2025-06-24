"use client"

import type { Robot } from "@/lib/types"
import type { Translations } from "@/lib/translations"

interface RobotListProps {
  robots: Robot[]
  onRobotSelect: (robot: Robot) => void
  selectedRobot: Robot | null
  translations: Translations
}

export default function RobotList({ robots, onRobotSelect, selectedRobot, translations }: RobotListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">{translations.robotList}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-600">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                {translations.name}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                {translations.model}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                {translations.company}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {robots.map((robot) => (
              <tr
                key={robot.id}
                onClick={() => onRobotSelect(robot)}
                className={`cursor-pointer transition-colors hover:bg-blue-50 ${
                  selectedRobot?.id === robot.id ? "bg-blue-100" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{robots.indexOf(robot) + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{robot.nombre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{robot.modelo}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{robot.empresaFabricante}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
