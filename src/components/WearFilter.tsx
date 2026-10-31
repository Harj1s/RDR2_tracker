// Defines the SVG filters used by texture.css. Render it ONCE (in Layout).
// It draws nothing itself. Do not use display:none on it, or the filters
// stop working in some browsers.
 
// Erases random specks from whatever it is applied to.
// `threshold` (the last number in the matrix) controls the amount of wear:
// closer to 0 = less wear, more negative = more wear.
const speckMatrix = (threshold: number) =>
    `0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  20 0 0 0 ${threshold}`
 
export default function WearFilter() {
    return (
        <svg
            width="0"
            height="0"
            aria-hidden="true"
            style={{ position: 'absolute' }}
            focusable="false"
        >
            {/* Headings and other text */}
            <filter id="wear-text">
                <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" result="noise" />
                <feColorMatrix in="noise" type="matrix" values={speckMatrix(-5.5)} result="specks" />
                <feComposite in="SourceGraphic" in2="specks" operator="in" />
            </filter>
 
            {/* Thin rules: a wider region, because a 2px line is a very small box */}
            <filter id="wear-rule" filterUnits="userSpaceOnUse" x="-5" y="-5" width="4000" height="40">
                <feTurbulence type="fractalNoise" baseFrequency="0.35 0.9" numOctaves="2" result="noise" />
                <feColorMatrix in="noise" type="matrix" values={speckMatrix(-5)} result="specks" />
                <feComposite in="SourceGraphic" in2="specks" operator="in" />
            </filter>
        </svg>
    )
}