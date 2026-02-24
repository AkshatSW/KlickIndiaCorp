import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Report Core Web Vitals to Google Analytics 4
function sendToGA4({ name, delta, id }) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      event_label: id,
      non_interaction: true,
    })
  }
}

onCLS(sendToGA4)
onINP(sendToGA4)
onFCP(sendToGA4)
onLCP(sendToGA4)
onTTFB(sendToGA4)
