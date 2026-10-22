type ChecklistRowProps = {
    label: string
    detail?: string
    checked: boolean
    onToggle: () => void
}

// Reusable for collectibles now, and missions / strangers later.
export default function ChecklistRow({
    label,
    detail,
    checked,
    onToggle,
}: ChecklistRowProps) {
    return (
        <li className={checked ? 'check-row check-row--done' : 'check-row'}>
            <label className="check-row__label">
                <input type="checkbox" checked={checked} onChange={onToggle} />
                <span className="check-row__name">{label}</span>
                {detail && <span className="check-row__detail">{detail}</span>}
            </label>
        </li>
    )
}