type MeterProps = {
    value: number
    max: number
    label: string
}

// Color comes from the --accent CSS variable of the nearest parent,
// falling back to red.
export default function Meter({ value, max, label }: MeterProps) {
    const percent = max === 0 ? 0 : Math.min(100, (value / max) * 100)

    return (
        <div
            className="meter"
            role="progressbar"
            aria-label={label}
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
        >
            <div className="meter__fill" style={{ width: `${percent}%` }} />
        </div>
    )
}