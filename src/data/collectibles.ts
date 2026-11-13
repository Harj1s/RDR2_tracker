import type {
    TrackedGroup,
    TrackedItem,
    TrackedItemDetails,
} from './types.ts'

// Curated demo sample, not a full game database

export type Collectible = TrackedItem<TrackedItemDetails>
export type CollectibleCategory = TrackedGroup

const collectible = (
    id: string,
    name: string,
    region: string,
    description = '',
    subtitle = '',
): Collectible => ({
    id,
    name,
    subtitle,
    description,
    details: { region },
})

const cigaretteCardCollections = Array.from({ length: 12 }, (_, collectionIndex) => {
    const collectionNumber = collectionIndex + 1
    const collectionId = `cigarette-card-set-${collectionNumber}`

    return {
        ...collectible(collectionId, `Collection ${collectionNumber}`, '', 'Card titles pending.'),
        details: {
            objectives: Array.from({ length: 12 }, (_, cardIndex) => {
                const cardNumber = cardIndex + 1
                return {
                    id: `${collectionId}-card-${cardNumber}`,
                    text: `Card ${cardNumber} (title pending)`,
                }
            }),
        },
    }
})

export const cigaretteCardCategory: CollectibleCategory = {
    id: 'cigarette-cards',
    name: 'Cigarette Cards',
    details: { color: 'var(--red)' },
    items: cigaretteCardCollections,
}

