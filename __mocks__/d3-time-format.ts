export function timeFormat(_spec: string) {
  return (date: Date) => date.toISOString().slice(0, 10)
}
