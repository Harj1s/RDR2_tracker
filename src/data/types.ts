export type TrackedObjective = {
    id: string
    text: string
}

export type GoldObjective = TrackedObjective

/** Optional checklist behavior and presentation shared by tracked item types. */
export type TrackedItemDetails = {
    tagline?: string
    region?: string
    requires?: string[]
    requiresAny?: string[]
    gold?: GoldObjective[]
    objectives?: TrackedObjective[]
}

/** Optional metadata used by particular group types. */
export type TrackedGroupDetails = {
    label?: string
    color?: string
    unit?: string
    totalInGame?: number
}

export type TrackedItem<TDetails extends object = TrackedItemDetails> = {
    /** Must be unique across the whole app and must never change once released. */
    id: string
    name: string
    subtitle: string
    description?: string
    image?: string
    details?: TDetails
}

export type TrackedGroup<
    TItemDetails extends object = TrackedItemDetails,
    TDetails extends object = TrackedGroupDetails,
> = {
    id: string
    name: string
    items: TrackedItem<TItemDetails>[]
    details?: TDetails
}