export const collectibleCategories: CollectibleCategory[] = [
    {
        id: 'bones',
        name: 'Dinosaur bones',
        details: { color: 'var(--gold)' },
        items: [
            collectible('bone-1', 'Bone 1', 'Ambarino', 'North of the "L" in Valentine, on the north side of the Dakota River on a rock cliff.'),
            collectible('bone-2', 'Bone 2', 'Ambarino', 'Slightly west of the bottom of the "I" in "Ambarino" caught in the red rocky outcrop near the top of the hill, hidden by grey rocks.'),
            collectible('bone-3', 'Bone 3', 'Ambarino', 'South of Cotorra Springs on a small ledge just below the top of the cliff.'),
            collectible('bone-4', 'Bone 4', 'Ambarino', 'North of the "O" in "Ambarino". South of the Fairvale Shanty, after crossing the road, on a grassy hill.'),
            collectible('bone-5', 'Bone 5', 'Ambarino', 'Slightly southwest of the "S" in "East" in Grizzlies East on the peak.'),
            collectible('bone-6', 'Bone 6', 'Lemoyne', 'West side of Dewberry Creek, due west of the "rr" in Dewberry.'),
            collectible('bone-7', 'Bone 7', 'Lemoyne', 'South of the "L" in Lemoyne.'),
            collectible('bone-8', 'Bone 8', 'New Hanover', 'Northwest of Valentine at the Dakota River at the top of a cliff, close to the edge.'),
            collectible('bone-9', 'Bone 9', 'New Hanover', 'South of the Cumberland Falls between the two parallel roadways at the base of the rock cliff wall.'),
            collectible('bone-10', 'Bone 10', 'New Hanover', 'North of the "O" from the word "Hanover" in the South of the cabin.'),
            collectible('bone-11', 'Bone 11', 'New Hanover', 'South of the "C" of "Cumberland Forest" at the top of a cliff.'),
            collectible('bone-12', 'Bone 12', 'New Hanover', 'Next to a stone spike at the top of the rock cliff of the mountain southwest of Bacchus Station, near the S of "Station" on the map. Fort Wallace will be visible near the rock.'),
            collectible('bone-13', 'Bone 13', 'New Hanover', 'On a small rocky plateau in the South of the railway bridge between Roanoke Ridge and Grizzlies East. On the border between Ambarino and Annesburg (New Hanover).'),
            collectible('bone-14', 'Bone 14', 'New Hanover', 'On a cliff that overlooks the path from Annesburg heading towards the Brandywine Drop waterfall.'),
            collectible('bone-15', 'Bone 15', 'New Hanover', 'East to the "I" in "Kamassa River". On the intermediate level of the cliffs on the west side of Kamassa River in the North of the Elysian Pool.'),
            collectible('bone-16', 'Bone 16', 'New Hanover', 'Between the the "R" of "Hanover" and Van Horn Trading Post. Going south from the Roadside Brothel, after crossing the road, at the edge of a clearing.'),
            collectible('bone-17', 'Bone 17', 'New Hanover', 'South between the "A" and "R" of "The Heartlands". At the bottom of the well underneath the Oil Derrick.'),
            collectible('bone-18', 'Bone 18', 'New Hanover', 'Follow the bed of the dried-up river adjacent to the oil derrick, going south to the top of the hill, at the rock formation.'),
            collectible('bone-19', 'Bone 19', 'New Hanover', 'Slightly East of the second "T" of the Trading Post, North of a small railway bridge.'),
            collectible('bone-20', 'Bone 20', 'West Elizabeth', 'Inside a cave northwest of Wallace Station.'),
            collectible('bone-21', 'Bone 21', 'West Elizabeth', 'Between the "W" and "E" of the word "West" on the path.'),
            collectible('bone-22', 'Bone 22', 'West Elizabeth', 'On rocky terrain, about halfway up of west path to Mount Shann peak, where the path winds in an approximate "S" shape (under "m" from Beryl’s Dream).'),
            collectible('bone-23', 'Bone 23', 'New Austin', 'In the canyon pocket to the left of the northwest curve of Pike’s Basin. South of the first "N" in "Hennigan".'),
            collectible('bone-24', 'Bone 24', 'New Austin', 'Above the river shore, to the North of the small islet in the San Luis River, above the "San" in "San Luis River".'),
            collectible('bone-25', 'Bone 25', 'New Austin', 'North of Cholla Springs inside a small rock wall at the base of a hill (close to Rattlesnake Hollow).'),
            collectible('bone-26', 'Bone 26', 'New Austin', 'On a small hill southwest of Jorge’s Gap, partly hidden by bushes.'),
            collectible('bone-27', 'Bone 27', 'New Austin', 'South of the "B" of "Rio Bravo" on the big rock plateau overlooking Fort Mercer.'),
            collectible('bone-28', 'Bone 28', 'New Austin', 'On a small slope near the eastern trip of Del Lobo Rock.'),
            collectible('bone-29', 'Bone 29', 'New Austin', 'Slightly west to the "G" of "Ridge" from Gaptooth Ridge at the top of a cliff overlooking the canyon.'),
            collectible('bone-30', 'Bone 30', 'New Austin', 'South of the "L" of Tumbleweed at the southeast edge of the plateau overlooking the town.'),
        ],
    },
    {
        id: 'carvings',
        name: 'Rock carvings',
        details: { color: 'var(--slate)' },
        items: [
            collectible('carving-1', 'Rock Carving 1', 'Ambarino', 'At the end of the road on Mount Hagen.'),
            collectible('carving-2', 'Rock Carving 2', 'Ambarino', 'At Whinyard Strait, on a rock facing the river. East of the "H" of "Whinyard".'),
            collectible('carving-3', 'Rock Carving 3', 'New Hanover', 'South of the "B" of "Bacchus" and west of the "S" of "Station". On top of a mountain at Bacchus Station, approach the mountains from the south and look for a passage down between the trees.'),
            collectible('carving-4', 'Rock Carving 4', 'New Hanover', 'West of Cumberland Forest, on a cliff facing west over the Dakota River.'),
            collectible('carving-5', 'Rock Carving 5', 'West Elizabeth', 'On the western edge of Owanjila Lake. Almost opposite to the Owanjila Dam.'),
            collectible('carving-6', 'Rock Carving 6', 'West Elizabeth', 'North of Strawberry on a mountain facing a valley on the right top of the "T" in "West".'),
            collectible('carving-7', 'Rock Carving 7', 'New Hanover', 'Near the top of the mountain northwest of Flatneck Station.'),
            collectible('carving-8', 'Rock Carving 8', 'Ambarino', 'South of Moonstone Pond, on a rock on the plateau.'),
            collectible('carving-9', 'Rock Carving 9', 'New Hanover', 'In Roanoke Ridge on a rock facing the road to the west of the "N" in Roanoke.'),
            collectible('carving-10', 'Rock Carving 10', 'New Hanover', 'On the east side of the Elysian Pool near the road, just north of the bridge.'),
        ],
    },
    {
        id: 'dreamcatchers',
        name: 'Dreamcatchers',
        details: { color: 'var(--sage)' },
        items: [
            collectible('dreamcatcher-1', 'Dreamcatcher 1', 'Ambarino', 'On the hill northeast of Cattail Pond, south of the "S" in west.'),
            collectible('dreamcatcher-2', 'Dreamcatcher 2', 'Ambarino', 'North of the road between Cattail Pond and Window Rock, due north of the "t" in Dakota River.'),
            collectible('dreamcatcher-3', 'Dreamcatcher 3', 'Ambarino', 'Between Cotorra Springs and Bacchus Bridge north of the railroad tracks.'),
            collectible('dreamcatcher-4', 'Dreamcatcher 4', 'Ambarino', 'Northeast of the "O" in "Ambarino". Southwest of The Loft.'),
            collectible('dreamcatcher-5', 'Dreamcatcher 5', 'New Hanover', 'South of the first "E" of Valentine.'),
            collectible('dreamcatcher-6', 'Dreamcatcher 6', 'New Hanover', 'West of Caliban’s Seat on the north side of the road that runs parallel to the riverbank.'),
            collectible('dreamcatcher-7', 'Dreamcatcher 7', 'New Hanover', 'North of the "K" of Citadel Rock just above the railroad tracks.'),
            collectible('dreamcatcher-8', 'Dreamcatcher 8', 'New Hanover', 'Between the lettering of the Dakota River and Flatneck Station. The dream catcher is located on a cliff on a dead tree.'),
            collectible('dreamcatcher-9', 'Dreamcatcher 9', 'New Hanover', 'West of the "E" of the "New" in New Hanover west of the railroad tracks.'),
            collectible('dreamcatcher-10', 'Dreamcatcher 10', 'New Hanover', 'In the "N" of The Heartlands.'),
            collectible('dreamcatcher-11', 'Dreamcatcher 11', 'New Hanover', 'On the hillside between the Kamassa River and Deer Cottage.'),
            collectible('dreamcatcher-12', 'Dreamcatcher 12', 'New Hanover', 'Between the second "N" and the "E" of Annesburg’s lettering. Just above the letters.'),
            collectible('dreamcatcher-13', 'Dreamcatcher 13', 'New Hanover', 'South of the "U" of Annesburg, west of the sharp bend of a path.'),
            collectible('dreamcatcher-14', 'Dreamcatcher 14', 'New Hanover', 'On the top of the hill southwest of Annesburg. Halfway between the "D" of the lettering of "Roanoke Ridge, and the Kamassa River.'),
            collectible('dreamcatcher-15', 'Dreamcatcher 15', 'New Hanover', 'South of the Elysian Pool and east of the "E" of "Hanover" in New Hanover lettering.'),
            collectible('dreamcatcher-16', 'Dreamcatcher 16', 'New Hanover', 'In the "O" of New Hanover.'),
            collectible('dreamcatcher-17', 'Dreamcatcher 17', 'New Hanover', 'In the words "New Hanover" between the "A" and the "N" in the Heartland Overflow.'),
            collectible('dreamcatcher-18', 'Dreamcatcher 18', 'Lemoyne', 'South of the Lemoyne border, northwest of Aberdeen Pig Farm, due west of the "p" in pig, on a grassy hill.'),
            collectible('dreamcatcher-19', 'Dreamcatcher 19', 'Lemoyne', 'North of the path between Aberdeen Pig Farm and Lonnie’s Shack and just northwest of the lettering of "Lonnie’s Shack".'),
            collectible('dreamcatcher-20', 'Dreamcatcher 20', 'New Hanover', 'At the border between Lemoyne and New Hanover, north of the "B" of Bluewater Marsh'),
        ],
    },
    {
        id: 'poi',
        name: 'Points of Interest',
        details: { color: 'var(--red)' },
        items: [
            collectible('poi-1', 'Abandoned Church', 'Lemoyne', 'An old abandoned church left to decay on the side of the road.', 'Scarlett Meadows'),
            collectible('poi-2', 'Bolger Glade', 'Lemoyne', 'An old battle site.', 'Scarlett Meadows'),
            collectible('poi-3', 'Braithwaites’ Secret', 'Lemoyne', 'Gertrude Braithwaite', 'Scarlett Meadows'),
            collectible('poi-4', 'Gray’s Secret', 'Lemoyne', ''),
            collectible('poi-5', 'Painting in Cabin', 'Lemoyne', ''),
            collectible('poi-6', 'Phonograph', 'Lemoyne', ''),
            collectible('poi-7', 'Pleasance', 'Lemoyne', ''),
            collectible('poi-8', 'Tiny Church', 'Lemoyne', ''),
            collectible('poi-9', 'Withered Arm', 'Lemoyne', ''),
            collectible('poi-10', 'Abandoned Trading Post', 'New Hanover', ''),
            collectible('poi-11', 'Brush Fire', 'New Hanover', ''),
            collectible('poi-12', 'Fossilized Man', 'New Hanover', ''),
            collectible('poi-13', 'Manmade Mutant', 'New Hanover', ''),
            collectible('poi-14', 'Meteor House', 'New Hanover', ''),
            collectible('poi-15', 'Meteorite', 'New Hanover', ''),
            collectible('poi-16', 'Oil Derrick', 'New Hanover', ''),
            collectible('poi-17', 'Old Tomb', 'New Hanover', ''),
            collectible('poi-18', 'Old World Scripts', 'New Hanover', ''),
            collectible('poi-19', 'Register Rock', 'New Hanover', ''),
            collectible('poi-20', 'Serpent Mound', 'New Hanover', ''),
            collectible('poi-21', 'Trading Post', 'New Hanover', ''),
            collectible('poi-22', 'Trail Trees (I)', 'New Hanover', ''),
            collectible('poi-23', 'Trail Trees (II)', 'New Hanover', ''),
            collectible('poi-24', 'Trail Trees (III)', 'New Hanover', ''),
            collectible('poi-25', 'Trail Trees (IV)', 'New Hanover', ''),
            collectible('poi-26', 'Warped Tree', 'New Hanover', ''),
            collectible('poi-27', 'Barrel Rider', 'Ambarino', ''),
            collectible('poi-28', 'Defaced Grave', 'Ambarino', ''),
            collectible('poi-29', 'Face in Cliff', 'Ambarino', ''),
            collectible('poi-30', 'Frozen Settler', 'Ambarino', ''),
            collectible('poi-31', 'Mammoth', 'Ambarino', ''),
            collectible('poi-32', 'Meditating Monk', 'Ambarino', ''),
            collectible('poi-33', 'Mysterious Hill Home', 'Ambarino', ''),
            collectible('poi-34', 'Strange Statues', 'Ambarino', ''),
            collectible('poi-35', 'Strange Statues (Cave Painting)', 'Ambarino', ''),
            collectible('poi-36', 'Circus Wagons', 'West Elizabeth', ''),
            collectible('poi-37', 'Faces in Trees', 'West Elizabeth', ''),
            collectible('poi-38', 'Flying Machine (West Elizabeth)', 'West Elizabeth', ''),
            collectible('poi-39', 'Giant Remains', 'West Elizabeth', ''),
            collectible('poi-40', 'Hermit Woman', 'West Elizabeth', ''),
            collectible('poi-41', 'Hidden Tunnel', 'West Elizabeth', ''),
            collectible('poi-42', 'Native Burial', 'West Elizabeth', ''),
            collectible('poi-43', 'Obelisk', 'West Elizabeth', ''),
            collectible('poi-44', 'Pagan Ritual', 'West Elizabeth', ''),
            collectible('poi-45', 'Whale Bones', 'West Elizabeth', ''),
            collectible('poi-46', 'Wickiup', 'West Elizabeth', ''),
            collectible('poi-47', 'Crashed Airship', 'New Austin', ''),
            collectible('poi-48', 'Donkey Lady', 'New Austin', ''),
            collectible('poi-49', 'Jesuit Missionary', 'New Austin', ''),
            collectible('poi-50', 'Sperm Whale Bones', 'New Austin', ''),
        ],
    },
    cigaretteCardCategory,
]