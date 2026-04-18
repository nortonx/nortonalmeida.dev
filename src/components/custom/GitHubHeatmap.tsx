"use client"

import { scaleThreshold } from "d3-scale"
import { timeFormat } from "d3-time-format"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useMemo, useState } from "react"

type Activity = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ApiResponse = {
  total: Record<string, number>
  contributions: Activity[]
}

const USERNAME = "nortonx"
const API_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`

const BLUE_RAMP_DARK = [
  "#0b1220",
  "#1e3a8a",
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
] as const

const BLUE_RAMP_LIGHT = [
  "#eff6ff",
  "#bfdbfe",
  "#60a5fa",
  "#2563eb",
  "#1e3a8a",
] as const

const BLOCK_SIZE = 10
const BLOCK_GAP = 3
const CELL = BLOCK_SIZE + BLOCK_GAP
const LABEL_WIDTH = 28
const LABEL_HEIGHT = 14
const GRID_HEIGHT = 7 * CELL - BLOCK_GAP

const formatTooltipDate = timeFormat("%b %-d, %Y")

function parseLocalDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export default function GitHubHeatmap() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<ApiResponse>
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setHasError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const palette = useMemo(
    () => (resolvedTheme === "dark" ? BLUE_RAMP_DARK : BLUE_RAMP_LIGHT),
    [resolvedTheme],
  )

  const colorScale = useMemo(() => {
    if (!data) return null
    const maxCount = data.contributions.reduce(
      (acc, d) => (d.count > acc ? d.count : acc),
      0,
    )
    const domain =
      maxCount >= 5
        ? [
            1,
            Math.ceil(maxCount * 0.25),
            Math.ceil(maxCount * 0.5),
            Math.ceil(maxCount * 0.75),
          ]
        : [1, 2, 3, 4]
    return scaleThreshold<number, string>()
      .domain(domain)
      .range([...palette])
  }, [data, palette])

  const weeks = useMemo(() => {
    if (!data) return [] as Activity[][]
    const activities = data.contributions
    if (activities.length === 0) return []

    const first = parseLocalDate(activities[0].date)
    const firstSundayOffset = first.getDay()
    const grid: Activity[][] = []
    let currentWeek: Activity[] = []

    for (let i = 0; i < firstSundayOffset; i++) {
      currentWeek.push({
        date: "",
        count: 0,
        level: 0,
      })
    }

    for (const a of activities) {
      currentWeek.push(a)
      if (currentWeek.length === 7) {
        grid.push(currentWeek)
        currentWeek = []
      }
    }
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7)
        currentWeek.push({ date: "", count: 0, level: 0 })
      grid.push(currentWeek)
    }
    return grid
  }, [data])

  const monthLabels = useMemo(() => {
    const labels: { month: string; x: number }[] = []
    let lastMonth = -1
    weeks.forEach((week, i) => {
      const firstReal = week.find((d) => d.date !== "")
      if (!firstReal) return
      const d = parseLocalDate(firstReal.date)
      if (d.getMonth() !== lastMonth && d.getDate() <= 7) {
        labels.push({
          month: d.toLocaleDateString("en-US", { month: "short" }),
          x: LABEL_WIDTH + i * CELL,
        })
        lastMonth = d.getMonth()
      }
    })
    return labels
  }, [weeks])

  const blocks = useMemo(() => {
    if (!colorScale) return []
    const result: {
      key: string
      x: number
      y: number
      fill: string
      tooltip: string
    }[] = []
    weeks.forEach((week, wi) => {
      week.forEach((day, di) => {
        if (!day.date) return
        const dateObj = parseLocalDate(day.date)
        const pluralized = day.count === 1 ? "contribution" : "contributions"
        const formattedDate = formatTooltipDate(dateObj)
        result.push({
          key: day.date,
          x: LABEL_WIDTH + wi * CELL,
          y: LABEL_HEIGHT + di * CELL,
          fill: colorScale(day.count),
          tooltip:
            day.count === 0
              ? `No contributions on ${formattedDate}`
              : `${day.count} ${pluralized} on ${formattedDate}`,
        })
      })
    })
    return result
  }, [weeks, colorScale])

  const totalContributions = useMemo(() => {
    if (!data) return 0
    return data.contributions.reduce((sum, day) => sum + day.count, 0)
  }, [data])

  if (!mounted || hasError || !data || !colorScale) return null

  const gridWidth = weeks.length * CELL - BLOCK_GAP + LABEL_WIDTH
  const svgHeight = LABEL_HEIGHT + GRID_HEIGHT

  return (
    <motion.div
      data-testid="github-heatmap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="github-heatmap pt-8 -mb-2 text-slate-500 dark:text-slate-400">
      <div className="flex w-full flex-col gap-2">
        <svg
          width="100%"
          viewBox={`0 0 ${gridWidth} ${svgHeight}`}
          preserveAspectRatio="xMidYMid meet"
          className="block h-auto w-full"
          role="img"
          aria-label={`${totalContributions} contributions in the last year`}>
          {monthLabels.map((m) => (
            <text
              key={`${m.month}-${m.x}`}
              x={m.x}
              y={LABEL_HEIGHT - 4}
              fontSize={10}
              fill="currentColor">
              {m.month}
            </text>
          ))}
          {(
            [
              { label: "Mon", row: 1 },
              { label: "Wed", row: 3 },
              { label: "Fri", row: 5 },
            ] as const
          ).map(({ label, row }) => (
            <text
              key={label}
              x={0}
              y={LABEL_HEIGHT + row * CELL + BLOCK_SIZE - 1}
              fontSize={9}
              fill="currentColor">
              {label}
            </text>
          ))}
          {blocks.map((b) => (
            <rect
              key={b.key}
              x={b.x}
              y={b.y}
              width={BLOCK_SIZE}
              height={BLOCK_SIZE}
              rx={2}
              fill={b.fill}>
              <title>{b.tooltip}</title>
            </rect>
          ))}
        </svg>
        <div className="flex items-center justify-between gap-4 text-xs">
          <span>{totalContributions} contributions in the last year</span>
          <span className="flex items-center gap-1">
            <span>Less</span>
            {palette.map((c) => (
              <span
                key={c}
                aria-hidden="true"
                className="inline-block rounded-[2px]"
                style={{
                  width: BLOCK_SIZE,
                  height: BLOCK_SIZE,
                  backgroundColor: c,
                }}
              />
            ))}
            <span>More</span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
