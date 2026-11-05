import type { TrackedGroup, TrackedItem } from './types.ts'

export type Achievement = TrackedItem
export type Achievements = TrackedGroup

const achievement = (
    id: string,
    name: string,
    subtitle: string,
): Achievement => ({ id, name, subtitle })

export const achievements: Achievements[] = [
    {
        id: 'story-achievements',
        name: 'Story Achievements',
        items: [
            achievement('1','Back in the Mud','Complete Chapter 1.'),
            achievement('2','Just a Scratch',"Complete 'Enter, Pursued by a Memory'."),
            achievement('3','To Greener Pastures','Complete Chapter 2.'),
            achievement('4','Settling Feuds','Complete Chapter 3.'),
            achievement('5','Washed Ashore','Complete Chapter 4.'),
            achievement('6','No Traitors','Complete Chapter 5.'),
            achievement('7','Lending a Hand','Complete all optional Honor story missions.'),
            achievement('8','Third Time Lucky',"Complete 'Goodbye, Dear Friend'."),
            achievement('9','Redemption',"Complete 'Red Dead Redemption'."),
            achievement('10','Cowboy Builder',"Complete 'A New Jerusalem'."),
            achievement('11','Endless Summer','Complete the Epilogue.'),
            achievement('12','Best in the West','Attain 100% completion.'),
            achievement('13','Gold Rush','Earn 70 Gold Medals in Story missions.'),
            achievement('14','Friends with Benefits','Complete a Companion Activity in each camp.'),
            achievement('15','Hobby Horse','Play all mini games.'),
            achievement('16','Breaking and Entering','Recover the stash from 4 homesteads.'),
            achievement('17','Artificial Intelligence','Discover the fate of Marko Dragic.'),
            achievement('18','Take From the Rich','Rob or loot $250.'),
            achievement('19','Give to the Poor','Donate $250 to the gang tithing box.'),
            achievement('20','Pony Up','Spend $5000 across all shops.'),
            achievement('21','Extreme personality','Reach maximum or minimum Honor level.'),
            achievement('22','Western Stranger','Complete 10 Stranger mission strands.'),
            achievement('23',"Collector's Item",'Complete one of the Collectable strands.'),
            achievement('24','Bountiful','Survive 3 days holding a bounty of $250 in all states.'),
            achievement('25','Paying Respects','Find the graves of each of your fallen companions.'),
            achievement('26','Errand Boy','Deliver 5 camp companion item requests.'),
            achievement('27',"It's Art",'Find a permanent home for the squirrel statue.'),
            achievement('28','Self Sufficient','Craft 30 unique items in Story Mode.'),
            achievement('29','Skin Deep','Skin every species of animal in Story Mode.'),
            achievement('30','Zoologist','Study every animal across all states in Story Mode.'),
            achievement('31','It was THIS Big!','Catch a fish weighing at least 16 lbs. (7.3 kg).'),
            achievement('32','Locked and Loaded','Upgrade each available component for a single sidearm or longarm weapon.'),
            achievement('33','Grin and Bear it','Survive 18 bear attacks and kill the bear each time in Story Mode.'),
            achievement('34','Trusty Steed','Reach max bonding level with a horse.'),
        ],
    },
    {
        id: 'online-achievements',
        name: 'Online Achievements',
        items: [
            achievement('35','Breakout','Red Dead Online: Complete the Intro.'),
            achievement('36','Series Major','Red Dead Online: Take part in a Series.'),
            achievement('37','Gun For Hire','Red Dead Online: Accept 10 Free Roam missions from character around the world.'),
            achievement('38','Eventful','Red Dead Online: Play 5 Free Roam Events.'),
            achievement('39','Buckle Up','Red Dead Online: Achieve 5 gold belt buckles from awards.',),
            achievement('40','The Real Deal','Red Dead Online: Achieve MVP 3 times (in a round with at least 4 players).'),
            achievement('41','Horses for Courses','Red Dead Online: Concurrently own 5 horses.'),
            achievement('42','Getting Started','Red Dead Online: Reach Rank 10.'),
            achievement('43','Notorious','Red Dead Online: Reach Rank 50.'),
            achievement('44',"All's Fair","Red Dead Online: Successfully counter a rival Posse's Free Roam mission."),
            achievement('45','Home Comforts','Red Dead Online: Purchase 5 camp improvements.'),
            achievement('46','Non-Regulation','Red Dead Online: Craft 25 pieces of ammunition.'),
            achievement('47','Posse Up','Red Dead Online: Form a Persistent Posse.'),
            achievement('48','Master Craftsman','Red Dead Online: Craft 20 items (exlcluding ammo).'),
            achievement('49','Butchered','Red Dead Online: Sell 20 items to the Butcher.'),
            achievement('50','Picked to Perfection','Red Dead Online: Pick 25 Herbs.'),
            achievement('51','Strength in Numbers','Red Dead Online: Complete a Free Roam mission as part of a Posse with at least 2 members.')
        ],
    },
]