import type { TrackedGroup } from './types'
import { animalCategory } from './compendium/animals'

export { animalCategory } from './compendium/animals'
export type { Animal, AnimalCategory } from './compendium/animals'

export const compendiumCategories: TrackedGroup[] = [animalCategory]
