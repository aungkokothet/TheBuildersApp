"use client"
import React from "react"

import Link from "next/link"
import { tiers } from "../data/tiers"
import { Button } from "~/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full bg-background py-20 border-t border-border">
      <div className="container px-4 mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-4">Choose Your Entry Point</h2>
        <p className="text-muted-foreground mb-12">
          The Builders’ Stack offers a way in for every builder — from reflection to launch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map(({ title, tagline, price, features }) => (
            <div
              key={title}
              className="border border-border rounded-2xl p-6 shadow-sm bg-muted/20"
            >
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-primary text-sm mb-4">{tagline}</p>
              <div className="text-3xl font-bold mb-4">{price}</div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                {features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
