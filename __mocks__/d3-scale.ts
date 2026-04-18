type ThresholdScale = {
  (value: number): string
  domain: (d: number[]) => ThresholdScale
  range: (r: string[]) => ThresholdScale
}

export function scaleThreshold<
  TDomain extends number,
  TRange extends string,
>(): {
  (value: TDomain): TRange
  domain: (d: TDomain[]) => ReturnType<typeof scaleThreshold<TDomain, TRange>>
  range: (r: TRange[]) => ReturnType<typeof scaleThreshold<TDomain, TRange>>
} {
  let domain: number[] = []
  let range: string[] = []
  const scale = ((value: number): string => {
    let i = 0
    while (i < domain.length && value >= domain[i]) i++
    return range[i] ?? range[0] ?? ""
  }) as unknown as ThresholdScale
  scale.domain = (d: number[]) => {
    domain = d
    return scale
  }
  scale.range = (r: string[]) => {
    range = r
    return scale
  }
  return scale as unknown as ReturnType<typeof scaleThreshold<TDomain, TRange>>
}
