// The one shape every checklist in the app uses
// (collectibles, missions, and later strangers, hunting, crafting).

export type TrackedItem = {
    /** Must be unique across the whole app and must never change once released. */
    id: string,
    name: string,
    subtitle: string,
    description: string,
    badge?: string,
    locked?: boolean,
    extras?: null
}

export type TrackedGroup = {
    id: string,
    name: string,
    color: string,
    unit: string,
    totalInGame: number,
    items: TrackedItem[]
}

export type GoldObjective = {
    id: string,
    text: string
}