import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Sample from 'src/page/Sample'
import registerServiceWorker from 'src/reagisterServiceWorker'
import 'src/asset/scss/index.scss'

const run = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Sample test="test string" />
        <div>hoge</div>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

// eslint-disable-next-line no-prototype-builtins
if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', run, false)
} else {
  run()
}
