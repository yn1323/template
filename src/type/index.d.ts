declare module 'Common' {}

declare module 'Store' {
  export interface State {
    sample: Sample
    component: Component
    user: User
    selection: Selection
    post: Post
    currency: Currency
  }
  export interface Sample {
    id: string
  }
  export interface Component {
    isDrawerOpen: boolean
    isDialogOpen: boolean
    dialog: Dialog
    loading: boolean
    snackbar: Snackbar
  }
  export interface User {
    id: string
  }
  export interface Selection extends Loading {
    [key: string]: any
    members: string[]
    categories: string[]
    isInitializedMember: boolean
    isInitializedCategory: boolean
    isInitializedSucceeded: boolean
  }
  export interface Post extends Loading {
    year: string
    month: string
    memberFilter: string
    categoryFilter: string
    posts: Detail[]
  }
  export interface Currency extends Loading {
    currency: string
    isPrefix: boolean
    isSuffix: boolean
    isInitialized: boolean
    isInitializedSucceeded: boolean
  }
  interface Dialog {
    title: string
    component: any
    menu: DialogMenu[]
  }
  export interface DialogMenu {
    text: string
    callback: (k: any) => any
  }
  interface Snackbar {
    isOpen: boolean
    type: 'success' | 'error' | 'warning' | 'info'
    msg: string
  }

  interface Loading {
    isLoading: boolean
    isSucceeded: boolean
  }
  interface Detail {
    id: string
    date: any
    member: string
    category: string
    price: number
    memo: string
  }
}

declare module 'Response' {
  export interface CurrencyRequest {
    currency: string
    isPrefix: boolean
    isSuffix: boolean
  }
  export interface DataRequest {
    date: Date
    member: string
    category: string
    price: number
    memo: string
  }
  export interface UpdateDataRequest extends DataRequest {
    id: string
  }
  export interface DailyDataRequest {
    startDate: Date
    endDate: Date
    member?: string
    category?: string
  }
  export interface DeleteDailyDataRequest extends DailyDataRequest {
    id: string
  }
}
