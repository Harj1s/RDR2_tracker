import type { TrackedGroup, TrackedItem } from './types'

type StrangerMissionDetails = readonly [
    name: string,
    giver: string,
    description: string,
    available: string, 
    region?: string,
    part?: number,
    closes?: string,
]

const strangerMissionDetails: Record<string, StrangerMissionDetails> = {
    's1-1': ['A Better World, A New Friend', 'L. Hobbs', 'Arthur finds a wildlife artist’s hunting requests at a post office and begins collecting the specimens she needs.', 'Chapter 2', undefined, 1],
    's1-2': ['A Better World, A New Friend', 'L. Hobbs', 'Arthur completes the final hunting request and meets Hobbs to receive her reward.', 'Epilogue', undefined, 2],
    
    's2-1': ['A Bright Bouncing Boy', 'Marco Dragic', 'Arthur meets inventor Marco Dragic in Saint Denis and helps him demonstrate a remote-controlled boat.', 'Chapter 4', 'Saint Denis', 1],
    's2-2': ['A Bright Bouncing Boy', 'Marco Dragic', 'Arthur helps Dragic gather equipment in the wilderness and test his experimental machine.', 'Chapter 4', 'Roanoke Ridge', 2],
    
    's3': ['A Fine Night For It', 'Old Cajun', 'Arthur helps an old man survive an attack by the Night Folk in the Bayou.', 'Chapter 2', 'Bluewater Marsh, Lemoyne'],
    
    's4-1': ['A Fisher of Fish', 'Jeremy Gill', 'Arthur meets fisherman Jeremy Gill and agrees to catch and mail him a collection of legendary fish.', 'm2-13', 'The Heartlands, New Hanover', 1],
    's4-2': ['A Fisher of Fish', 'Jeremy Gill', 'After mailing all the legendary fish, Arthur joins Gill on a fishing trip to catch one final specimen.', 'After mailing all 13 legendary fish', 'Rio Bravo, New Austin', 2],
    
    's5-1': ['A Test of Faith', 'Deborah MacGuiness', 'Arthur meets amateur paleontologist Deborah MacGuiness and agrees to find and mail her dinosaur bones.', 'Chapter 2', 'The Heartlands, New Hanover', 1],
    's5-2': ['A Test of Faith', 'Deborah MacGuiness', 'Arthur follows up with MacGuiness after mailing the dinosaur bones and receives news of her discovery.', 'After mailing all 30 dinosaur bones', 'The Heartlands, New Hanover', 2],
    
    's6': ['All That Glitters', 'Maximo Cristobal Valdespino', 'An eccentric explorer offers Arthur a treasure map for a price near Flatneck Station.', 'Chapter 2', 'The Heartlands, New Hanover'],

    's7': ['American Dreams', 'Unknown', 'Arthur investigates a series of grisly murder scenes, follows the killer’s clues, and confronts the murderer.', 'Chapter 2', 'The Heartlands, New Hanover'],
    
    's8-1': ['Arcadia for Amateurs', 'Albert Mason', 'Arthur helps wildlife photographer Albert Mason escape a pack of wolves and recover his equipment.', 'Chapter 2', 'The Heartlands, New Hanover', 1],
    's8-2': ['Arcadia for Amateurs', 'Albert Mason', 'Arthur helps Mason photograph wild horses and round up the herd for him.', 'After Part 1', 'The Heartlands, New Hanover', 2],
    's8-3': ['Arcadia for Amateurs', 'Albert Mason', 'Arthur helps Mason photograph alligators in the Bayou before the animals turn on them.', 'After Part 2', 'Bluewater Marsh, Lemoyne', 3],
    's8-4': ['Arcadia for Amateurs', 'Albert Mason', 'Arthur helps Mason observe wolves and protects him when the pack becomes dangerous.', 'After Part 3', 'Big Valley, West Elizabeth', 4],
    's8-5': ['Arcadia for Amateurs', 'Albert Mason', 'Arthur rescues Mason from a cougar while the photographer tries to capture his final wildlife shot.', 'After Part 4', 'Big Valley, West Elizabeth', 5],
    
    's9-1': ['Duchesses and Other Animals', 'Algernon Wasp', 'Arthur accepts Algernon Wasp’s request to find rare orchids, bird plumes, and other exotic items.', 'Chapter 4', 'Saint Denis', 1],
    's9-2': ['Duchesses and Other Animals', 'Algernon Wasp', 'Arthur gathers the next collection of rare plants and feathers for Wasp.', 'After Part 1', 'Saint Denis', 2],
    's9-3': ['Duchesses and Other Animals', 'Algernon Wasp', 'Arthur searches the swamps and woodlands for another set of Wasp’s requested specimens.', 'After Part 2', 'Saint Denis', 3],
    's9-4': ['Duchesses and Other Animals', 'Algernon Wasp', 'Arthur completes another order by collecting rare orchids and plumes for Wasp.', 'After Part 3', 'Saint Denis', 4],
    's9-5': ['Duchesses and Other Animals', 'Algernon Wasp', 'Arthur tracks down the remaining exotic specimens on Wasp’s latest list.', 'After Part 4', 'Saint Denis', 5],
    's9-6': ['Duchesses and Other Animals', 'Algernon Wasp', 'Arthur delivers the final collection to Wasp and receives his reward.', 'After Part 5', 'Saint Denis', 6],

    's10': ['Fundraiser', 'Fundraiser', 'A Saint Denis fundraiser asks Arthur to contribute money toward a memorial hall.', 'Chapter 4', 'Saint Denis'],

    's11-1': ['Geology for Beginners', 'Francis Sinclair', 'Arthur meets Francis Sinclair and agrees to locate and mail him information about rock carvings.', 'Chapter 2', 'The Heartlands, New Hanover', 1],
    's11-2': ['Geology for Beginners', 'Francis Sinclair', 'Arthur returns to Sinclair after finding the carvings and learns the strange reason for his research.', 'After mailing all 10 rock carving locations', 'The Heartlands, New Hanover', 2],

    's12-1': ['He’s British, of Course', 'Margaret', 'Arthur meets circus performer Margaret, whose escaped animal act has left him without his animals.', 'Chapter 3', 'Bluewater Marsh, Lemoyne', 1],
    's12-2': ['He’s British, of Course', 'Margaret', 'Arthur searches for Margaret’s missing zebra and brings it back to the traveling show.', 'After Part 1', 'The Heartlands, New Hanover', 2],
    's12-3': ['He’s British, of Course', 'Margaret', 'Arthur tracks down an escaped tiger and helps Margaret get it back to the wagon.', 'After Part 2', 'The Heartlands, New Hanover', 3],
    's12-4': ['He’s British, of Course', 'Margaret', 'Arthur searches for the missing lion and discovers that this animal is more dangerous than it appears.', 'After Part 3', 'The Heartlands, New Hanover', 4],
    's12-5': ['He’s British, of Course', 'Margaret', 'Arthur helps Margaret deal with the escaped lion and brings the troubled act to a close.', 'After Part 4', 'The Heartlands, New Hanover', 5],

    's13-1': ['Idealism and Pragmatism for Beginners', 'Jean-Marc Mercier', 'Saint Denis mayor Henri Lemieux asks Arthur to help with a political problem involving his secretary.', 'Chapter 4', 'Saint Denis', 1],
    's13-2': ['Idealism and Pragmatism for Beginners', 'Jean-Marc Mercier', 'Arthur carries out a discreet errand for the mayor and helps keep his dealings out of the public eye.', 'After Part 1', 'Saint Denis', 2],
    's13-3': ['Idealism and Pragmatism for Beginners', 'Jean-Marc Mercier', 'Arthur returns to Lemieux to settle the dispute with Jean-Marc and decide the secretary’s fate.', 'After Part 2', 'Saint Denis', 3],

    's14': ['No Good Deed', 'Dr. Alphonse Renaud', 'Arthur searches for Dr. Renaud’s stolen medical wagon and returns it to its owner.', 'Chapter 3', 'Rhodes, Lemoyne'],

    's15-1': ['Oh, Brother', 'Proetus and Acrisius', 'Arthur encounters two brothers competing for the attention of a woman and watches their first foolish challenge.', 'Chapter 4', 'Valentine, New Hanover', 1],
    's15-2': ['Oh, Brother', 'Proetus and Acrisius', 'The brothers return with a more dangerous contest, and Arthur witnesses their escalating rivalry.', 'After Part 1', 'Valentine, New Hanover', 2],
    's15-3': ['Oh, Brother', 'Proetus and Acrisius', 'Arthur finds the brothers again and sees the final consequence of their attempts to prove themselves.', 'After Part 2', 'Valentine, New Hanover', 3],

    's16': ['Smoking and Other Hobbies', 'Phineas T. Ramsbottom', 'Arthur collects cigarette cards and mails complete sets to collector Phineas T. Ramsbottom.', 'Chapter 2', 'The Heartlands, New Hanover'],

    's17-1': ['The American Inferno, Burnt Out', 'Evelyn Miller', 'John meets writer Evelyn Miller, who has withdrawn to a cabin to work on his final book.', 'Epilogue Part 1', 'Big Valley, West Elizabeth', 1],
    's17-2': ['The American Inferno, Burnt Out', 'Evelyn Miller', 'John visits Miller at his cabin and helps him continue working despite interruptions.', 'After Part 1', 'Big Valley, West Elizabeth', 2],
    's17-3': ['The American Inferno, Burnt Out', 'Evelyn Miller', 'John checks on Miller, whose isolation and determination to write are becoming increasingly troubling.', 'After Part 2', 'Big Valley, West Elizabeth', 3],
    's17-4': ['The American Inferno, Burnt Out', 'Evelyn Miller', 'John returns to the cabin and confronts the consequences of Miller’s refusal to leave.', 'After Part 3', 'Big Valley, West Elizabeth', 4],
    's17-5': ['The American Inferno, Burnt Out', 'Evelyn Miller', 'John returns to Miller’s cabin and brings the writer’s story to its tragic conclusion.', 'After Part 4', 'Big Valley, West Elizabeth', 5],

    's18-1': ['The Artist’s Way', 'Charles Châtenay', 'Arthur meets painter Charles Châtenay in Saint Denis and becomes caught up in the artist’s personal troubles.', 'Chapter 4', 'Saint Denis', 1],
    's18-2': ['The Artist’s Way', 'Charles Châtenay', 'Arthur helps Châtenay escape trouble after one of his paintings provokes a hostile reaction.', 'After Part 1', 'Saint Denis', 2],
    's18-3': ['The Artist’s Way', 'Charles Châtenay', 'Arthur helps Châtenay with another risky encounter as the painter prepares to leave the city.', 'After Part 2', 'Saint Denis', 3],
    's18-4': ['The Artist’s Way', 'Charles Châtenay', 'Arthur attends Châtenay’s final exhibition and helps him make his escape from Saint Denis.', 'After Part 3', 'Saint Denis', 4],

    's19-1': ['The Iniquities of History', 'Jeremiah Compson', 'Arthur meets a disgraced former slave catcher who asks him to retrieve belongings from his abandoned home.', 'Chapter 3', 'Rhodes, Lemoyne', 1],
    's19-2': ['The Iniquities of History', 'Jeremiah Compson', 'Arthur confronts Compson about his past after recovering the items from the old house.', 'After Part 1', 'Rhodes, Lemoyne', 2],

    's20-1': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur meets Professor Andrew Bell, who asks for help building a machine for a public execution.', 'Chapter 4', 'Saint Denis', 1],
    's20-2': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur helps Bell obtain the materials needed to construct his electric chair.', 'After Part 1', 'Saint Denis', 2],
    's20-3': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur helps Bell secure funding and supplies for the execution device.', 'After Part 2', 'Saint Denis', 3],
    's20-4': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur deals with the law and the prisoner as Bell prepares to demonstrate his invention.', 'After Part 3', 'Saint Denis', 4],
    's20-5': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur helps Bell make the final preparations for the public execution.', 'After Part 4', 'Saint Denis', 5],
    's20-6': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur attends Bell’s execution and sees whether the professor’s machine works as promised.', 'After Part 5', 'Saint Denis', 6],
    's20-7': ['The Mercies of Knowledge', 'Andrew Bell III', 'Arthur visits Bell after the demonstration and concludes the professor’s ill-fated project.', 'After Part 6', 'Saint Denis', 7],

    's21-1': ['The Noblest of Men, and a Woman', 'Theodore Levin', 'Arthur meets biographer Theodore Levin, who asks him to track down four legendary gunslingers for a book.', 'Chapter 2', 'Valentine, New Hanover', 1],
    's21-2': ['The Noblest of Men, and a Woman', 'Theodore Levin', 'Arthur returns to Levin with information about the gunslingers and follows up on their stories.', 'After meeting the gunslingers', 'Valentine, New Hanover', 2],
    's21-3': ['The Noblest of Men, and a Woman', 'Theodore Levin', 'Arthur reports the outcome of the gunslinger encounters to Levin and helps him complete his account.', 'After Part 2', 'Valentine, New Hanover', 3],
    's21-4': ['The Noblest of Men, and a Woman', 'Theodore Levin', 'Arthur meets Levin again as the biographer pursues the final chapter of his story.', 'After Part 3', 'Valentine, New Hanover', 4],
    's21-5': ['Emmet Granger', 'Emmet Granger', 'Arthur tracks down the former gunslinger, helps with his unpleasant chores, and challenges him to a duel.', 'Chapter 2', 'The Heartlands, New Hanover'],
    's21-6': ['Flaco Hernandez', 'Flaco Hernandez', 'Arthur travels to the mountains to find the outlaw, then faces him and takes his photograph.', 'Chapter 2', 'Grizzlies West, Ambarino'],
    's21-7': ['Billy Midnight', 'Billy Midnight', 'Arthur finds the former gunslinger aboard a train and challenges him to a duel.', 'Chapter 2', 'The Heartlands, New Hanover'],
    's21-8': ['Black Belle', 'Black Belle', 'Arthur visits Black Belle and helps her fight off bounty hunters before photographing her.', 'Chapter 2', 'Bluewater Marsh, Lemoyne'],

    's22-1': ['The Smell of the Grease Paint', 'Miss Marjorie', 'Arthur meets traveling performers Bertram and Magnifico after their show goes awry.', 'Chapter 2', 'Emerald Ranch, New Hanover', 1],
    's22-2': ['The Smell of the Grease Paint', 'Miss Marjorie', 'Arthur tracks down Magnifico and helps reunite the eccentric performer with the troupe.', 'After Part 1', 'The Heartlands, New Hanover', 2],

    's23-1': ['The Ties That Bind Us', 'Mr. Black and Mr. White', 'Arthur meets two escaped convicts and agrees to remove the wanted posters bearing their names.', 'Chapter 4', 'Rhodes, Lemoyne', 1],
    's23-2': ['The Ties That Bind Us', 'Mr. Black and Mr. White', 'Arthur helps the convicts avoid capture after their hiding place is discovered.', 'After Part 1', 'Rhodes, Lemoyne', 2],
    's23-3': ['The Ties That Bind Us', 'Mr. Black and Mr. White', 'Arthur helps the men find another place to hide and deals with the bounty hunters pursuing them.', 'After Part 2', 'Rhodes, Lemoyne', 3],
    's23-4': ['The Ties That Bind Us', 'Mr. Black and Mr. White', 'Arthur encounters the pair again and learns how their escape attempt has ended.', 'After Part 3', 'Rhodes, Lemoyne', 4],

    's24-1': ['The Veteran', 'Hamish Sinclair', 'Arthur finds veteran Hamish Sinclair injured by the roadside and helps him recover his horse, Buell.', 'Chapter 6', 'Grizzlies East, Ambarino', 1],
    's24-2': ['The Veteran', 'Hamish Sinclair', 'Arthur visits Hamish and joins him on a fishing trip at O’Creagh’s Run.', 'After Part 1', 'Grizzlies East, Ambarino', 2],
    's24-3': ['The Veteran', 'Hamish Sinclair', 'Arthur joins Hamish on a hunt for a dangerous wild boar.', 'After Part 2', 'Grizzlies East, Ambarino', 3],
    's24-4': ['The Veteran', 'Hamish Sinclair', 'Arthur and Hamish hunt a wolf together, with Buell accompanying them.', 'After Part 3', 'Grizzlies East, Ambarino', 4],

    's25-1': ['The Wisdom of the Elders', 'Obediah Hinton', 'Arthur meets Obediah Hinton and investigates the strange troubles affecting Butcher Creek.', 'Chapter 6', 'Butcher Creek, New Hanover', 1],
    's25-2': ['The Wisdom of the Elders', 'Obediah Hinton', 'Arthur helps the villagers deal with a threat in the woods and begins investigating their sickness.', 'After Part 1', 'Butcher Creek, New Hanover', 2],
    's25-3': ['The Wisdom of the Elders', 'Obediah Hinton', 'Arthur searches for the source of the illness affecting the people of Butcher Creek.', 'After Part 2', 'Butcher Creek, New Hanover', 3],
    's25-4': ['The Wisdom of the Elders', 'Obediah Hinton', 'Arthur investigates the creek and uncovers evidence connected to the villagers’ illness.', 'After Part 3', 'Butcher Creek, New Hanover', 4],
    's25-5': ['The Wisdom of the Elders', 'Obediah Hinton', 'Arthur confronts the cause of the poisoning and helps bring the Butcher Creek investigation to a close.', 'After Part 4', 'Butcher Creek, New Hanover', 5],

    's26': ['To the Ends of the Earth', 'William', 'Arthur meets herbalist William, who asks him to collect plants for his research.', 'Chapter 2', 'The Heartlands, New Hanover'],

    's27-1': ['Charlotte Balfour', 'Charlotte Balfour', 'Arthur finds Charlotte alone in the wilderness after her husband’s death and offers to help her survive.', 'Chapter 6', 'Roanoke Ridge, New Hanover', 1],
    's27-2': ['Charlotte Balfour', 'Charlotte Balfour', 'Arthur returns to Charlotte and teaches her to hunt so she can provide food for herself.', 'After Part 1', 'Roanoke Ridge, New Hanover', 2],
    's27-3': ['Charlotte Balfour', 'Charlotte Balfour', 'Arthur visits Charlotte again and helps her become more confident living on her own.', 'After Part 2', 'Roanoke Ridge, New Hanover', 3],
}

