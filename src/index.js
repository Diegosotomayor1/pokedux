import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux/es/exports'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <main className="bg-purple-100 ">
        <BrowserRouter>
          <Header />
          <div className=' pt-28 flex flex-col justify-center items-center p-5 mx-auto'>
            <App />
          </div>
        </BrowserRouter>
      </main>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
