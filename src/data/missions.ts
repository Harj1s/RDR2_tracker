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
            {
                id: 'm1-4',
                name: 'The Aftermath of Genesis',
                subtitle: 'Simon Pearson',
                tagline: 'Tagline for m1-4',
                description: "FIX With the gang low on supplies and starving, Mr. Pearson sends Arthur and Charles out hunting.",
                region: 'Ambarino',
                gold: [
                    { id: 'm1-4:gold-1', text: 'Kill each deer with one arrow' },
                    { id: 'm1-4:gold-2', text: 'Do not spook either deer' },
                    { id: 'm1-4:gold-3', text: 'Get a clean kill on the second deer' },
                ]
            },
            {
                id: 'm1-5',
                name: 'Who the Hell is Leviticus Cornwall?',
                subtitle: 'John Marston / Dutch van der Linde',
                tagline: 'Tagline for m1-5',
                description: "FIX In need of money, and with the plans and explosives stolen from the O'Driscolls' camp, the gang rides out to rob Leviticus Cornwall's private train.",
                region: 'Ambarino',
                gold: [
                    { id: 'm1-5:gold-1', text: 'Save Lenny when he is hanging from the train' },
                    { id: 'm1-5:gold-2', text: 'After stopping the train, take out the guards within 1 minute 30 seconds' },
                    { id: 'm1-5:gold-3', text: 'Take no damage during the shootout' },
                    { id: 'm1-5:gold-4', text: 'Get 10 headshots' },
                    { id: 'm1-5:gold-5', text: 'Complete the mission without taking any health items' },
                ]
            },
                        {
                id: 'm1-6',
                name: 'Eastward Bound',
                subtitle: 'Dutch van der Linde',
                tagline: 'Tagline for m1-6',
                description: "FIX With renewed strength and the weather finally stable, the gang rides down from the mountains to set up camp at Horseshoe Overlook.",
                region: 'New Hanover',
                gold: [
                    { id: 'm1-6:gold-1', text: 'Pick up Javier when entering Horseshoe Overlook' },
                    { id: 'm1-6:gold-2', text: 'Complete within 6 minutes' },
                ]
            }
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
                subtitle: 'Javier Escuella',
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
                name: 'Money Lending and Other Sins I & II',
                subtitle: 'Leopold Strauss',
                tagline: 'Tagline for m2-3',
                description: 'FIX At the camp, Strauss asks Arthur to retrieve money from three debtors that owe him money. Arthur must collect debts from ranch hand Chick Matthews, Polish smallholder farmer Mr. Wróbel, and ranch maid Lilly Millet.',
                region: 'New Hanover'
            },
            {
                id: 'm2-4',
                name: 'Good, Honest, Snake Oil',
                subtitle: '',
                tagline: 'Tagline for m2-4',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-4:gold-1', text: '' },
                    { id: 'm2-4:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-5',
                name: 'Who is Not without Sin',
                subtitle: '',
                tagline: 'Tagline for m2-5',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-5:gold-1', text: '' },
                    { id: 'm2-5:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-6',
                name: 'Money Lending and Other Sins III',
                subtitle: '',
                tagline: 'Tagline for m2-6',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-6:gold-1', text: '' },
                    { id: 'm2-6:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-7',
                name: 'Exit Pursued by a Bruised Ego',
                subtitle: '',
                tagline: 'Tagline for m2-7',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-7:gold-1', text: '' },
                    { id: 'm2-7:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-8',
                name: 'Paying a Social Call',
                subtitle: '',
                tagline: 'Tagline for m2-8',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-8:gold-1', text: '' },
                    { id: 'm2-8:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-9',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-9',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-9:gold-1', text: '' },
                    { id: 'm2-9:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-10',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-10',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-10:gold-1', text: '' },
                    { id: 'm2-10:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-11',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-11',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-11:gold-1', text: '' },
                    { id: 'm2-11:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-12',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-12',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-12:gold-1', text: '' },
                    { id: 'm2-12:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-13',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-13',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-13:gold-1', text: '' },
                    { id: 'm2-13:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-14',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-14',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-14:gold-1', text: '' },
                    { id: 'm2-14:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-15',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-15',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-15:gold-1', text: '' },
                    { id: 'm2-15:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-16',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-16',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-16:gold-1', text: '' },
                    { id: 'm2-16:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-17',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-17',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-17:gold-1', text: '' },
                    { id: 'm2-17:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-18',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-18',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-18:gold-1', text: '' },
                    { id: 'm2-18:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-19',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-19',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-19:gold-1', text: '' },
                    { id: 'm2-19:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-20',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-20',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-20:gold-1', text: '' },
                    { id: 'm2-20:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-21',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-21',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-21:gold-1', text: '' },
                    { id: 'm2-21:gold-2', text: '' },
                ]
            },
            {
                id: 'm2-22',
                name: '',
                subtitle: '',
                tagline: 'Tagline for m2-22',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm2-22:gold-1', text: '' },
                    { id: 'm2-22:gold-2', text: '' },
                ]
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
                name: 'Further Questions of Female Suffrage',
                subtitle: '',
                tagline: 'Tagline for m3-1',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-1:gold-1', text: '' },
                    { id: 'm3-1:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-2',
                name: 'The New South',
                subtitle: '',
                tagline: 'Tagline for m3-2',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-2:gold-1', text: '' },
                    { id: 'm3-2:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-3',
                name: 'The Course of True Love - I & II',
                subtitle: '',
                tagline: 'Tagline for m3-3',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-3:gold-1', text: '' },
                    { id: 'm3-3:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-4',
                name: 'The Course of True Love - III',
                subtitle: '',
                tagline: 'Tagline for m3-4',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-4:gold-1', text: '' },
                    { id: 'm3-4:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-5',
                name: 'Money Lending and Other Sins - IV',
                subtitle: '',
                tagline: 'Tagline for m3-5',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-5:gold-1', text: '' },
                    { id: 'm3-5:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-6',
                name: 'American Distillation',
                subtitle: '',
                tagline: 'Tagline for m3-6',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-6:gold-1', text: '' },
                    { id: 'm3-6:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-7',
                name: 'An Honest Mistake',
                subtitle: '',
                tagline: 'Tagline for m3-7',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-7:gold-1', text: '' },
                    { id: 'm3-7:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-8',
                name: 'Preaching Forgiveness as He Went',
                subtitle: '',
                tagline: 'Tagline for m3-8',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-8:gold-1', text: '' },
                    { id: 'm3-8:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-9',
                name: 'Sodom? Back to Gomorrah',
                subtitle: '',
                tagline: 'Tagline for m3-9',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-9:gold-1', text: '' },
                    { id: 'm3-9:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-10',
                name: 'Advertising, the New American Art',
                subtitle: 'Abigail Roberts/Hosea Matthews',
                tagline: 'Tagline for m3-10',
                description: 'FIX Catherine Braithwaite pays Hosea and Arthur to head into Rhodes and hand out the stolen moonshine for free at the local saloon.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-10:gold-1', text: 'Headshot 5 Lemoyne Raiders in the saloon' },
                    { id: 'm3-10:gold-2', text: 'Complete with at least 90% accuracy' },
                    { id: 'm3-10:gold-3', text: 'Complete the mission without taking any health items' },
                ]
            },
            {
                id: 'm3-11',
                name: 'Magicians for Sport',
                subtitle: '',
                tagline: 'Tagline for m3-11',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-11:gold-1', text: '' },
                    { id: 'm3-11:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-12',
                name: 'Horse Flesh for Dinner',
                subtitle: '',
                tagline: 'Tagline for m3-12',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-12:gold-1', text: '' },
                    { id: 'm3-12:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-13',
                name: 'Friends in Very Low Places',
                subtitle: '',
                tagline: 'Tagline for m3-13',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-13:gold-1', text: '' },
                    { id: 'm3-13:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-14',
                name: 'The Fine Joys of Tobacco',
                subtitle: '',
                tagline: 'Tagline for m3-14',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-14:gold-1', text: '' },
                    { id: 'm3-14:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-15',
                name: 'Blessed are the Peacemakers',
                subtitle: '',
                tagline: 'Tagline for m3-15',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-15:gold-1', text: '' },
                    { id: 'm3-15:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-16',
                name: 'A Short Walk in a Pretty Town',
                subtitle: '',
                tagline: 'Tagline for m3-16',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-16:gold-1', text: '' },
                    { id: 'm3-16:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-17',
                name: 'Blood Feuds, Ancient and Modern',
                subtitle: '',
                tagline: 'Tagline for m3-17',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-17:gold-1', text: '' },
                    { id: 'm3-17:gold-2', text: '' },
                ]
            },
            {
                id: 'm3-18',
                name: 'The Battle of Shady Belle',
                subtitle: '',
                tagline: 'Tagline for m3-18',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm3-18:gold-1', text: '' },
                    { id: 'm3-18:gold-2', text: '' },
                ]
            }
        ],
    },
    {
        id: 'ch4',
        name: 'Shady Belle',
        label: 'Chapter 04',
        color: 'var(--slate)',
        items: [
            {
                id: 'm4-1',
                name: 'The Joys of Civilization',
                subtitle: '',
                tagline: 'Tagline for m4-1',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-1:gold-1', text: '' },
                    { id: 'm4-1:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-2',
                name: 'Help a Brother Out',
                subtitle: '',
                tagline: 'Tagline for m4-2',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-2:gold-1', text: '' },
                    { id: 'm4-2:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-3',
                name: 'Brothers and Sisters, One and All',
                subtitle: '',
                tagline: 'Tagline for m4-3',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-3:gold-1', text: '' },
                    { id: 'm4-3:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-4',
                name: 'Angelo Bronte, a Man of Honor',
                subtitle: '',
                tagline: 'Tagline for m4-4',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-4:gold-1', text: '' },
                    { id: 'm4-4:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-5',
                name: 'No, No, and Thrice, No',
                subtitle: '',
                tagline: 'Tagline for m4-5',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-5:gold-1', text: '' },
                    { id: 'm4-5:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-6',
                name: 'Fatherhood and Other Dreams - I & II',
                subtitle: '',
                tagline: 'Tagline for m4-6',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-6:gold-1', text: '' },
                    { id: 'm4-6:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-7',
                name: 'Money Lending and Other Sins - V',
                subtitle: '',
                tagline: 'Tagline for m4-7',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-7:gold-1', text: '' },
                    { id: 'm4-7:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-8',
                name: 'The Gilded Cage',
                subtitle: 'Hosea Matthews & Dutch van der Linde',
                tagline: 'Tagline for m4-8',
                description: 'FIX The gang attend a party hosted by the Mayor of Saint Denis. While at the party, they meet with Bronte, and look for job opportunities.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-8:gold-1', text: 'While at the party, pour some drinks, compliment a guest\'s attire, accept a gift and save a life' },
                    { id: 'm4-8:gold-2', text: 'Follow the servant without being detected' },
                ]
            },
            {
                id: 'm4-9',
                name: 'A Fine Night of Debauchery',
                subtitle: '',
                tagline: 'Tagline for m4-9',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-9:gold-1', text: '' },
                    { id: 'm4-9:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-10',
                name: 'American Fathers - I & II',
                subtitle: '',
                tagline: 'Tagline for m4-10',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-10:gold-1', text: '' },
                    { id: 'm4-10:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-11',
                name: 'Horsemen, Apocalypses',
                subtitle: '',
                tagline: 'Tagline for m4-11',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-11:gold-1', text: '' },
                    { id: 'm4-11:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-12',
                name: 'Urban Pleasures',
                subtitle: '',
                tagline: 'Tagline for m4-12',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-12:gold-1', text: '' },
                    { id: 'm4-12:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-13',
                name: 'Country Pursuits',
                subtitle: '',
                tagline: 'Tagline for m4-13',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-13:gold-1', text: '' },
                    { id: 'm4-13:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-14',
                name: 'Revenge is a Dish Best Eaten',
                subtitle: '',
                tagline: 'Tagline for m4-14',
                description: 'FIX ',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-14:gold-1', text: '' },
                    { id: 'm4-14:gold-2', text: '' },
                ]
            },
            {
                id: 'm4-15',
                name: 'Banking, the Old American Art',
                subtitle: 'Dutch van der Linde',
                tagline: 'Tagline for m4-15',
                description: 'FIX The gang prepare to rob the bank in Saint Denis as one final score that would allow them to retire.',
                region: 'Lemoyne',
                gold: [
                    { id: 'm4-15:gold-1', text: 'Crack the safe without making any mistakes' },
                    { id: 'm4-15:gold-2', text: 'Complete using only sidearms' },
                    { id: 'm4-15:gold-3', text: 'Get 25 headshots' },
                    { id: 'm4-15:gold-4', text: 'Complete the mission without taking any health items' },
                ]
            }
        ],
    },
    {
        id: 'ch5',
        name: 'Guarma',
        label: 'Chapter 05',
        color: 'var(--red)',
        items: [
            {
                id: 'm5-1',
                name: 'Welcome to the New World',
                subtitle: '',
                tagline: 'Tagline for m5-1',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-1:gold-1', text: '' },
                    { id: 'm5-1:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-2',
                name: 'Savagery Unleashed',
                subtitle: '',
                tagline: 'Tagline for m5-2',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-2:gold-1', text: '' },
                    { id: 'm5-2:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-3',
                name: 'A Kind and Benevolent Despot',
                subtitle: '',
                tagline: 'Tagline for m5-3',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-3:gold-1', text: '' },
                    { id: 'm5-3:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-4',
                name: 'Hell Hath No Fury',
                subtitle: '',
                tagline: 'Tagline for m5-4',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-4:gold-1', text: '' },
                    { id: 'm5-4:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-5',
                name: 'Paradise Mercifully Departed',
                subtitle: '',
                tagline: 'Tagline for m5-5',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-5:gold-1', text: '' },
                    { id: 'm5-5:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-6',
                name: 'Dear Uncle Tacitus',
                subtitle: '',
                tagline: 'Tagline for m5-6',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-6:gold-1', text: '' },
                    { id: 'm5-6:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-7',
                name: 'Fleeting Joy',
                subtitle: '',
                tagline: 'Tagline for m5-7',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-7:gold-1', text: '' },
                    { id: 'm5-7:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-8',
                name: 'A Fork in the Road',
                subtitle: '',
                tagline: 'Tagline for m5-8',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-8:gold-1', text: '' },
                    { id: 'm5-8:gold-2', text: '' },
                ]
            },
            {
                id: 'm5-9',
                name: 'That\'s Murfree Country',
                subtitle: '',
                tagline: 'Tagline for m5-9',
                description: 'FIX ',
                region: 'Guarma',
                gold: [
                    { id: 'm5-9:gold-1', text: '' },
                    { id: 'm5-9:gold-2', text: '' },
                ]
            }
        ],
    },
    {
        id: 'ch6',
        name: 'Beaver Hollow',
        label: 'Chapter 06',
        color: 'var(--gold)',
        items: [
            {
                id: 'm6-1',
                name: 'Icarus and Friends',
                subtitle: '',
                tagline: 'Tagline for m6-1',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-1:gold-1', text: '' },
                    { id: 'm6-1:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-2',
                name: 'Of Men and Angels',
                subtitle: '',
                tagline: 'Tagline for m6-2',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-2:gold-1', text: '' },
                    { id: 'm6-2:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-3',
                name: 'Do Not Seek Absolution - I',
                subtitle: '',
                tagline: 'Tagline for m6-3',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-3:gold-1', text: '' },
                    { id: 'm6-3:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-4',
                name: 'Do Not Seek Absolution - II',
                subtitle: '',
                tagline: 'Tagline for m6-4',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-4:gold-1', text: '' },
                    { id: 'm6-4:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-5',
                name: 'Visiting Hours',
                subtitle: '',
                tagline: 'Tagline for m6-5',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-5:gold-1', text: '' },
                    { id: 'm6-5:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-6',
                name: 'The Course of True Love - IV & V',
                subtitle: '',
                tagline: 'Tagline for m6-6',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-6:gold-1', text: '' },
                    { id: 'm6-6:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-7',
                name: 'Just a Social Call',
                subtitle: '',
                tagline: 'Tagline for m6-7',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-7:gold-1', text: '' },
                    { id: 'm6-7:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-8',
                name: 'A Rage Unleashed',
                subtitle: '',
                tagline: 'Tagline for m6-8',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-8:gold-1', text: '' },
                    { id: 'm6-8:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-9',
                name: 'The Delights of Van Horn',
                subtitle: '',
                tagline: 'Tagline for m6-9',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-9:gold-1', text: '' },
                    { id: 'm6-9:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-10',
                name: 'The Bridge to Nowhere',
                subtitle: '',
                tagline: 'Tagline for m6-10',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-10:gold-1', text: '' },
                    { id: 'm6-10:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-11',
                name: 'Archeology for Beginners',
                subtitle: '',
                tagline: 'Tagline for m6-11',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-11:gold-1', text: '' },
                    { id: 'm6-11:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-12',
                name: 'Honor, Amongst Thieves',
                subtitle: '',
                tagline: 'Tagline for m6-12',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-12:gold-1', text: '' },
                    { id: 'm6-12:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-13',
                name: 'Money Lending and Other Sins - VI & VII',
                subtitle: '',
                tagline: 'Tagline for m6-13',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-13:gold-1', text: '' },
                    { id: 'm6-13:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-14',
                name: 'Goodbye, Dear Friend',
                subtitle: '',
                tagline: 'Tagline for m6-14',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-14:gold-1', text: '' },
                    { id: 'm6-14:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-15',
                name: 'The Fine Art of Conversation',
                subtitle: '',
                tagline: 'Tagline for m6-15',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-15:gold-1', text: '' },
                    { id: 'm6-15:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-16',
                name: 'Favored Sons',
                subtitle: '',
                tagline: 'Tagline for m6-16',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-16:gold-1', text: '' },
                    { id: 'm6-16:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-17',
                name: 'Mrs. Sadie Adler, Widow - I & II',
                subtitle: '',
                tagline: 'Tagline for m6-17',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-17:gold-1', text: '' },
                    { id: 'm6-17:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-18',
                name: 'The King\'s Son',
                subtitle: '',
                tagline: 'Tagline for m6-18',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-18:gold-1', text: '' },
                    { id: 'm6-18:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-19',
                name: 'My Last Boy',
                subtitle: '',
                tagline: 'Tagline for m6-19',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-19:gold-1', text: '' },
                    { id: 'm6-19:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-20',
                name: 'Our Best Selves',
                subtitle: '',
                tagline: 'Tagline for m6-20',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-20:gold-1', text: '' },
                    { id: 'm6-20:gold-2', text: '' },
                ]
            },
            {
                id: 'm6-21',
                name: 'Red Dead Redemption',
                subtitle: '',
                tagline: 'Tagline for m6-21',
                description: 'FIX ',
                region: 'New Hanover',
                gold: [
                    { id: 'm6-21:gold-1', text: '' },
                    { id: 'm6-21:gold-2', text: '' },
                ]
            }
        ],
    },
    {
        id: 'ep1',
        name: 'Pronghorn Ranch',
        label: 'Epilogue Part 1',
        color: 'var(--sage)',
        items: [
            {
                id: 'ep1-1',
                name: 'The Wheel',
                subtitle: '',
                tagline: 'Tagline for ep1-1',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-1:gold-1', text: '' },
                    { id: 'ep1-1:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-2',
                name: 'Simple Pleasures',
                subtitle: '',
                tagline: 'Tagline for ep1-2',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-2:gold-1', text: '' },
                    { id: 'ep1-2:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-3',
                name: 'Fatherhood, for Beginners',
                subtitle: '',
                tagline: 'Tagline for ep1-3',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-3:gold-1', text: '' },
                    { id: 'ep1-3:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-4',
                name: 'Farming, for Beginners',
                subtitle: '',
                tagline: 'Tagline for ep1-4',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-4:gold-1', text: '' },
                    { id: 'ep1-4:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-5',
                name: 'Old Habits',
                subtitle: '',
                tagline: 'Tagline for ep1-5',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-5:gold-1', text: '' },
                    { id: 'ep1-5:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-6',
                name: 'Jim Milton Rides, Again?',
                subtitle: '',
                tagline: 'Tagline for ep1-6',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-6:gold-1', text: '' },
                    { id: 'ep1-6:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-7',
                name: 'Fatherhood, for Idiots',
                subtitle: '',
                tagline: 'Tagline for ep1-7',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-7:gold-1', text: '' },
                    { id: 'ep1-7:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-8',
                name: 'Motherhood',
                subtitle: '',
                tagline: 'Tagline for ep1-8',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-8:gold-1', text: '' },
                    { id: 'ep1-8:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-9',
                name: 'Gainful Employment',
                subtitle: '',
                tagline: 'Tagline for ep1-9',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-9:gold-1', text: '' },
                    { id: 'ep1-9:gold-2', text: '' },
                ]
            },
            {
                id: 'ep1-10',
                name: 'Home of the Gentry?',
                subtitle: '',
                tagline: 'Tagline for ep1-10',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep1-10:gold-1', text: '' },
                    { id: 'ep1-10:gold-2', text: '' },
                ]
            }
        ],
    },
    {
        id: 'ep2',
        name: 'Beecher\'s Hope',
        label: 'Epilogue Part 2',
        color: 'var(--slate)',
        items: [
            {
                id: 'ep2-1',
                name: 'Bare Knuckle Friendships',
                subtitle: '',
                tagline: 'Tagline for ep2-1',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-1:gold-1', text: '' },
                    { id: 'ep2-1:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-2',
                name: 'Home Improvement for Beginners',
                subtitle: '',
                tagline: 'Tagline for ep2-2',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-2:gold-1', text: '' },
                    { id: 'ep2-2:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-3',
                name: 'An Honest Day\'s Labors',
                subtitle: '',
                tagline: 'Tagline for ep2-3',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-3:gold-1', text: '' },
                    { id: 'ep2-3:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-4',
                name: 'The Tool Box',
                subtitle: '',
                tagline: 'Tagline for ep2-4',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-4:gold-1', text: '' },
                    { id: 'ep2-4:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-5',
                name: 'A New Jerusalem',
                subtitle: '',
                tagline: 'Tagline for ep2-5',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-5:gold-1', text: '' },
                    { id: 'ep2-5:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-6',
                name: 'A Quick Favor for an Old Friend',
                subtitle: '',
                tagline: 'Tagline for ep2-6',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-6:gold-1', text: '' },
                    { id: 'ep2-6:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-7',
                name: 'Uncle\'s Bad Day',
                subtitle: '',
                tagline: 'Tagline for ep2-7',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-7:gold-1', text: '' },
                    { id: 'ep2-7:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-8',
                name: 'Trying Again',
                subtitle: '',
                tagline: 'Tagline for ep2-8',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-8:gold-1', text: '' },
                    { id: 'ep2-8:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-9',
                name: 'A Really Big Bastard',
                subtitle: '',
                tagline: 'Tagline for ep2-9',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-9:gold-1', text: '' },
                    { id: 'ep2-9:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-10',
                name: 'A New Future Imagined',
                subtitle: '',
                tagline: 'Tagline for ep2-10',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-10:gold-1', text: '' },
                    { id: 'ep2-10:gold-2', text: '' },
                ]
            },
            {
                id: 'ep2-11',
                name: 'American Venom',
                subtitle: '',
                tagline: 'Tagline for ep2-11',
                description: 'FIX ',
                region: 'West Elizabeth',
                gold: [
                    { id: 'ep2-11:gold-1', text: '' },
                    { id: 'ep2-11:gold-2', text: '' },
                ]
            }
        ],
    }
]