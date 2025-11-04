import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setSession, getSession, SIX_HOURS_MS } from '../utils/session'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

function Home() {
  const navigate = useNavigate()
  const [apiKey, setApiKey] = useState('')
  const [botId, setBotId] = useState('')

  useEffect(() => {
    const existing = getSession()
    if (existing) navigate('/app')
  }, [navigate])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!apiKey || !botId) return
    setSession(apiKey, botId, SIX_HOURS_MS)
    navigate('/app')
  }

  return (
    <Container id="home-container" maxWidth="sm" sx={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
        <Stack spacing={3}>
          <div>
            <Typography variant="h4" gutterBottom>Welcome</Typography>
            <Typography color="text.secondary">Enter your API Key and Intent ID to continue.</Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Bot ID"
                value={botId}
                onChange={(e) => setBotId(e.target.value)}
                fullWidth
                required
              />
              <Button type="submit" variant="contained">Sign In</Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Container>
  )
}

export default Home

