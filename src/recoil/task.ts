import { atom, selector, DefaultValue } from 'recoil'

export interface Task {
  title: string
  completed: boolean
}

const initialTasks: string[] = []

export const taskState = atom<string[]>({
  key: 'task',
  default: initialTasks,
})

export const taskState2 = selector<string[]>({
  key: 'taskA',
  get: ({ get }): string[] => get(taskState).map(t => `${t}OK`),
})
