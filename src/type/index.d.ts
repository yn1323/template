declare module 'Common' {}

declare module 'State' {
  export interface State {
    sample: Sample
  }
  export interface Sample {
    id: string
  }
}
