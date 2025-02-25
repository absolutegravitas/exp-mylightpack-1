import React from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode // Optional icon prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

export default FeatureCard
