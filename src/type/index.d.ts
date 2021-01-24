declare module 'Common' {}

declare module 'Store' {
  export interface State {
    sample: Sample
    component: Component
  }
  export interface Sample {
    id: string
  }
  export interface Component {
    isDrawerOpen: boolean
    isDialogOpen: boolean
    dialog: Dialog
  }
  interface Dialog {
    title: string
    component: any
  }
}