const makeStrangerItem = ([id, details]: [string, StrangerMissionDetails]): TrackedItem => {
    const [name, giver, description, available, region, part] = details

    return {
        id,
        name,
        subtitle: [giver, part ? `Part ${part}` : undefined, available].filter(Boolean).join(' · '),
        description,
        ...(region ? { details: { region } } : {}),
    }
}

export const strangerMissions: TrackedGroup[] = [
    {
        id: 'strangers',
        name: 'Stranger Missions',
        items: Object.entries(strangerMissionDetails).map(makeStrangerItem),
    },
]

const entriesByStrand: Record<string, [string, StrangerMissionDetails][]> = {}

for (const [id, details] of Object.entries(strangerMissionDetails)) {
    const strandId = id.match(/^s\d+(?=-|$)/)?.[0]

    if (!strandId) {
        throw new Error(`Invalid stranger mission ID: ${id}`)
    }

    if (!entriesByStrand[strandId]) {
        entriesByStrand[strandId] = []
    }

    entriesByStrand[strandId].push([id, details])
}

export const strangerStrands: TrackedGroup[] = Object.entries(entriesByStrand)
    .sort(([a], [b]) => Number(a.slice(1)) - Number(b.slice(1)))
    .map(([strandId, entries]) => ({
        id: `stranger-${strandId}`,
        name: entries[0][1][0],
        items: entries.map(makeStrangerItem),
    }))