import React from 'react'
import ReactDOM from 'react-dom'
import Sample from 'src/page/Sample'
import registerServiceWorker from 'src/reagisterServiceWorker'

const run = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Sample test="test string" />
      <div>hoge</div>
    </React.StrictMode>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

if (window.hasOwnProperty('cordova')) {
  document.addEventListener('deviceready', run, false)
} else {
  run()
}
