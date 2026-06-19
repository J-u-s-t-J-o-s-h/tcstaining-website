import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from 'framer-motion'
import './index.css'
import App from './App.jsx'
import { StainColorProvider } from './context/StainColorProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <StainColorProvider>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </StainColorProvider>
    </LazyMotion>
  </StrictMode>,
)
