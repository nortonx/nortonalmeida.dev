import "@testing-library/jest-dom"

globalThis.fetch = (() =>
  Promise.reject(new Error("fetch is not mocked"))) as typeof fetch
