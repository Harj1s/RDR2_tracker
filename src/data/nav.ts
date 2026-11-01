import {
    LayoutGrid,
    Gem,
    Flag,
    Users,
    PawPrint,
    Hammer,
    Map,
    Omega,
    type LucideIcon,
} from 'lucide-react'

export type NavItem = {
    label: string
    path: string
    icon: LucideIcon
}

export const navItems: NavItem[] = [
    {label: 'Home', path: '/', icon: LayoutGrid },
    {label: 'Collectibles', path: '/collectibles', icon: Gem },
    {label: 'Missions', path: '/missions', icon: Flag },
    {label: 'Strangers', path: '/strangers', icon: Users },
    {label: 'Hunting', path: '/hunting', icon: PawPrint },
    {label: 'Horses', path: '/horses', icon: Omega },
    {label: 'Crafting', path: '/crafting', icon: Hammer },
    {label: 'Map', path: '/map', icon: Map },
]