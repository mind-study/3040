export function FamilyIllustration() {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration family-illust">
      {/* Parent 1 */}
      <circle cx="70" cy="50" r="18" fill="#FFE0B2" />
      <circle cx="70" cy="50" r="14" fill="#FFCC80" />
      <circle cx="65" cy="47" r="2" fill="#5D4037" />
      <circle cx="75" cy="47" r="2" fill="#5D4037" />
      <path d="M65 55 Q70 60 75 55" stroke="#5D4037" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="58" y="68" width="24" height="30" rx="8" fill="#42A5F5" />
      {/* Parent 2 */}
      <circle cx="130" cy="50" r="18" fill="#FFE0B2" />
      <circle cx="130" cy="50" r="14" fill="#FFCC80" />
      <circle cx="125" cy="47" r="2" fill="#5D4037" />
      <circle cx="135" cy="47" r="2" fill="#5D4037" />
      <path d="M125 55 Q130 60 135 55" stroke="#5D4037" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="118" y="68" width="24" height="30" rx="8" fill="#EF5350" />
      {/* Child */}
      <circle cx="100" cy="70" r="14" fill="#FFE0B2" />
      <circle cx="100" cy="70" r="11" fill="#FFCC80" />
      <circle cx="96" cy="68" r="1.5" fill="#5D4037" />
      <circle cx="104" cy="68" r="1.5" fill="#5D4037" />
      <path d="M96 74 Q100 78 104 74" stroke="#5D4037" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="90" y="84" width="20" height="24" rx="7" fill="#FFB74D" />
      {/* Hearts */}
      <path d="M45 30 C45 25,50 20,55 25 C60 20,65 25,65 30 C65 40,55 48,55 48 C55 48,45 40,45 30Z" fill="#FF8A80" opacity="0.6" />
      <path d="M140 25 C140 22,143 19,146 22 C149 19,152 22,152 25 C152 31,146 35,146 35 C146 35,140 31,140 25Z" fill="#FF8A80" opacity="0.5" />
      <path d="M160 60 C160 58,162 56,164 58 C166 56,168 58,168 60 C168 64,164 66,164 66 C164 66,160 64,160 60Z" fill="#FF8A80" opacity="0.4" />
      {/* Stars */}
      <polygon points="35,70 37,65 39,70 44,70 40,74 42,79 37,76 32,79 34,74 30,70" fill="#FFD54F" opacity="0.6" />
      <polygon points="165,85 166.5,81 168,85 172,85 169,88 170,92 166.5,89.5 163,92 164,88 161,85" fill="#FFD54F" opacity="0.5" />
    </svg>
  )
}

export function LeafDecoration() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration leaf-decor">
      <path d="M10 35 Q30 10 60 20 Q90 30 110 5" stroke="#81C784" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="25" cy="18" rx="8" ry="5" fill="#A5D6A7" transform="rotate(-30 25 18)" opacity="0.7" />
      <ellipse cx="55" cy="20" rx="8" ry="5" fill="#81C784" transform="rotate(10 55 20)" opacity="0.6" />
      <ellipse cx="85" cy="14" rx="8" ry="5" fill="#A5D6A7" transform="rotate(-20 85 14)" opacity="0.7" />
      <circle cx="15" cy="28" r="3" fill="#FFB74D" opacity="0.5" />
      <circle cx="45" cy="30" r="2" fill="#FF8A65" opacity="0.4" />
      <circle cx="95" cy="10" r="2.5" fill="#FFB74D" opacity="0.5" />
    </svg>
  )
}

export function CloudDecoration() {
  return (
    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration cloud-decor">
      <ellipse cx="40" cy="30" rx="25" ry="15" fill="white" opacity="0.3" />
      <ellipse cx="60" cy="25" rx="20" ry="12" fill="white" opacity="0.25" />
      <ellipse cx="55" cy="32" rx="18" ry="10" fill="white" opacity="0.2" />
      <ellipse cx="120" cy="20" rx="22" ry="12" fill="white" opacity="0.2" />
      <ellipse cx="135" cy="25" rx="16" ry="10" fill="white" opacity="0.15" />
    </svg>
  )
}

export function SunDecoration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="illustration sun-decor">
      <circle cx="40" cy="40" r="16" fill="#FFD54F" opacity="0.4" />
      <circle cx="40" cy="40" r="12" fill="#FFEB3B" opacity="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 40 + 22 * Math.cos(rad)
        const y1 = 40 + 22 * Math.sin(rad)
        const x2 = 40 + 30 * Math.cos(rad)
        const y2 = 40 + 30 * Math.sin(rad)
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#FFD54F"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        )
      })}
    </svg>
  )
}
