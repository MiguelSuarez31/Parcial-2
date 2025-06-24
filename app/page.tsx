"use client"

import { useState, useEffect } from "react"
import RobotList from "@/components/robot-list"
import RobotDetail from "@/components/robot-detail"
import RobotsBanner from "@/components/robots-banner"
import Footer from "@/components/footer"
import type { Robot } from "@/lib/types"
import { translations, type Language } from "@/lib/translations"

export default function RobotAdoptionApp() {
  const [robots, setRobots] = useState<Robot[]>([])
  const [selectedRobot, setSelectedRobot] = useState<Robot | null>(null)
  const [language, setLanguage] = useState<Language>("es")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const t = translations[language]

  useEffect(() => {
    fetchRobots()
  }, [])

  const fetchRobots = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        "https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json",
      )
      if (!response.ok) {
        throw new Error("Failed to fetch robots")
      }
      const data = await response.json()
      setRobots(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleRobotSelect = (robot: Robot) => {
    setSelectedRobot(robot)
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t.loading}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            {t.error}: {error}
          </p>
          <button onClick={fetchRobots} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {t.retry}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguageChange("es")}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  language === "es" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Español
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 rounded text-sm font-medium ${
                  language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Robots Banner */}
      <RobotsBanner />

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <RobotList
              robots={robots}
              onRobotSelect={handleRobotSelect}
              selectedRobot={selectedRobot}
              translations={t}
            />
          </div>
          <div>
            {selectedRobot ? (
              <RobotDetail robot={selectedRobot} translations={t} onClose={() => setSelectedRobot(null)} />
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                <p>{t.selectRobot || "Selecciona un robot para ver sus detalles"}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
