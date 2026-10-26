import type { TrackedGroup } from './types'

// DEMO SAMPLE. Names are placeholders written from memory and may sit in the
// wrong chapter. Replace with a list you have verified before launching.

export const missionChapters: TrackedGroup[] = [
    {
        id: 'ch1',
        name: 'Colter',
        label: 'Chapter 01',
        color: 'var(--red)',
        items: [
            {
                id: 'm1-1',
                name: 'Outlaws from the West',
                subtitle: 'Dutch van der Linde',
                description: 'FIX Half frozen, close to death, and on the run, the Van der Linde gang find shelter in an old abandoned mining town. Dutch, Arthur, and Micah head out to look for supplies.',
                region: 'Ambarino'
            },
            { 
                id: 'm1-2',
                name: 'Enter, Pursued by a Memory',
                subtitle: 'Abigail Roberts',
                description: 'FIX John Marston has not returned from an earlier scouting trip. Arthur Morgan and Javier Escuella ride out into the snow to look for him.',
                region: 'Ambarino'
            },
            { 
                id: 'm1-3',
                name: 'Old Friends',
                subtitle: 'Bill Williamson',
                description: "FIX Looking for information on the O'Driscolls' planned train job, Dutch leads the gang to attack their camp at Ewing Basin.",
                region: 'Ambarino'
            },
        ],
    },
    {
        id: 'ch2',
        name: 'Horseshoe Overlook',
        label: 'Chapter 02',
        color: 'var(--gold)',
        items: [
            {
                id: 'm2-1',
                name: 'Polite Society, Valentine Style',
                subtitle: 'Uncle',
                description: 'FIX In search of new leads for the gang, Karen, Tilly and Mary-Beth convince Arthur and Uncle to ride out to Valentine with them.',
                region: 'New Hanover'
            },
            {
                id: 'm2-2',
                name: 'Americans at Rest',
                subtitle: 'Javies Escuella',
                description: "FIX Bill starts a brawl in Smithfield's Saloon in Valentine as Javier, Charles and Arthur attempt to charm the locals.",
                region: 'New Hanover'
            },
            {
                id: 'm2-3',
                name: 'Money Lending and Other Sins I',
                subtitle: 'Leopold Strauss',
                description: 'FIX At the camp, Strauss asks Arthur to retrieve money from three debtors that owe him money. Arthur must collect debts from ranch hand Chick Matthews, Polish smallholder farmer Mr. Wróbel, and ranch maid Lilly Millet.',
                region: 'New Hanover'
            },
        ],
    },
    {
        id: 'ch3',
        name: 'Clemens Point',
        label: 'Chapter 03',
        color: 'var(--sage)',
        items: [
            {
                id: 'm3-1',
                name: 'A Quiet Time',
                subtitle: 'Dutch van der Linde',
                description: "FIX Arthur takes Lenny for a quiet drink in Valentine to help calm him down after learning of Micah's arrest in Strawberry.",
                region: 'Lemoyne'
            },
            {
                id: 'm3-2',
                name: 'The Spines of America',
                subtitle: 'Hosea Matthews',
                description: 'FIX To prove their business credentials to the Emerald Ranch fence, Seamus, Arthur, and Hosea attempt to rob a stagecoach from Old Bob Crawford at Carmody Dell.',
                region: 'Lemoyne'
            },
            {
                id: 'm3-3',
                name: 'A Fisher of Men',
                subtitle: 'Abigail Roberts',
                description: 'FIX Arthur does a favor for Abigail and takes Jack out on a fishing trip.',
                region: 'Lemoyne'
            },
        ],
    },
    {
        id: 'ch4',
        name: 'Saint Denis',
        label: 'Chapter 04',
        color: 'var(--slate)',
        items: [
            {
                id: 'm4-1',
                name: 'Banking, the Old American Art',
                subtitle: 'Dutch van der Linde',
                description: 'FIX The gang prepare to rob the bank in Saint Denis as one final score that would allow them to retire.',
                region: 'Lemoyne'
            },
            {
                id: 'm4-2',
                name: 'Advertising, the New American Art',
                subtitle: 'Abigail Roberts/Hosea Matthews',
                description: 'FIX Catherine Braithwaite pays Hosea and Arthur to head into Rhodes and hand out the stolen moonshine for free at the local saloon.',
                region: 'Lemoyne'
            },
            {
                id: 'm4-3',
                name: 'The Gilded Cage',
                subtitle: 'Hosea Matthews & Dutch van der Linde',
                description: 'FIX The gang attend a party hosted by the Mayor of Saint Denis. While at the party, they meet with Bronte, and look for job opportunities.',
                region: 'Lemoyne'
            },
        ],
    },
]