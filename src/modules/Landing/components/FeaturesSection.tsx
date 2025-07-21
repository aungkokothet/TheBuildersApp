import React from "react"
"use client"
import { features } from "../data/features"
import {
  LightbulbIcon,
  ZapIcon,
  RocketIcon,
} from "lucide-react"

const iconMap = {
  LightbulbIcon: LightbulbIcon,
  ZapIcon: ZapIcon,
  RocketIcon: RocketIcon,
}

export function FeaturesSection() {
  return (
    <section className="w-full bg-muted/50 py-20 border-t border-border">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Powers the Builders' Stack?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ title, description, icon }) => {
            const Icon = iconMap[icon as keyof typeof iconMap]
            return (
              <div key={title} className="bg-background rounded-2xl p-6 border border-border shadow-sm text-center">
                <Icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
