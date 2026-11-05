import {
    LayoutGrid,
    Gem,
    Flag,
    Users,
    PawPrint,
    Hammer,
    Map,
    Omega,
    Star,
    Award,
    type LucideIcon,
} from 'lucide-react'

export type NavItem = {
    label: string
    path: string
    icon: LucideIcon
}

export const navItems: NavItem[] = [
    {label: 'Home', path: '/', icon: LayoutGrid },
    {label: 'Missions', path: '/missions', icon: Flag },
    {label: 'Strangers', path: '/strangers', icon: Users },
    {label: 'Collectibles', path: '/collectibles', icon: Gem },
    {label: 'Compendium', path: '/compendium', icon: Star},
    {label: 'Hunting', path: '/hunting', icon: PawPrint },
    {label: 'Horses', path: '/horses', icon: Omega },
    {label: 'Crafting', path: '/crafting', icon: Hammer },
    {label: 'Achievements', path: '/achievements', icon: Award},
    {label: 'Map', path: '/map', icon: Map },
]