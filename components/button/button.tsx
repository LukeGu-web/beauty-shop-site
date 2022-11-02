import { ReactNode } from 'react'
import Button from '@mui/material/Button'

export function ContainedButton({ children }: { children: ReactNode }) {
  return (
    <Button
      key="one"
      variant="contained"
      size="large"
      sx={{
        color: '#fff',
        bgcolor: '#000',
        ':hover': {
          bgcolor: '#000',
          opacity: 0.6,
        },
      }}
    >
      {children}
    </Button>
  )
}

export function OutlinedButton({ children }: { children: ReactNode }) {
  return (
    <Button
      key="two"
      variant="outlined"
      size="large"
      sx={{
        color: '#000',
        borderColor: '#000',
        ':hover': {
          borderColor: '#000',
          opacity: 0.6,
        },
      }}
    >
      {children}
    </Button>
  )
}
