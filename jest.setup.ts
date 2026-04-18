import "@testing-library/jest-dom"

if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = (() =>
    Promise.reject(new Error("fetch is not mocked"))) as typeof fetch
}
