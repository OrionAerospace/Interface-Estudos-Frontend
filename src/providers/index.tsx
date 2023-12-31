import StyledComponentsRegistry from './StyleSheetManager'

export function Providers({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
