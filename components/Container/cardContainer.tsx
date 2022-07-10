import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const PrimaryCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  py: 2,
  px: 4,
  cursor: 'pointer',
  backgroundColor: '#334E68',
  padding: '1rem 2rem 1rem 2rem',
}))

export default PrimaryCard