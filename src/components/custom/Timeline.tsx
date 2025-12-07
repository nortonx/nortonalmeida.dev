"use client"

import React from "react"
import { motion } from "framer-motion"

interface TimelineItemProps {
  title: string
  company: string
  period: string
  location: string
  description?: string
  skills?: string[]
}

interface TimelineProps {
  items: TimelineItemProps[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12 py-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 group"
        >
          {/* Dot */}
          <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-background group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded">
              {item.period}
            </span>
          </div>

          <div className="mb-4">
            <div className="text-base font-semibold text-slate-700 dark:text-slate-300">
              {item.company}
            </div>
            <div className="text-sm text-muted-foreground">{item.location}</div>
          </div>

          {item.description && (
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm mb-4">
              {/* Handles simple string or markdown-like content if needed, but here simple rendering */}
              {item.description}
            </div>
          )}

          {item.skills && item.skills.length > 0 && (
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-600 dark:text-slate-400">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  )
}
