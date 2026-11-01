import { useEffect, useState } from "react";

export type Ring = {
    id: string
    label: string
    percent: number
    color: string
}

type RingChartProps = {
    rings: Ring[]
    centerValue: string
    centerLabel?: string
    centerNote?: string
}

// All sizes are in SVG units. The SVG scales to fit its container
const VIEWBOX = 240
const CENTER = VIEWBOX/2
const OUTER_RADIUS = 110
const RING_GAP = 14 // distance between the center lines of two rings
const STROKE = 9

export default function RingChart({
    rings,
    centerValue,
    centerLabel,
    centerNote,
}: RingChartProps) {
    // Start every arc empty, then fill it on the next frame so it animates in.
    
    const [ready, setReady] = useState(false)
    useEffect(() => {
        const frame = requestAnimationFrame(() => setReady(true))
        return () => cancelAnimationFrame(frame)
    }, [])

    const description = rings.map((r) => `${r.label} ${r.percent}%`).join(', ')
    const hasCenterDetails = Boolean(centerLabel || centerNote)
    const ariaLabel = [
        centerLabel,
        centerValue,
        centerNote,
        description,
    ].filter(Boolean).join('. ')
    
    return (
        <svg
            className="ring-chart"
            viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
            role="img"
            aria-label={`${ariaLabel}.`}
        >
            {rings.map((ring, i) => {
                const radius = OUTER_RADIUS - i * RING_GAP
                const circumference = 2 * Math.PI * radius
                const percent = Math.min(100, Math.max(0, ring.percent))
                const offset = ready
                    ? circumference * (1 - percent / 100)
                    : circumference

                return (
                    <g key={ring.id}>
                        {/* Grey track: the full circle behind the arc */}
                        <circle
                            className="ring-chart__track"
                            cx={CENTER}
                            cy={CENTER}
                            r={radius}
                            strokeWidth={STROKE}
                        />
                        {/* Colored arc: a dash as long as the completed share */}
                        <circle
                            className="ring-chart__arc"
                            cx={CENTER}
                            cy={CENTER}
                            r={radius}
                            strokeWidth={STROKE}
                            stroke={ring.color}
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform={`rotate(-90 ${CENTER} ${CENTER})`}
                        />
                    </g>
                )
            })}

            <text
                className="ring-chart__value"
                x={CENTER}
                y={CENTER + (hasCenterDetails ? 4 : 10)}
                textAnchor="middle"
            >
                {centerValue}
            </text>
            {centerLabel && (
                <text className="ring-chart__label" x={CENTER} y={CENTER + 20} textAnchor="middle">
                    {centerLabel}
                </text>
            )}
            {centerNote && (
                <text className="ring-chart__note" x={CENTER} y={CENTER + 33} textAnchor="middle">
                    {centerNote}
                </text>
            )}
        </svg>
    )
}