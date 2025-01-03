import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Store from "./routes"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Store/>
  </StrictMode>,
)