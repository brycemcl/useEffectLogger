import { useRef, useEffect } from 'react'
const usePrevious = (value, initialValue) => {
  const ref = useRef(initialValue)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
export const useEffectLogger = (
  effectHook,
  dependencies,
  dependencyNames = [],
) => {
  const previousDependencies = usePrevious(dependencies, [])
  const changedDependencies = dependencies.reduce(
    (previous, currentDependency, index) => {
      if (currentDependency !== previousDependencies[index]) {
        const keyName = dependencyNames[index] || index
        return {
          ...previous,
          [keyName]: {
            before: previousDependencies[index],
            after: currentDependency,
          },
        }
      }
      return previous
    },
    {},
  )

  if (Object.keys(changedDependencies).length) {
    //remove the prototype chain
    const changedDependenciesToLog = Object.entries(changedDependencies).reduce(
      (previous, current) => {
        previous[current[0]] = current[1]
        return previous
      },
      Object.create(null),
    )
    console.table(changedDependenciesToLog)
  }
  useEffect(effectHook, [...dependencies, effectHook])
}
export default useEffectLogger
