type PageHeadProps = {
    eyebrow: string
    title: string
    subtitle: string
}

// The header at the top of every page (Home, Missions, Strangers, ...).
export default function PageHead({ eyebrow, title, subtitle }: PageHeadProps) {
    return (
        <section className="page-head">
            <p className="eyebrow eyebrow--red">{eyebrow}</p>
            <h2 className="page-title">{title}</h2>
            <p className="page-subtitle">{subtitle}</p>
        </section>
    )
}