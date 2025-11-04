import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSession, clearSession } from '../utils/session'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DemoSection } from '../components/DemoSection'

function Dashboard() {
  const navigate = useNavigate()
  const session = getSession()

  useEffect(() => {
    if (!session) navigate('/')
  }, [session, navigate])

  function handleSignOut() {
    clearSession()
    navigate('/')
  }

  return (
    <Box id="dashboard-container" sx={{ width: '1000px', position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
        <Typography variant="subtitle1">Bot ID: {session?.botId || ''}</Typography>
      </Box>
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <Button variant="outlined" onClick={handleSignOut}>Sign Out</Button>
      </Box>

      <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '100vh', px: 2 }}>
        <Box sx={{ width: '500px', display: 'flex', justifyContent: 'center', alignItems: "center", maxWidth: 800, border: '1px dashed', borderColor: 'divider', borderRadius: 2, p: 6, textAlign: 'center' }}>
          <DemoSection />
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard

