export type Language = "es" | "en"

export interface Translations {
  title: string
  robotList: string
  robotDetail: string
  name: string
  model: string
  company: string
  manufacturingYear: string
  processingCapacity: string
  additionalFeatures: string
  adoptRobot: string
  loading: string
  error: string
  retry: string
  selectRobot: string
}

export const translations: Record<Language, Translations> = {
  es: {
    title: "Adopta un Robot con Robot Lovers!",
    robotList: "Lista de Robots",
    robotDetail: "Detalle del Robot",
    name: "Nombre",
    model: "Modelo",
    company: "Empresa Fabricante",
    manufacturingYear: "Año de Fabricación",
    processingCapacity: "Capacidad de Procesamiento",
    additionalFeatures: "Características Adicionales",
    adoptRobot: "Adoptar Robot",
    loading: "Cargando robots...",
    error: "Error al cargar los datos",
    retry: "Reintentar",
    selectRobot: "Selecciona un robot para ver sus detalles",
  },
  en: {
    title: "Adopt a Robot with Robot Lovers!",
    robotList: "Robot List",
    robotDetail: "Robot Detail",
    name: "Name",
    model: "Model",
    company: "Manufacturing Company",
    manufacturingYear: "Manufacturing Year",
    processingCapacity: "Processing Capacity",
    additionalFeatures: "Additional Features",
    adoptRobot: "Adopt Robot",
    loading: "Loading robots...",
    error: "Error loading data",
    retry: "Retry",
    selectRobot: "Select a robot to view its details",
  },
}
