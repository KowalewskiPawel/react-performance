// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
const Globe = React.lazy(() => import('../globe'));

const loadGlobe = () => import('../globe');

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{ marginBottom: '1rem' }}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
          onMouseEnter={loadGlobe}
        />
        {' show globe'}
      </label>
      <div style={{ width: 400, height: 400 }}>
        <React.Suspense fallback={<div>Loading</div>}>
          {showGlobe ? <Globe /> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
