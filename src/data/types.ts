// The one shape every checklist in the app uses
// (collectibles, missions, and later strangers, hunting, crafting).

export type GoldObjective = {
    id: string,
    text: string
}

export type TrackedItem = {
    /** Must be unique across the whole app and must never change once released. */
    id: string,             // Unique identifier
    name: string,           // Title of the item
    subtitle: string,       // Gray line under the title
    description?: string,   // Detail panel text
    tagline?: string,       // Serif line in the detail panel
    region?: string,        // Region of the item
    lockedUntil?: string,   // Reason why item is locked
    gold?: GoldObjective[]  // Missions only
}

export type TrackedGroup = {
    id: string,             // Unique identifier
    name: string,           // Title of the group
    label?: string,         // 'Chapter 1' for example, only for missions
    color?: string,         // For collectibles, missions get default
    unit?: string,          // 'Sets' and 'requests' for collectibles, no need for missions 
    totalInGame?: number,   // Total amount of items in the group
    items: TrackedItem[]    
}