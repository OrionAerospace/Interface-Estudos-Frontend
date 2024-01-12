export type Subject = {
  name: string
  classes: {
    topic: string
    lessons: { name: string; conclusion: boolean }[]
  }[]
}
