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
                tagline: 'Tagline for m1-1',
                description: 'FIX Half frozen, close to death, and on the run, the Van der Linde gang find shelter in an old abandoned mining town. Dutch, Arthur, and Micah head out to look for supplies.',
                region: 'Ambarino',
                gold: [
                    { id: 'm1-1:gold-1', text: 'Take no damage during the shootout' },
                    { id: 'm1-1:gold-2', text: 'Loot 6 or more items from Adler Ranch' },
                    { id: 'm1-1:gold-3', text: 'Complete with at least 80% accuracy' },
                ]
            },
            { 
                id: 'm1-2',
                name: 'Enter, Pursued by a Memory',
                subtitle: 'Abigail Roberts',
                tagline: 'Tagline for m1-2',
                description: 'FIX John Marston has not returned from an earlier scouting trip. Arthur Morgan and Javier Escuella ride out into the snow to look for him.',
                region: 'Ambarino',
                gold: [
                    { id: 'm1-2:gold-1', text: 'Kill all the wolves without taking any damage' },
                    { id: 'm1-2:gold-2', text: 'Complete with at least 80% accuracy' },
                ]
            },
            { 
                id: 'm1-3',
                name: 'Old Friends',
                subtitle: 'Bill Williamson',
                tagline: 'Tagline for m1-3',
                description: "FIX Looking for information on the O'Driscolls' planned train job, Dutch leads the gang to attack their camp at Ewing Basin.",
                region: 'Ambarino',
                gold: [
                    { id: 'm1-3:gold-1', text: 'Catch and hogtie Kieran within 45 seconds' },
                    { id: 'm1-3:gold-2', text: "Kill 3 O'driscolls in the same Dead Eye use" },
                    { id: 'm1-3:gold-3', text: 'Complete within 15 minutes and 30 seconds' },
                    { id: 'm1-3:gold-4', text: 'Get 15 headshots' },
                    { id: 'm1-3:gold-5', text: 'Complete the mission without taking any health items' },
                ]
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
                tagline: 'Tagline for m2-1',
                description: 'FIX In search of new leads for the gang, Karen, Tilly and Mary-Beth convince Arthur and Uncle to ride out to Valentine with them.',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-1:gold-1', text: 'Return the lost wagon horse to its owner' },
                    { id: 'm2-1:gold-2', text: 'Find Kieran within 45 seconds' },
                ]
            },
            {
                id: 'm2-2',
                name: 'Americans at Rest',
                subtitle: 'Javies Escuella',
                tagline: 'Tagline for m2-2',
                description: "FIX Bill starts a brawl in Smithfield's Saloon in Valentine as Javier, Charles and Arthur attempt to charm the locals.",
                region: 'New Hanover',
                gold: [
                    { id: 'm2-2:gold-1', text: 'Save Javier within 15 seconds' },
                    { id: 'm2-2:gold-2', text: 'Defeat Tommy within 1 minute and 30 seconds' },
                ]
            },
            {
                id: 'm2-3',
                name: 'Money Lending and Other Sins I',
                subtitle: 'Leopold Strauss',
                tagline: 'Tagline for m2-3',
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
                tagline: 'Tagline for m3-1',
                description: "FIX Arthur takes Lenny for a quiet drink in Valentine to help calm him down after learning of Micah's arrest in Strawberry.",
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-1:gold-1', text: 'Try to make amends with an old rival' },
                    { id: 'm3-1:gold-2', text: 'Catch Lenny in the act' },
                    { id: 'm3-1:gold-3', text: "Don't get arrested" },
                ]
            },
            {
                id: 'm3-2',
                name: 'The Spines of America',
                subtitle: 'Hosea Matthews',
                tagline: 'Tagline for m3-2',
                description: 'FIX To prove their business credentials to the Emerald Ranch fence, Seamus, Arthur, and Hosea attempt to rob a stagecoach from Old Bob Crawford at Carmody Dell.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-2:gold-1', text: 'Loot everything from Carmody Dell' },
                    { id: 'm3-2:gold-2', text: "Don't get spotted" },
                    { id: 'm3-2:gold-3', text: 'Deliver the wagon to Emerald Ranch within 1 minute and 10 seconds' },
                ]
            },
            {
                id: 'm3-3',
                name: 'A Fisher of Men',
                subtitle: 'Abigail Roberts',
                tagline: 'Tagline for m3-3',
                description: 'FIX Arthur does a favor for Abigail and takes Jack out on a fishing trip.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-3:gold-1', text: 'After arriving at the river, catch a fish within 1 minute and 30 seconds' },
                    { id: 'm3-3:gold-2', text: 'Complete within 7 minutes and 20 seconds' },
                ]
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
                tagline: 'Tagline for m4-1',
                description: 'FIX The gang prepare to rob the bank in Saint Denis as one final score that would allow them to retire.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-1:gold-1', text: 'Crack the safe without making any mistakes' },
                    { id: 'm4-1:gold-2', text: 'Complete using only sidearms' },
                    { id: 'm4-1:gold-3', text: 'Get 25 headshots' },
                    { id: 'm4-1:gold-4', text: 'Complete the mission without taking any health items' },
                ]
            },
            {
                id: 'm4-2',
                name: 'Advertising, the New American Art',
                subtitle: 'Abigail Roberts/Hosea Matthews',
                tagline: 'Tagline for m4-2',
                description: 'FIX Catherine Braithwaite pays Hosea and Arthur to head into Rhodes and hand out the stolen moonshine for free at the local saloon.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-2:gold-1', text: 'Headshot 5 Lemoyne Raiders in the saloon' },
                    { id: 'm4-2:gold-2', text: 'Complete with at least 90% accuracy' },
                    { id: 'm4-2:gold-3', text: 'Complete the mission without taking any health items' },
                ]
            },
            {
                id: 'm4-3',
                name: 'The Gilded Cage',
                subtitle: 'Hosea Matthews & Dutch van der Linde',
                tagline: 'Tagline for m4-3',
                description: 'FIX The gang attend a party hosted by the Mayor of Saint Denis. While at the party, they meet with Bronte, and look for job opportunities.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-3:gold-1', text: "While at the party, pour some drinks, compliment a guest's attire, accept a gift and save a life" },
                    { id: 'm4-3:gold-2', text: 'Follow the servant without being detected' },
                ]
            },
        ],
    },
]