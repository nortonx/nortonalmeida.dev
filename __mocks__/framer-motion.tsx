import React, { forwardRef } from "react"

// Mock motion components to render as regular HTML elements with static styles
const createMotionComponent = (tag: string) => {
  const Component = forwardRef<HTMLElement, Record<string, unknown>>(
    ({ children, ...props }, ref) => {
      // Filter out framer-motion specific props
      const filteredProps: Record<string, unknown> = {}
      for (const [key, value] of Object.entries(props)) {
        if (
          !key.startsWith("animate") &&
          !key.startsWith("initial") &&
          !key.startsWith("exit") &&
          !key.startsWith("transition") &&
          !key.startsWith("variants") &&
          !key.startsWith("whileHover") &&
          !key.startsWith("whileTap") &&
          !key.startsWith("whileInView") &&
          !key.startsWith("viewport") &&
          !key.startsWith("drag") &&
          !key.startsWith("onDrag") &&
          !key.startsWith("layout") &&
          key !== "style"
        ) {
          filteredProps[key] = value
        }
      }
      return React.createElement(tag, { ...filteredProps, ref }, children)
    },
  )
  Component.displayName = `motion.${tag}`
  return Component
}

export const motion = {
  div: createMotionComponent("div"),
  span: createMotionComponent("span"),
  p: createMotionComponent("p"),
  a: createMotionComponent("a"),
  button: createMotionComponent("button"),
  ul: createMotionComponent("ul"),
  li: createMotionComponent("li"),
  img: createMotionComponent("img"),
  section: createMotionComponent("section"),
  article: createMotionComponent("article"),
  header: createMotionComponent("header"),
  footer: createMotionComponent("footer"),
  nav: createMotionComponent("nav"),
  main: createMotionComponent("main"),
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
  h4: createMotionComponent("h4"),
  h5: createMotionComponent("h5"),
  h6: createMotionComponent("h6"),
}

// Mock useScroll hook to return static values
export const useScroll = () => ({
  scrollY: { get: () => 0 },
  scrollYProgress: { get: () => 0 },
  scrollX: { get: () => 0 },
  scrollXProgress: { get: () => 0 },
})

// Mock useTransform hook to return a static value
export const useTransform = () => ({
  get: () => 1,
})

// Mock useSpring hook
export const useSpring = (value: unknown) => value

// Mock useMotionValue hook
export const useMotionValue = (initial: number) => ({
  get: () => initial,
  set: () => {},
  on: () => () => {},
})

// Mock useInView hook
export const useInView = () => true

// Mock AnimatePresence
export const AnimatePresence = ({ children }: { children: React.ReactNode }) =>
  children

// Mock LazyMotion
export const LazyMotion = ({ children }: { children: React.ReactNode }) =>
  children

// Mock domAnimation features
export const domAnimation = {}
