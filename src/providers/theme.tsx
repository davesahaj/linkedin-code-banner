import { ReactElement } from 'react'
import { MantineProvider } from '@mantine/core'

function ThemeProvider({ children }: { children: ReactElement | null }) {
  return <MantineProvider>{children}</MantineProvider>
}

export { ThemeProvider }
