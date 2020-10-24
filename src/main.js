import App from './svelte/App.svelte'
import './scss/main.scss'

new App({
  target: document.body,
  props: {
    word: 'World'
  }
})
