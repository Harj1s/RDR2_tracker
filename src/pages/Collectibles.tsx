import ChecklistPage from "../components/ChecklistPage"
import { collectibleCategories } from '../data/collectibles'

export default function Collectibles() {
    return (
        <ChecklistPage
            eyebrow="Collectibles"
            title="Everything worth finding."
            subtitle="Tick off each discovery as you record it in the field."
            countCaption="Collectibles recorded"
            hideLabel="Hide recorded"
            groups={collectibleCategories}
        />
    )
}