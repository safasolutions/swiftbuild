interface LogoProps {
  height?: number
  className?: string
}

export default function Logo({ height = 36, className }: LogoProps) {
  const fontSize = Math.round(height * 0.55)
  const gap = Math.round(height * 0.3)
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap }} className={className}>
      <img src="/assets/images/logo/icon.svg" alt="SwiftBuild icon" style={{ height, width: 'auto', display: 'block' }} />
      <span style={{
        fontSize,
        fontWeight: 600,
        letterSpacing: '-0.03em',
        lineHeight: 1,
        background: 'linear-gradient(132.09deg, #43484D 11.15%, #292C2E 79.01%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>SwiftBuild</span>
    </span>
  )
}
