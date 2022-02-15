import React from 'react'
import { Text, Box } from '@pangolindex/components'
import { isMobile } from 'react-device-detect'
// import { useDarkModeManager } from '../../state/user/hooks'
import Logo from 'src/assets/images/supreme.png'
import MobileLogo from 'src/assets/images/supreme.png'
import { Title, LogoWrapper } from './styled'

interface LogoProps {
  collapsed: boolean
}

export default function LogoIcon({ collapsed }: LogoProps) {
  // const [isDark] = useDarkModeManager()
  console.log("debug mobile", isMobile);
  return (
    <LogoWrapper collapsed={collapsed}>
      <Box>
        <Title href=".">
          <img width={'28px'} src={isMobile ? MobileLogo : Logo} alt="logo" />
        </Title>
      </Box>
      {!collapsed && (
        <Box ml={12}>
          <Text color="text1" fontSize={16}>
            Supreme
          </Text>
        </Box>
      )}
    </LogoWrapper>
  )
}
