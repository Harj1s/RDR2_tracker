import { sideGoals } from "../data/progress";

export default function BeyondCard() {
    return (
        <section className="card">
            <h3 className="card__title">Beyond the 100%</h3>
            <p className="beyond__intro">Optional pursuits have their own progress.</p>

            <ul className="beyond__list">
                {sideGoals.map((goal) => (
                    <li key={goal.id} className="beyond__row">
                        <span>{goal.label}</span>
                        <span className={`beyond__count beyond__count--${goal.tone}`}>
                            {goal.done} / {goal.total}
                            {goal.unit}
                        </span>
                    </li>
                ))}
            </ul>

            <p className="beyond__footnote">
                Gold medals are not required for Total Completion
            </p>
        </section>
    )
}