'use server'

export const exampleErrorFunction = async () => {
  const triggerError = Math.random() > 0.5
  if (triggerError) {
    throw new Error('Error triggered')
  }

  return 'No error triggered'
}
