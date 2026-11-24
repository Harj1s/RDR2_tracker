import type {
    TrackedGroup,
    TrackedItem,
    TrackedItemDetails,
} from '../types'

import imgAlligator from '../../assets/animals/alligator/ANIMAL_ALLIGATOR_MEDIUM.png'
import photoAlligator from '../../assets/animals/alligator/ANIMALS_ALLIGATOR_PHOTO.jpg'
import imgAlligatorSmall from '../../assets/animals/alligator(small)/ANIMAL_ALLIGATOR_LITTLE.png'
import photoAlligatorSmall from '../../assets/animals/alligator(small)/ANIMALS_ALLIGATOR_SMALL_PHOTO.jpg'
import imgBadger from '../../assets/animals/badger/ANIMAL_BADGER.png'
import photoBadger from '../../assets/animals/badger/ANIMALS_BADGER_PHOTO.jpg'
import imgBat from '../../assets/animals/bat/ANIMAL_BAT.png'
import photoBat from '../../assets/animals/bat/ANIMALS_BAT_BROWN_PHOTO.jpg'
import imgBlackBear from '../../assets/animals/blackbear/ANIMAL_BEAR_BLACK.png'
import photoBlackBear from '../../assets/animals/blackbear/ANIMALS_BEAR_BLACK_PHOTO.jpg'
import imgGrizzly from '../../assets/animals/grizzly/ANIMAL_BEAR.png'
import photoGrizzly from '../../assets/animals/grizzly/ANIMALS_BEAR_PHOTO.jpg'
import imgBeaver from '../../assets/animals/beaver/ANIMAL_BEAVER.png'
import photoBeaver from '../../assets/animals/beaver/ANIMALS_BEAVER_PHOTO.jpg'
import imgBlueJay from '../../assets/animals/bluejay/ANIMAL_BLUEJAY.png'
import photoBlueJay from '../../assets/animals/bluejay/ANIMALS_BLUEJAY_PHOTO.jpg'
import imgBoar from '../../assets/animals/boar/ANIMAL_BOAR.png'
import photoBoar from '../../assets/animals/boar/ANIMALS_WILD_BOAR_PHOTO.jpg'
import imgWhitetailBuck from '../../assets/animals/whitetailbuck/ANIMAL_BUCK.png'
import photoWhitetailBuck from '../../assets/animals/whitetailbuck/ANIMALS_BUCK_WHITETAIL_PHOTO.jpg'
import imgWhitetailDeer from '../../assets/animals/whitetaildeer/ANIMAL_DEER.png'
import photoWhitetailDeer from '../../assets/animals/whitetaildeer/ANIMALS_DEER_WHITETAIL_PHOTO.jpg'
import imgBison from '../../assets/animals/bison/ANIMAL_BUFFALO.png'
import photoBison from '../../assets/animals/bison/ANIMALS_BUFFALO_AMERICAN_BISON_PHOTO.jpg'
import imgAngusBull from '../../assets/animals/angus/ANIMAL_BULL_ANGUS.png'
import photoAngusBull from '../../assets/animals/angus/ANIMALS_BULL_ANGUS_PHOTO.jpg'
import imgDevonBull from '../../assets/animals/devon/ANIMAL_BULL_DEVON.png'
import photoDevonBull from '../../assets/animals/devon/ANIMALS_BULL_DEVON_PHOTO.jpg'
import imgHerefordBull from '../../assets/animals/hereford/ANIMAL_BULL_HEREFORD.png'
import photoHerefordBull from '../../assets/animals/hereford/ANIMALS_BULL_HEREFORD_PHOTO.jpg'
import imgBullfrog from '../../assets/animals/bullfrog/ANIMAL_FROGBULL.png'
import photoBullfrog from '../../assets/animals/bullfrog/ANIMALS_FROG_BULL_PHOTO.jpg'
import imgNorthernCardinal from '../../assets/animals/cardinal/ANIMAL_CARDINAL.png'
import photoNorthernCardinal from '../../assets/animals/cardinal/ANIMALS_CARDINAL_PHOTO.jpg'
import imgAmericanDomesticCat from '../../assets/animals/cat/ANIMAL_CAT.png'
import photoAmericanDomesticCat from '../../assets/animals/cat/ANIMALS_CAT_PHOTO.jpg'
import imgCedarWaxwing from '../../assets/animals/waxwing/ANIMAL_CEDARWAXWING.png'
import photoCedarWaxwing from '../../assets/animals/waxwing/ANIMALS_CEDAR_WAX_WING_PHOTO.jpg'
import imgDominiqueChicken from '../../assets/animals/domchicken/ANIMAL_CHICKEN_DOMINIQUE.png'
import photoDominiqueChicken from '../../assets/animals/domchicken/ANIMALS_CHICKEN_DOMINQUE_PHOTO.jpg'
import imgDominiqueRooster from '../../assets/animals/domrooster/ANIMAL_ROOSTER_DOMINIQUE.png'
import photoDominiqueRooster from '../../assets/animals/domrooster/ANIMALS_DOMINIQUE_ROOSTER_PHOTO.jpg'
import imgJavaChicken from '../../assets/animals/javachicken/ANIMAL_CHICKEN_JAVA.png'
import photoJavaChicken from '../../assets/animals/javachicken/ANIMALS_CHICKEN_JAVA_PHOTO.jpg'
import imgJavaRooster from '../../assets/animals/javarooster/ANIMAL_ROOSTER_JAVA.png'
import photoJavaRooster from '../../assets/animals/javarooster/ANIMALS_CHICKEN_JAVA_ROOSTER_PHOTO.jpg'
import imgLeghornChicken from '../../assets/animals/legchicken/ANIMAL_CHICKEN_LEGHORN.png'
import photoLeghornChicken from '../../assets/animals/legchicken/ANIMALS_CHICKEN_LEGHORN_PHOTO.jpg'
import imgLeghornRooster from '../../assets/animals/legrooster/ANIMAL_ROOSTER_LEGHORN.png'
import photoLeghornRooster from '../../assets/animals/legrooster/ANIMALS_ROOSTER_LEGHORN.jpg'
import imgGreaterPrairieChicken from '../../assets/animals/prairiechicken/ANIMAL_PRAIRIECHICKEN.png'
import photoGreaterPrairieChicken from '../../assets/animals/prairiechicken/ANIMALS_GREATER_PRAIRIE_CHICKEN.jpg'
import imgWesternChipmunk from '../../assets/animals/chipmunk/ANIMAL_CHIPMUNK.png'
import photoWesternChipmunk from '../../assets/animals/chipmunk/ANIMALS_CHIPMUNK_PHOTO.jpg'
import imgCougar from '../../assets/animals/cougar/ANIMAL_COUGAR.png'
import photoCougar from '../../assets/animals/cougar/ANIMALS_COUGAR_PHOTO.jpg'
import imgDoubleCrestedCormorant from '../../assets/animals/dccormorant/ANIMAL_CORMORANT_DOUBLECRESTED.png'
import photoDoubleCrestedCormorant from '../../assets/animals/dccormorant/ANIMALS_CORMORANT_DOUBLECRESTED_PHOTO.jpg'
import imgFloridaCrackerCow from '../../assets/animals/cow/ANIMAL_COW.png'
import photoFloridaCrackerCow from '../../assets/animals/cow/ANIMALS_COW_FLORIDA_PHOTO.jpg'
import imgCaliforniaValleyCoyote from '../../assets/animals/coyote/ANIMAL_COYOTE.png'
import photoCaliforniaValleyCoyote from '../../assets/animals/coyote/ANIMALS_COYOTE_CALIFORNIA_PHOTO.jpg'
import imgCubanLandCrab from '../../assets/animals/crab/ANIMAL_CRAB.png'
import photoCubanLandCrab from '../../assets/animals/crab/ANIMALS_CRAB_PHOTO.jpg'
import imgRedSwampCrayfish from '../../assets/animals/crayfish/ANIMAL_CRAWFISH.png'
import photoRedSwampCrayfish from '../../assets/animals/crayfish/ANIMALS_CRAWFISH_PHOTO.jpg'
import imgWhoopingCrane from '../../assets/animals/wcrane/ANIMAL_CRANEWHOOPING_WHOOPING.png'
import photoWhoopingCrane from '../../assets/animals/wcrane/ANIMALS_CRANEWHOOPING_WHOOPING_PHOTO.jpg'
import imgSandhillCrane from '../../assets/animals/scrane/ANIMAL_CRANEWHOOPING_SANDHILL.png'
import photoSandhillCrane from '../../assets/animals/scrane/ANIMALS_CRANEWHOOPING_SANDHILL_PHOTO.jpg'
import imgAmericanCrow from '../../assets/animals/crow/ANIMAL_CROW.png'
import photoAmericanCrow from '../../assets/animals/crow/ANIMALS_CROW_PHOTO.jpg'
import imgAmericanFoxHound from '../../assets/animals/afhound/ANIMAL_DOG_AMERICANFOXHOUND.png'
import photoAmericanFoxHound from '../../assets/animals/afhound/ANIMALS_DOG_AMERICAN_FOX_HOUND_PHOTO.jpg'
import imgAustralianShepherd from '../../assets/animals/ashepard/ANIMAL_DOG_AUSTRALIANSHEPHERD.png'
import photoAustralianShepherd from '../../assets/animals/ashepard/ANIMALS_DOG_AUSTRAILIAN_SHEPERD_PHOTO.jpg'
import imgBloodhound from '../../assets/animals/bloodhound/ANIMAL_DOG_HOUND.png'
import photoBloodhound from '../../assets/animals/bloodhound/ANIMALS_DOGHOUND_PHOTO.jpg'
import imgBluetickCoonhound from '../../assets/animals/bluehound/ANIMAL_DOG_BLUETICKCOONHOUND.png'
import photoBluetickCoonhound from '../../assets/animals/bluehound/ANIMALS_COONHOUND_PHOTO.jpg'
import imgBorderCollie from '../../assets/animals/collie/ANIMAL_DOG_COLLIE.png'
import photoBorderCollie from '../../assets/animals/collie/ANIMALS_COLLIE_PHOTO.jpg'
import imgCatahoulaCur from '../../assets/animals/cur/ANIMAL_DOG_CATAHOULARCUR.png'
import photoCatahoulaCur from '../../assets/animals/cur/ANIMALS_CATHOULARCUR_PHOTO.jpg'
import imgChesapeakeBayRetriever from '../../assets/animals/cbretriever/ANIMAL_DOG_CHESBAYRETRIEVER.png'
import photoChesapeakeBayRetriever from '../../assets/animals/cbretriever/ANIMALS_RETRIEVER_PHOTO.jpg'
import imgLabradorRetriever from '../../assets/animals/lretriever/ANIMAL_DOG_LAB.png'
import photoLabradorRetriever from '../../assets/animals/lretriever/ANIMALS_LAB_PHOTO.jpg'
import imgPoodle from '../../assets/animals/poodle/ANIMAL_DOG_POODLE.png'
import photoPoodle from '../../assets/animals/poodle/ANIMALS_POODLE_PHOTO.jpg'
import imgStandardDonkey from '../../assets/animals/donkey/ANIMAL_DONKEY.png'
import photoStandardDonkey from '../../assets/animals/donkey/ANIMALS_DONKEY_PHOTO.jpg'
import imgMallardDuck from '../../assets/animals/mduck/ANIMAL_DUCK_MALLARD.png'
import photoMallardDuck from '../../assets/animals/mduck/ANIMALS_DUCK_MALLARD_PHOTO.jpg'
import imgPekinDuck from '../../assets/animals/pduck/ANIMAL_DUCK_PEKIN.png'
import photoPekinDuck from '../../assets/animals/pduck/ANIMALS_DUCK_PEKIN_PHOTO.jpg'
import imgBaldEagle from '../../assets/animals/baldeagle/ANIMAL_EAGLE_BALD.png'
import photoBaldEagle from '../../assets/animals/baldeagle/ANIMALS_EAGLE_BALD_PHOTO.jpg'
import imgGoldenEagle from '../../assets/animals/goldeneagle/ANIMAL_EAGLE_GOLDEN.png'
import photoGoldenEagle from '../../assets/animals/goldeneagle/ANIMALS_EAGLE_GOLDEN_PHOTO.jpg'
import imgReddishEgret from '../../assets/animals/redegret/ANIMAL_EGRET_REDDISH.png'
import photoReddishEgret from '../../assets/animals/redegret/ANIMALS_EGRET_REDDISH_PHOTO.jpg'
import imgLittleEgret from '../../assets/animals/lilegret/ANIMAL_EGRET_LITTLE.png'
import photoLittleEgret from '../../assets/animals/lilegret/ANIMALS_EGRET_LITTLE_PHOTO.jpg'
import imgSnowyEgret from '../../assets/animals/snowegret/ANIMAL_EGRET_SNOWY.png'
import photoSnowyEgret from '../../assets/animals/snowegret/ANIMALS_EGRET_SNOWY_PHOTO.jpg'
import imgRockyMountainBullElk from '../../assets/animals/rmcelk/ANIMAL_MOUNTAIN_COW_ELK.png'
import photoRockyMountainBullElk from '../../assets/animals/rmcelk/ANIMALS_MOUNTAIN_COW_ELK_PHOTO.jpg'
import imgRockyMountainCowElk from '../../assets/animals/rmelk/ANIMAL_ELK_ROCKY.png'
import photoRockyMountainCowElk from '../../assets/animals/rmelk/ANIMALS_ELK_ROCKY_PHOTO.jpg'
import imgAmericanRedFox from '../../assets/animals/redfox/ANIMAL_FOX_RED.png'
import photoAmericanRedFox from '../../assets/animals/redfox/ANIMALS_FOX_RED_PHOTO.jpg'
import imgAmericanGrayFox from '../../assets/animals/grayfox/ANIMAL_FOX_GREY.png'
import photoAmericanGrayFox from '../../assets/animals/grayfox/ANIMALS_FOX_GRAY_PHOTO.jpg'
import imgSilverFox from '../../assets/animals/silverfox/ANIMAL_FOX_SILVER.png'
import photoSilverFox from '../../assets/animals/silverfox/ANIMALS_FOX_SILVER_PHOTO.jpg'
import imgAlpineGoat from '../../assets/animals/goat/ANIMAL_GOAT.png'
import photoAlpineGoat from '../../assets/animals/goat/ANIMALS_GOAT_PHOTO.jpg'
import imgCanadaGoose from '../../assets/animals/goose/ANIMAL_GOOSECANADA.png'
import photoCanadaGoose from '../../assets/animals/goose/ANIMALS_GOOSE_CANADA_PHOTO.jpg'
import imgFerruginousHawk from '../../assets/animals/fhawk/ANIMAL_HAWK_FERRUGINOUS.png'
import photoFerruginousHawk from '../../assets/animals/fhawk/ANIMALS_HAWK_FERRUGINOUS_PHOTO.jpg'
import imgRedTailedHawk from '../../assets/animals/rthawk/ANIMAL_HAWK_REDTAILED.png'
import photoRedTailedHawk from '../../assets/animals/rthawk/ANIMALS_HAWK_REDTAILED_PHOTO.jpg'
import imgRoughLeggedHawk from '../../assets/animals/rlhawk/ANIMAL_HAWK_ROUGHLEGGED.png'
import photoRoughLeggedHawk from '../../assets/animals/rlhawk/ANIMALS_HAWK_ROUGHLEGGED_PHOTO.jpg'
import imgGreatBlueHeron from '../../assets/animals/gbheron/ANIMAL_HERON_GREATBLUE.png'
import photoGreatBlueHeron from '../../assets/animals/gbheron/ANIMALS_HERON_BLUE_PHOTO.jpg'
import imgTricoloredHeron from '../../assets/animals/tcheron/ANIMAL_HERON_TRICOLOUR.png'
import photoTricoloredHeron from '../../assets/animals/tcheron/ANIMALS_HERON_TRICOLOUR_PHOTO.jpg'
import imgGreenIguana from '../../assets/animals/giguana/ANIMAL_IGUANA.png'
import photoGreenIguana from '../../assets/animals/giguana/ANIMALS_IGUANA_GREEN_PHOTO.jpg'
import imgCommonLoon from '../../assets/animals/cloon/ANIMAL_LOON_COMMON.png'
import photoCommonLoon from '../../assets/animals/cloon/ANIMALS_LOON_COMMON_PHOTO.jpg'
import imgPacificLoon from '../../assets/animals/ploon/ANIMAL_LOON_PACIFIC.png'
import photoPacificLoon from '../../assets/animals/ploon/ANIMALS_LOON_PACIFIC_PHOTO.jpg'
import imgYellowBilledLoon from '../../assets/animals/ybloon/ANIMAL_LOON_YELLOWBILLED.png'
import photoYellowBilledLoon from '../../assets/animals/ybloon/ANIMALS_LOON_YELLOWBILLED_PHOTO.jpg'
import imgWesternBullMoose from '../../assets/animals/bullmoose/ANIMAL_MOOSE.png'
import photoWesternBullMoose from '../../assets/animals/bullmoose/ANIMALS_MOOSE_WESTERN_PHOTO.jpg'
import imgWesternMoose from '../../assets/animals/moose/ANIMAL_MOOSE_FEMALE.png'
import photoWesternMoose from '../../assets/animals/moose/ANIMALS_WESTERN_MOOSE_FEMALE.jpg'
import imgMule from '../../assets/animals/mule/ANIMAL_MULE.png'
import photoMule from '../../assets/animals/mule/ANIMALS_HORSE_MULE_PHOTO.jpg'
import imgAmericanMuskrat from '../../assets/animals/muskrat/ANIMAL_MUSKRAT.png'
import photoAmericanMuskrat from '../../assets/animals/muskrat/ANIMALS_MUSKRAT_PHOTO.jpg'
import imgBaltimoreOriole from '../../assets/animals/boriole/ANIMAL_ORIOLE_BALTIMORE.png'
import photoBaltimoreOriole from '../../assets/animals/boriole/ANIMALS_ORIOLE_BALTIMORE_PHOTO.jpg'
import imgHoodedOriole from '../../assets/animals/horiole/ANIMAL_ORIOLE_HOODED.png'
import photoHoodedOriole from '../../assets/animals/horiole/ANIMALS_ORIOLE_HOODED_PHOTO.jpg'
import imgCoastalHornedOwl from '../../assets/animals/cohowl/ANIMAL_OWL_COASTAL.png'
import photoCoastalHornedOwl from '../../assets/animals/cohowl/ANIMALS_OWL_COASTAL_PHOTO.jpg'
import imgGreatHornedOwl from '../../assets/animals/ghowl/ANIMAL_OWL_GREAT.png'
import photoGreatHornedOwl from '../../assets/animals/ghowl/ANIMALS_GREAT_HORNED_OWL.jpg'
import imgAngusOx from '../../assets/animals/angusox/ANIMAL_OX_ANGUS.png'
import photoAngusOx from '../../assets/animals/angusox/ANIMALS_ANGUS_OX_PHOTO.jpg'
import imgDevonOx from '../../assets/animals/devonox/ANIMAL_OX_DEVON.png'
import photoDevonOx from '../../assets/animals/devonox/ANIMALS_BULL_DEVON_OX_PHOTO.jpg'
import imgPanther from '../../assets/animals/panther/ANIMAL_PANTHER.png'
import photoPanther from '../../assets/animals/panther/ANIMALS_PANTHER_PHOTO.jpg'
import imgFloridaPanther from '../../assets/animals/flpanther/ANIMAL_PANTHER_FLORIDA.png'
import photoFloridaPanther from '../../assets/animals/flpanther/ANIMALS_PANTHER_FLORIDA_PHOTO.jpg'
import imgBlueAndYellowMacaw from '../../assets/animals/bymacaw/ANIMAL_PARROT_BLUEYELLOW.png'
import photoBlueAndYellowMacaw from '../../assets/animals/bymacaw/ANIMALS_PARROT_BLUE_PHOTO.jpg'
import imgGreatGreenMacaw from '../../assets/animals/ggmacaw/ANIMAL_PARROT_GREATGREEN.png'
import photoGreatGreenMacaw from '../../assets/animals/ggmacaw/ANIMALS_PARROT_GREEN_PHOTO.jpg'
import imgScarletMacaw from '../../assets/animals/smacaw/ANIMAL_PARROT_SCARLET.png'
import photoScarletMacaw from '../../assets/animals/smacaw/ANIMALS_PARROT_SCARLET_PHOTO.jpg'
import imgAmericanWhitePelican from '../../assets/animals/wpelican/ANIMAL_PELICAN_WHITE.png'
import photoAmericanWhitePelican from '../../assets/animals/wpelican/ANIMALS_PELICAN_WHITE_PHOTO.jpg'
import imgBrownPelican from '../../assets/animals/bpelican/ANIMAL_PELICAN_BROWN.png'
import photoBrownPelican from '../../assets/animals/bpelican/ANIMALS_PELICAN_BROWN_PHOTO.jpg'
import imgRingChestedPheasant from '../../assets/animals/pheasant/ANIMAL_PHEASANT_RINGNECK.png'
import photoRingChestedPheasant from '../../assets/animals/pheasant/ANIMALS_PHEASANT_RING_PHOTO.jpg'
import imgChineseRingNeckedPheasant from '../../assets/animals/chpheasant/ANIMAL_PHEASANT_CHINESE.png'
import photoChineseRingNeckedPheasant from '../../assets/animals/chpheasant/ANIMALS_PHEASANT_CHINESE_PHOTO.jpg'
import imgBerkshirePig from '../../assets/animals/berkshire/ANIMAL_PIG_BERKSHIRE.png'
import photoBerkshirePig from '../../assets/animals/berkshire/ANIMALS_PIG_BERKSHIRE_PHOTO.jpg'
import imgBigChinaPig from '../../assets/animals/bigchina/ANIMAL_PIG_BIGCHINA.png'
import photoBigChinaPig from '../../assets/animals/bigchina/ANIMALS_PIG_BIGCHINA_PHOTO.jpg'
import imgOldSpotPig from '../../assets/animals/oldspot/ANIMAL_PIG_OLDSPOT.png'
import photoOldSpotPig from '../../assets/animals/oldspot/ANIMALS_PIG_OLDSPOT_PHOTO.jpg'
import imgBandTailedPigeon from '../../assets/animals/btpigeon/ANIMAL_PIGEON_BANDTAILED.png'
import photoBandTailedPigeon from '../../assets/animals/btpigeon/ANIMALS_PIGEON_BANDTAILED_PHOTO.jpg'
import imgRockPigeon from '../../assets/animals/rpigeon/ANIMAL_PIGEON_ROCK.png'
import photoRockPigeon from '../../assets/animals/rpigeon/ANIMALS_PIGEON_ROCK_PHOTO.jpg'
import imgVirginiaOpossum from '../../assets/animals/opossum/ANIMAL_POSSUM.png'
import photoVirginiaOpossum from '../../assets/animals/opossum/ANIMALS_POSSUM_PHOTO.jpg'
import imgAmericanPronghornBuck from '../../assets/animals/prongbuck/ANIMAL_PRONGHORN_AMERICAN_M.png'
import photoAmericanPronghornBuck from '../../assets/animals/prongbuck/ANIMALS_PRONGHORN_AMERICAN_M_PHOTO.jpg'
import imgAmericanPronghornDoe from '../../assets/animals/prongdoe/ANIMAL_PRONGHORN_AMERICAN.png'
import photoAmericanPronghornDoe from '../../assets/animals/prongdoe/ANIMALS_PRONGHORN_AMERICAN_PHOTO.jpg'
import imgCaliforniaQuail from '../../assets/animals/quail/ANIMAL_QUAIL.png'
import photoCaliforniaQuail from '../../assets/animals/quail/ANIMALS_QUAIL_PHOTO.jpg'
import imgSierraNevadaBighornRam from '../../assets/animals/snram/ANIMAL_BIGHORNRAM_SIERRA.png'
import photoSierraNevadaBighornRam from '../../assets/animals/snram/ANIMALS_BIGHORNRAM_SIERRA_PHOTO.jpg'
import imgSierraNevadaBighornSheep from '../../assets/animals/snsheep/ANIMAL_BIGHORNRAM_SIERRA_F.png'
import photoSierraNevadaBighornSheep from '../../assets/animals/snsheep/ANIMALS_BIGHORNRAM_SHEEP_SIERRA_PHOTO.jpg'
import imgRockyMountainBighornRam from '../../assets/animals/rmram/ANIMAL_BIGHORNRAM_ROCKY.png'
import photoRockyMountainBighornRam from '../../assets/animals/rmram/ANIMALS_BIGHORNRAM_M_PHOTO.jpg'
import imgRockyMountainBighornSheep from '../../assets/animals/rmsheep/ANIMAL_BIGHORNRAM_ROCKY_F.png'
import photoRockyMountainBighornSheep from '../../assets/animals/rmsheep/ANIMALS_BIGHORNRAM_SHEEP_ROCKY_PHOTO.jpg'
import imgBlackTailedJackrabbit from '../../assets/animals/rabbit/ANIMAL_RABBIT.png'
import photoBlackTailedJackrabbit from '../../assets/animals/rabbit/ANIMALS_RABBIT_BLACK_TAILED_PHOTO.jpg'
import imgNorthAmericanRaccoon from '../../assets/animals/raccoon/ANIMAL_RACOON.png'
import photoNorthAmericanRaccoon from '../../assets/animals/raccoon/ANIMALS_RACCOON_PHOTO.jpg'
import imgBlackRat from '../../assets/animals/blrat/ANIMAL_RAT_BLACK.png'
import photoBlackRat from '../../assets/animals/blrat/ANIMALS_RAT_BLACK_PHOTO.jpg'
import imgBrownRat from '../../assets/animals/brrat/ANIMAL_RAT_BROWN.png'
import photoBrownRat from '../../assets/animals/brrat/ANIMALS_RAT_BROWN_PHOTO.jpg'
import imgWesternRaven from '../../assets/animals/raven/ANIMAL_RAVEN.png'
import photoWesternRaven from '../../assets/animals/raven/ANIMALS_RAVEN_PHOTO.jpg'
import imgRedFootedBooby from '../../assets/animals/booby/ANIMAL_REDFOOTEDBOOBY.png'
import photoRedFootedBooby from '../../assets/animals/booby/ANIMALS_BOOBY_RED_FOOTED_PHOTO.jpg'
import imgAmericanRobin from '../../assets/animals/robin/ANIMAL_ROBIN.png'
import photoAmericanRobin from '../../assets/animals/robin/ANIMALS_ROBIN_PHOTO.jpg'
import imgRosaetaSpoonbill from '../../assets/animals/spoonbill/ANIMAL_ROSEATESPOONBILL.png'
import photoRosaetaSpoonbill from '../../assets/animals/spoonbill/ANIMALS_SPOONBIL_PHOTO.jpg'
import imgHerringGull from '../../assets/animals/hgull/ANIMAL_SEAGULL_HERRING.png'
import photoHerringGull from '../../assets/animals/hgull/ANIMALS_SEAGULL_HERRING_PHOTO.jpg'
import imgLaughingGull from '../../assets/animals/lgull/ANIMAL_SEAGULL_LAUGHING.png'
import photoLaughingGull from '../../assets/animals/lgull/ANIMALS_SEAGULL_LAUGHING_PHOTO.jpg'
import imgRingBilledGull from '../../assets/animals/rbgull/ANIMAL_SEAGULL_RING_BILLED.png'
import photoRingBilledGull from '../../assets/animals/rbgull/ANIMALS_SEAGULL_RING_PHOTO.jpg'
import imgMerinoSheep from '../../assets/animals/sheep/ANIMAL_SHEEP.png'
import photoMerinoSheep from '../../assets/animals/sheep/ANIMALS_SHEEP_MARINO_PHOTO.jpg'
import imgStripedSkunk from '../../assets/animals/skunk/ANIMAL_SKUNK.png'
import photoStripedSkunk from '../../assets/animals/skunk/ANIMALS_SKUNK_PHOTO.jpg'
import imgRedBoaSnake from '../../assets/animals/redboa/ANIMAL_SNAKEREDBOA.png'
import photoRedBoaSnake from '../../assets/animals/redboa/ANIMALS_SNAKEREDBOA_PHOTO.jpg'
import imgRainbowBoaSnake from '../../assets/animals/rainbowboa/ANIMAL_RAINBOW_BOA_SNAKE.png'
import photoRainbowBoaSnake from '../../assets/animals/rainbowboa/ANIMALS_RAINBOW_BOA_SNAKE_PHOTO.jpg'
import imgSunglowBoaSnake from '../../assets/animals/sunglowboa/ANIMAL_RED_TAILED_SUN_BOA_SNAKE.png'
import photoSunglowBoaSnake from '../../assets/animals/sunglowboa/ANIMALS_RED_TAILED_SUN_BOA_SNAKE_PHOTO.jpg'
import imgDiamondbackRattlesnake from '../../assets/animals/diamondback/ANIMAL_SNAKE.png'
import photoDiamondbackRattlesnake from '../../assets/animals/diamondback/ANIMALS_SNAKEDIAMOND_PHOTO.jpg'
import imgFerDeLanceSnake from '../../assets/animals/ferdelance/ANIMAL_SNAKEFERDELANCE.png'
import photoFerDeLanceSnake from '../../assets/animals/ferdelance/ANIMALS_SNAKE_FERDELANCE_PHOTO.jpg'
import imgTimberRattlesnake from '../../assets/animals/timberrattle/ANIMAL_TIMBER_RATTLESNAKE.png'
import photoTimberRattlesnake from '../../assets/animals/timberrattle/ANIMALS_TIMBER_RATTLESNAKE_PHOTO.jpg'
import imgNorthernCopperheadSnake from '../../assets/animals/ncopperhead/ANIMAL_SNAKE_COPPERHEAD_NORTHERN.png'
import photoNorthernCopperheadSnake from '../../assets/animals/ncopperhead/ANIMALS_SNAKE_NORTHERN_COPPERHEAD_PHOTO.jpg'
import imgSouthernCopperheadSnake from '../../assets/animals/scopperhead/ANIMAL_SNAKECOPPERHEAD_SOUTHERN.png'
import photoSouthernCopperheadSnake from '../../assets/animals/scopperhead/ANIMALS_SNAKE_SOUTHERN_COPPERHEAD_PHOTO.jpg'
import imgMidlandWaterSnake from '../../assets/animals/midlandwater/ANIMAL_WATER_SNAKE_MIDLAND.png'
import photoMidlandWaterSnake from '../../assets/animals/midlandwater/ANIMALS_WATER_SNAKE_MIDLAND_PHOTO.jpg'
import imgCottonmouthSnake from '../../assets/animals/cottonmouth/ANIMAL_SNAKEWATER.png'
import photoCottonmouthSnake from '../../assets/animals/cottonmouth/ANIMALS_SNAKE_WATER_PHOTO.jpg'
import imgNorthernWaterSnake from '../../assets/animals/nwater/ANIMAL_SNAKENORTHERNWATER.png'
import photoNorthernWaterSnake from '../../assets/animals/nwater/ANIMALS_WATER_SNAKE_NORTHERN_PHOTO.jpg'
import imgScarletTanagerSongbird from '../../assets/animals/stsongbird/ANIMAL_SONGBIRD_SCARLET.png'
import photoScarletTanagerSongbird from '../../assets/animals/stsongbird/ANIMALS_SONGBIRD_SCARLET_PHOTO.jpg'
import imgWesternTanagerSongbird from '../../assets/animals/wtsongbird/ANIMAL_SONGBIRD_WESTERN.png'
import photoWesternTanagerSongbird from '../../assets/animals/wtsongbird/ANIMALS_SONGBIRD_WESTERN_PHOTO.jpg'
import imgEurasianTreeSparrow from '../../assets/animals/eutsparrow/ANIMAL_SPARROW_EURASIAN.png'
import photoEurasianTreeSparrow from '../../assets/animals/eutsparrow/ANIMALS_SPARROW_EURASIAN_PHOTO.jpg'
import imgAmericanTreeSparrow from '../../assets/animals/amtsparrow/ANIMAL_SPARROW_AMERICAN.png'
import photoAmericanTreeSparrow from '../../assets/animals/amtsparrow/ANIMALS_SPARROW_AMERICAN_PHOTO.jpg'
import imgGoldenCrownedSparrow from '../../assets/animals/gcsparrow/ANIMAL_SPARROW_GOLDEN.png'
import photoGoldenCrownedSparrow from '../../assets/animals/gcsparrow/ANIMALS_SPARROW_GOLDEN_PHOTO.jpg'
import imgAmericanRedSquirrel from '../../assets/animals/redsquirrel/ANIMAL_SQUIRREL_GREY.png'
import photoAmericanRedSquirrel from '../../assets/animals/redsquirrel/ANIMALS_SQUIRREL_RED_PHOTO.jpg'
import imgWesternGraySquirrel from '../../assets/animals/graysquirrel/ANIMAL_SQUIRREL_GREY (1).png'
import photoWesternGraySquirrel from '../../assets/animals/graysquirrel/ANIMALS_SQUIRREL_GRAY_PHOTO.jpg'
import imgBlackSquirrel from '../../assets/animals/blacksquirrel/ANIMAL_SQUIRREL_BLACK.png'
import photoBlackSquirrel from '../../assets/animals/blacksquirrel/ANIMALS_BLACK_SQUIRREL.jpg'
import imgWesternToad from '../../assets/animals/toad/ANIMAL_TOAD.png'
import photoWesternToad from '../../assets/animals/toad/ANIMALS_TOAD_PHOTO.jpg'
import imgEasternWildTurkey from '../../assets/animals/eturkey/ANIMAL_TURKEY_EASTERN.png'
import photoEasternWildTurkey from '../../assets/animals/eturkey/ANIMALS_TURKEY_WILD_EASTERN_PHOTO.jpg'
import imgAlligatorSnappingTurtle from '../../assets/animals/asturtle/ANIMAL_TURTLE_SNAPPING.png'
import photoAlligatorSnappingTurtle from '../../assets/animals/asturtle/ANIMALS_TURTLE_SNAPPING_PHOTO.jpg'
import imgEasternTurkeyVulture from '../../assets/animals/evulture/ANIMAL_VULTURE_EASTERN.png'
import photoEasternTurkeyVulture from '../../assets/animals/evulture/ANIMALS_EASTERN_TURKEY_VULTURE.jpg'
import imgWesternTurkeyVulture from '../../assets/animals/wvulture/ANIMAL_VULTURE_WESTERN.png'
import photoWesternTurkeyVulture from '../../assets/animals/wvulture/ANIMALS_VULTURE_TURKEY_PHOTO.jpg'
import imgGrayWolf from '../../assets/animals/gwolf/ANIMAL_WOLF_GRAY.png'
import photoGrayWolf from '../../assets/animals/gwolf/ANIMALS_WOLF_GRAY_PHOTO.jpg'
import imgTimberWolf from '../../assets/animals/twolf/ANIMAL_WOLF_TIMBER.png'
import photoTimberWolf from '../../assets/animals/twolf/ANIMALS_WOLF_TIMBER_PHOTO.jpg'
import imgRedBelliedWoodpecker from '../../assets/animals/rbwoodpecker/ANIMAL_WOODPECKER_REDBELLIED.png'
import photoRedBelliedWoodpecker from '../../assets/animals/rbwoodpecker/ANIMALS_WOODPECKER_RED_PHOTO.jpg'
import imgPileatedWoodpecker from '../../assets/animals/pwoodpecker/ANIMAL_WOODPECKER_PILEATED.png'
import photoPileatedWoodpecker from '../../assets/animals/pwoodpecker/ANIMALS_WOODPECKER_PILEATED_PHOTO.jpg'
import imgLegendaryBullGator from '../../assets/animals/leg_bgator/ANIMAL_ALLIGATOR_LEGENDARY.png'
import photoLegendaryBullGator from '../../assets/animals/leg_bgator/ANIMALS_ALLIGATOR_LEGENDARY_PHOTO.jpg'
import imgLegendaryBharatiGrizzlyBear from '../../assets/animals/leg_bhgrizzly/ANIMAL_LEGENDARY_BEAR.png'
import photoLegendaryBharatiGrizzlyBear from '../../assets/animals/leg_bhgrizzly/ANIMALS_BEAR_LEGENDARY_PHOTO.jpg'
import imgLegendaryBeaver from '../../assets/animals/leg_beaver/ANIMAL_LEGENDARY_BEAVER.png'
import photoLegendaryBeaver from '../../assets/animals/leg_beaver/ANIMALS_BEAVER_LEGENDARY_PHOTO.jpg'
import imgLegendaryWhiteBison from '../../assets/animals/leg_wbison/ANIMAL_LEGENDARY_BUFFALO_WHITE.png'
import photoLegendaryWhiteBison from '../../assets/animals/leg_wbison/ANIMALS_BUFFALO_BISON_LEGENDARY_PHOTO.jpg'
import imgLegendaryBoar from '../../assets/animals/leg_boar/ANIMAL_LEGENDARY_BOAR.png'
import photoLegendaryBoar from '../../assets/animals/leg_boar/ANIMALS_BOAR_LEGENDARY_PHOTO.jpg'
import imgLegendaryBuck from '../../assets/animals/leg_buck/ANIMAL_LEGENDARY_BUCK.png'
import photoLegendaryBuck from '../../assets/animals/leg_buck/ANIMALS_BUCK_LEGENDARY_PHOTO.jpg'
import imgLegendaryCoyote from '../../assets/animals/leg_coyote/ANIMAL_LEGENDARY_COYOTE.png'
import photoLegendaryCoyote from '../../assets/animals/leg_coyote/ANIMALS_COYOTE_LEGENDARY_PHOTO.jpg'
import imgLegendaryFox from '../../assets/animals/leg_fox/ANIMAL_LEGENDARY_FOX.png'
import photoLegendaryFox from '../../assets/animals/leg_fox/ANIMALS_FOX_LEGENDARY_PHOTO.jpg'
import imgLegendaryElk from '../../assets/animals/leg_elk/ANIMAL_LEGENDARY_ELK.png'
import photoLegendaryElk from '../../assets/animals/leg_elk/ANIMALS_LEGENDARY_ELK_PHOTO.jpg'
import imgLegendaryMoose from '../../assets/animals/leg_moose/ANIMAL_LEGENDARY_MOOSE.png'
import photoLegendaryMoose from '../../assets/animals/leg_moose/ANIMALS_MOOSE_LEGENDARY_PHOTO.jpg'
import imgLegendaryCiaguaroPanther from '../../assets/animals/leg_cpanther/ANIMAL_LEGENDARY_PANTHER.png'
import photoLegendaryCiaguaroPanther from '../../assets/animals/leg_cpanther/ANIMALS_LEGENDARY_PANTHER_PHOTO.jpg'
import imgLegendaryBigHornRam from '../../assets/animals/leg_ram/ANIMAL_LEGENDARY_BIGHORNRAM.png'
import photoLegendaryBigHornRam from '../../assets/animals/leg_ram/ANIMALS_BIGHORNRAM_LEGENDARY_PHOTO.jpg'
import imgLegendaryWolf from '../../assets/animals/leg_wolf/ANIMAL_LEGENDARY_WOLF.png'
import photoLegendaryWolf from '../../assets/animals/leg_wolf/ANIMALS_WOLF_LEGENDARY_PHOTO.jpg'

export type Animal = TrackedItem<AnimalDetails>
export type AnimalCategory = TrackedGroup<AnimalDetails>

type AnimalDetails = TrackedItemDetails & {
    cleanKillWeapons: string[]
}

type AnimalRecord = Pick<Animal, 'id' | 'name' | 'description'> & {
    details: Pick<AnimalDetails, 'cleanKillWeapons'>
    hasKillTask?: boolean
    hasTrackingTask?: boolean
    hasStudyTask?: boolean
    hasHarvestTask?: boolean
    harvestTask?: 'skinned' | 'collected' | 'plucked'
    image?: string
    photo?: string
}

const animalRecords = [
    {
        id: 'an-1',
        name: 'American Alligator',
        description: "Alligators live in the swamp and river delta regions of Lemoyne - in southern Bluewater Marsh and all around Bayou Nwa. They are carnivorous apex predators, feeding on fish, birds, amphibians and mammals. A rifle will pierce through an Alligator's tough, armored body plates. Alligator skins, meat, and teeth are all useful for food or crafting.",
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgAlligator,
        photo: photoAlligator,
    },
    {
        id: 'an-2',
        name: 'American Alligator (small)',
        description: "Alligators live in the swamp and river delta regions of Lemoyne. They are carnivorous apex predators, feeding on fish, birds, amphibians and mammals. A repeater or a Bow with arrows will pierce through an Alligator's tough, armored body plates. Alligator skins, meat, and teeth are all useful for food or crafting.",
        details: { cleanKillWeapons: ['Repeater', 'Bow'] },
        image: imgAlligatorSmall,
        photo: photoAlligatorSmall,
    },
    { 
        id: 'an-3',
        name: 'Nine-Banded Armadillo',
        description: 'Nine-Banded Armadillos can be found in the regions of Gaptooth Ridge, Cholla Springs and Rio Bravo. As omnivores, their main diet consists of insects, small vertebrates and often, carrion. A Varmint Rifle is considered to be one of the best weapons to hunt armadillos, as the bullets can easily pierce through their carapace. Armadillos can be eaten, though the consistency of their meat is stringy. Armadillo carapaces can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
    },
    {
        id: 'an-4',
        name: 'American Badger',
        description: 'The American Badger can be found across the more arid climates of America. It is a fossorial carnivore, preying on squirrels, moles, prairie dogs and voles. Using a Varmint Rifle whilst hunting should result in a clean kill. Badger claws and pelts can be used for crafting, and badger meat can be eaten.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgBadger,
        photo: photoBadger,
    },
    {
        id: 'an-5',
        name: 'Little Brown Bat',
        description: 'The Little Brown Bat is found across most of America. They are insectivores, feeding on mosquitoes, wasps, beetles, and midges. Due to the size of this species of bat, they can be killed with less impact. A Bow with Small Game Arrows can be used successfully for hunting. Its meat is stringy but edible, and its wings can be used to craft with.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgBat,
        photo: photoBat,
    },
    { 
        id: 'an-6',
        name: 'American Black Bear',
        description: "The American Black Bear is found in the remote woodlands of Roanoke, Big Valley and Tall Trees. It is smaller than the Grizzly Bear. The main diet of these omnivorous animals consists of salmon, honey, fruit, small mammals and carrion. A long scope rifle should take down a bear of this size. Their claws and fat can be used for crafting and their meat can be consumed.",
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        image: imgBlackBear,
        photo: photoBlackBear,
    },
    { 
        id: 'an-7',
        name: 'Grizzly Bear',
        description: 'Grizzly Bears are endemic to Grizzlies East. As an omnivore, its diet ranges from berries, roots, and grasses to deer, elk, fish, and carrion. The easiest way to take down an animal of this size is with a rifle with either High Velocity or Express Bullets. Bear meat, fat and claws can be used for food or materials to craft with.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        image: imgGrizzly,
        photo: photoGrizzly,
    },
    { 
        id: 'an-8',
        name: 'North American Beaver',
        description: 'The North American Beaver can be found along the Kamassa River in Roanoke. Its herbivorous diet consists of tree bark, cambium, roots, buds, and water plants. A Varmint Rifle is the ideal weapon for hunting beavers. Beaver scent glands, skin and fat can all be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgBeaver,
        photo: photoBeaver,
    },
    { 
        id: 'an-9',
        name: 'Blue Jay',
        description: 'Blue Jays can be found across the forested regions of the American Heartland. As omnivores, they eat nuts, acorns, seeds, beetles, grasshoppers, and caterpillars. A bird this size can be killed with less impact. A Bow with Small Game Arrows can successfully be used for hunting. Their feathers can be used for crafting, and their carcass can be sold to traders.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgBlueJay,
        photo: photoBlueJay,
    },
    { 
        id: 'an-10',
        name: 'Wild Boar',
        description: "Wild Boars can be found across the states of New Hanover, Lemoyne, and West Elizabeth. They are omnivores, preying on amphibians, reptiles, insects, worms, and smaller mammals. They also eat roots and fruit. Using either a rifle or a Bow with Poison Arrows is the easiest way to take down an animal of this size. A boar's tender pork can be eaten, and their fat and tusks can be used to craft with.",
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgBoar,
        photo: photoBoar,
    },
    { 
        id: 'an-11',
        name: 'Whitetail Buck',
        description: 'The Whitetail Buck can be found in forested areas across the states. It is a herbivore, and consumes nuts, buds, twigs, and green plants. Keeping your distance when hunting deer can increase your chances of a kill. Long range weapons, like a rifle or a Bow with Poison Arrows, are the most successful weapons for hunting. Its venison can be eaten, and the antlers and skin can be used to craft with.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgWhitetailBuck,
        photo: photoWhitetailBuck,
    },
    { 
        id: 'an-12',
        name: 'Whitetail Deer',
        description: 'Whitetail Deer are found in a variety of habitats across the states, but are common to the forests of New Hanover, Lemoyne and West Elizabeth. Their herbivorous diet includes grasses, nuts, fungi, twigs, and fruit. Keeping your distance when hunting deer can increase your chances of a kill as they are easily startled. Long range weapons such as a rifle, or a Bow with Poison Arrows, are considered to be the best when hunting. Deer hide can be used for crafting, and their venison meat can be used for cooking.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgWhitetailDeer,
        photo: photoWhitetailDeer,
    },
    { 
        id: 'an-13',
        name: 'American Bison',
        description: 'The American Bison is native to the plains of New Hanover and West Elizabeth. As a herbivore, it grazes on grains, hay, and corn. Due to the size of an average bison, high powered weapons like a Carcano Rifle, or a Bow with Improved Arrows, should also be considered when hunting. Bison meat can be used for cooking.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        image: imgBison,
        photo: photoBison,
    },
    { 
        id: 'an-14',
        name: 'Angus Bull',
        description: 'The Angus Bull can be found on farms and ranches across the states. Its herbivorous diet includes grains, hay, and corn. The average size of a bull can mean that they are harder to kill. Using a Bow with Improved Arrows, or a high-powered rifle, will increase your chances when hunting. It provides prime beef and horns for crafting with.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgAngusBull,
        photo: photoAngusBull,
    },
    { 
        id: 'an-15',
        name: 'Devon Bull',
        description: 'The Devon Bull can be found at ranches across the states. As a herbivore, it consumes grains, hay, and corn. The easiest way to take a bull of this size out is by using a Bow with Improved Arrows, or a powerful rifle. They also yield prime beef for food, and bull horns which can be used for crafting.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgDevonBull,
        photo: photoDevonBull,
    },
    { 
        id: 'an-16',
        name: 'Hereford Bull',
        description: 'The Hereford Bull can be found at ranches across the states. It is a herbivore, living on grains, hay, and corn. The average size of a bull can mean that they are harder to kill. Using a Bow with Improved Arrows, or a powerful rifle, will increase your chances when hunting. Its meat can be eaten, and its horns are useful for crafting with.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgHerefordBull,
        photo: photoHerefordBull,
    },
    { 
        id: 'an-17',
        name: 'American Bullfrog',
        description: 'The American Bullfrog is often found near calm and shallow waters in warmer climates like the Bayou and Bluewater Marsh. As carnivores, they prey on small fish and insects. They are cannibalistic, and will eat their own kind. The size of this species of frogs means that a Bow with Small Game Arrows is the ideal weapon when hunting. Their herptile meat can be used for food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgBullfrog,
        photo: photoBullfrog,
    },
    { 
        id: 'an-18',
        name: 'Northern Cardinal',
        description: "Northern Cardinals tend to inhabit the woodland areas of New Hanover and West Elizabeth. Their omnivorous diet includes grains, weeds, seeds, and fruit. Cardinals can be killed with less impact than other animals. A Bow with Small Game Arrows can be used successfully whilst hunting these birds. The cardinal's feathers can be used for crafting and their carcasses can be sold to traders.",
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgNorthernCardinal,
        photo: photoNorthernCardinal,
    },
    { 
        id: 'an-19',
        name: 'American Domestic Cat',
        description: 'The American Domestic Cat can be found on ranches and in towns across the states. Though carnivorous in nature, the domesticated cat will consume oatmeal porridge, and bread soaked in milk. Cats make good household pets as they can deal with pest problems within their environment.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgAmericanDomesticCat,
        photo: photoAmericanDomesticCat,
    },
    { 
        id: 'an-20',
        name: 'Cedar Waxwing',
        description: 'The Cedar Waxwing inhabits open and forested areas across the states. Their primary herbivore diet includes berries and sugary fruit all year round, and they will only feed on insects during breeding seasons. A Bow and Small Game Arrows can take down these small birds. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgCedarWaxwing,
        photo: photoCedarWaxwing,
    },
    { 
        id: 'an-21',
        name: 'Dominique Chicken',
        description: 'Dominique Chickens can be found inhabiting ranches, homesteads and towns across the states. As omnivores, their diet consists of seeds, grains, and any insects they may find. Using a Bow with Small Game Arrows will successfully kill the chicken, and will do less damage to their meat. Their plump meat is a good source of food, and the feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgDominiqueChicken,
        photo: photoDominiqueChicken,
    },
    { 
        id: 'an-22',
        name: 'Dominique Rooster',
        description: 'The Dominique Rooster can be found on ranches across Lemoyne, New Hanover, West Elizabeth and New Austin. As omnivores, they usually forage the ground for insects and vegetation. A Bow with Small Game Arrows is considered the most effective weapon for hunting roosters. Their feathers can be used for crafting and their meat is a good source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgDominiqueRooster,
        photo: photoDominiqueRooster,
    },
    { 
        id: 'an-23',
        name: 'Java Chicken',
        description: 'The Java Chicken can be found on ranches, homesteads and in towns across the states. Their omnivorous diet consists of seeds, grains, and any insects that they come across. A Bow and Small Game Arrows can be used to hunt chickens with minimal damage to their meat. Their feathers can be used for crafting, and their plump meat can be used for food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgJavaChicken,
        photo: photoJavaChicken,
    },
    { 
        id: 'an-24',
        name: 'Java Rooster',
        description: "Java Roosters can be found on ranches across Lemoyne, New Hanover, West Elizabeth and New Austin. As omnivores, they forage the ground for insects and vegetation. It's considered that the best way to kill a rooster whilst hunting is with a Bow and Small Game Arrows, as it does the least amount of damage to the meat. Their plump meat is a good source of food, and their feathers can be used for crafting.",
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgJavaRooster,
        photo: photoJavaRooster,
    },
    { 
        id: 'an-25',
        name: 'Leghorn Chicken',
        description: 'The Leghorn Chicken can be found on ranches across Lemoyne, New Hanover, West Elizabeth and New Austin. As omnivores, they usually forge the ground for insects and vegetation. A Bow with Small Game Arrows is considered the most effective weapon for hunting chickens. Their feathers can be used for crafting and their meat is a good source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgLeghornChicken,
        photo: photoLeghornChicken,
    },
    { 
        id: 'an-26',
        name: 'Leghorn Rooster',
        description: 'The Leghorn Rooster can be found on ranches across Lemoyne, New Hanover, West Elizabeth and New Austin. As omnivores, they usually forage the ground for insects and vegetation. A Bow with Small Game Arrows is considered the most effective weapon for hunting chickens. Their feathers can be used for crafting and their meat is a good source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgLeghornRooster,
        photo: photoLeghornRooster,
    },
    { 
        id: 'an-27',
        name: 'Greater Prairie Chicken',
        description: 'The Greater Prairie Chicken is native to the Great Plains. Their omnivorous diet includes grains, nuts, and insects. A Bow with Small Game Arrows is considered to be the most effective way to hunt chickens. Their feathers can be used for crafting, and their plump meat can be used for cooking.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        image: imgGreaterPrairieChicken,
        photo: photoGreaterPrairieChicken,
    },
    { 
        id: 'an-28',
        name: 'Western Chipmunk',
        description: 'Western Chipmunks are native to forested and brush heavy areas of New Hanover, Lemoyne and West Elizabeth. As omnivores, they forage for seeds, buds, fruits, and nuts. A Bow and Small Game Arrows can be used to hunt chipmunks with minimal damage to their carcasses. Their carcasses can be sold to traders.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgWesternChipmunk,
        photo: photoWesternChipmunk,
    },
    { 
        id: 'an-29',
        name: 'Californian Condor',
        description: "The Californian Condor is native to New Austin. This carnivorous scavenger's diet mainly consists of carrion, though bird and reptile carcasses are sometimes eaten. A Varmint Rifle is considered to be the best weapon for shooting condors. Its meat is gamey, and its feathers can be used to craft with.",
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
    },
    { 
        id: 'an-30',
        name: 'Cougar',
        description: 'Cougars are native to the states of New Austin, West Elizabeth and remote forested sections of New Hanover. As carnivores, they prey on deer, elk, moose, and mountain goats. The easiest way to take down a cougar of this size is by either using a Bow with Poison Arrows or a rifle. Their fangs can be used for crafting and their meat can be used as food.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgCougar,
        photo: photoCougar,
    },
    { 
        id: 'an-31',
        name: 'Double-crested Cormorant',
        description: 'Double-crested Cormorants are found near water across Lemoyne, New Hanover and West Elizabeth. As carnivores, they prey on fish, amphibians, and crustaceans. A Bow and Small Game Arrows is considered the best weapon for shooting cormorants. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgDoubleCrestedCormorant,
        photo: photoDoubleCrestedCormorant,
    },
    { 
        id: 'an-32',
        name: 'Neotropic Cormorant',
        description: 'Neotropic Cormorants are native to the wetlands and coastal waters of New Hanover, Lemoyne and West Elizabeth. As carnivores, they prey on aquatic insects, freshwater fish and crustaceans. The Varmint Rifle is considered the best weapon for shooting cormorants. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked'
    },
    { 
        id: 'an-33',
        name: 'Florida Cracker Cow',
        description: 'The Florida Cracker Cow can be found at ranches and homesteads across the states. As herbivores, their diet consists of grains, hay and grasses. The large size of these mammals can mean that it takes longer to kill them when hunting. A long scope rifle, or a Bow with Improved Arrows, are considered to be the best weapons to use whilst hunting. Their hide can be sold to traders, and their prime beef is a good source of food.',
        details: { cleanKillWeapons: ['Heavy Rifle', 'Bow-improved'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgFloridaCrackerCow,
        photo: photoFloridaCrackerCow,
    },
    { 
        id: 'an-34',
        name: 'California Valley Coyote',
        description: 'The California Valley Coyote can be found across New Austin, West Elizabeth, Lemoyne and New Hanover. Their diet is primarily carnivorous, consuming the meat of rodents as its main food source. Using a Bow and arrows, or a repeater, should be considered when hunting for a clean kill. Their pelt can be sold or used in crafting, and their meat can be consumed, though it is considered stringy.',
        details: { cleanKillWeapons: ['Bow', 'Repeater'] },
        image: imgCaliforniaValleyCoyote,
        photo: photoCaliforniaValleyCoyote,
    },
    { 
        id: 'an-35',
        name: 'Cuban Land Crab',
        description: 'The Cuban Land Crab is native to Guarma. As omnivores, their diet consists of leaves, grasses, insects and carrion. A Bow and Small Game Arrows can be used to pierce the carapace. Their carcass can be sold to traders.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgCubanLandCrab,
        photo: photoCubanLandCrab,
    },
    { 
        id: 'an-36',
        name: 'Red Swamp Crayfish',
        description: 'Red Swamp Crayfish are native to the swampland of Bayou Nwa. The Red Swamp Crayfish is an opportunistic omnivore, feeding on any soft vegetation, insect larvae, water snails, and carrion. These freshwater crustaceans can be found within crawfish holes. Their carcasses can be used as fishing bait.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasKillTask: false,
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgRedSwampCrayfish,
        photo: photoRedSwampCrayfish,
    },
    { 
        id: 'an-37',
        name: 'Whooping Crane',
        description: 'Whooping Cranes can be found in the wetlands of Lemoyne and New Hanover. Their omnivorous diet consists of nuts, berries, seeds, and insects, as well as small birds and reptiles. The Varmint Rifle is considered to be the best weapon to take down cranes. Their feathers can be used for crafting and the carcass can be sold to traders.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgWhoopingCrane,
        photo: photoWhoopingCrane,
    },
    { 
        id: 'an-38',
        name: 'Sandhill Crane',
        description: 'The Sandhill Crane inhabits the wet and grassy marshland of Lemoyne and New Hanover. As omnivores, their diet includes nuts, berries, insects, small birds and reptiles. The easiest way to take down a crane is by using a Varmint Rifle. The carcass can be sold to traders and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgSandhillCrane,
        photo: photoSandhillCrane,
    },
    { 
        id: 'an-39',
        name: 'American Crow',
        description: 'The American Crow can be found in a variety of habitats across the states. As omnivores, their diet consists of meat scraps, seeds, eggs, grains, and carrion. A Bow with Small Game Arrows is considered to be the best weapon to use to take down crows. Their carcass can be sold to traders, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgAmericanCrow,
        photo: photoAmericanCrow,
    },
    { 
        id: 'an-40',
        name: 'American Fox Hound',
        description: 'The American Fox Hound is a popular breed of dog that can be found in towns across the states. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. These dogs were bred for hunting, and are cousins of the English Fox Hound.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgAmericanFoxHound,
        photo: photoAmericanFoxHound,
    },
    { 
        id: 'an-41',
        name: 'Australian Shepherd',
        description: 'Australian Shepherd dogs can be found in most towns across the states. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. The breeding of Australian Shepherds has made them good sheep herders, especially in mountain environments.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgAustralianShepherd,
        photo: photoAustralianShepherd,
    },
    { 
        id: 'an-42',
        name: 'Bloodhound',
        description: 'Bloodhounds can be found in towns across the states. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. Bloodhounds have been bred for hunting wild boar and deer.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgBloodhound,
        photo: photoBloodhound,
    },
    { 
        id: 'an-43',
        name: 'Bluetick Coonhound',
        description: 'The Bluetick Coonhound can be found on ranches or in towns across Lemoyne and New Hanover. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. Their strong sense of smell makes them excellent hunting dogs, especially for hunting raccoons.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgBluetickCoonhound,
        photo: photoBluetickCoonhound,
    },
    { 
        id: 'an-44',
        name: 'Border Collie',
        description: 'Border Collies can be found at ranches and in towns across Lemoyne and New Hanover. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. This breed of dog has been bred for herding livestock.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgBorderCollie,
        photo: photoBorderCollie,
    },
    { 
        id: 'an-45',
        name: 'Catahoula Cur',
        description: 'The Catahoula Cur can be found in towns across the states. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. These dogs have been traditionally used for boar hunting.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgCatahoulaCur,
        photo: photoCatahoulaCur,
    },
    { 
        id: 'an-46',
        name: 'Chesapeake Bay Retriever',
        description: 'Chesapeake Bay Retrievers can be found at ranches, homesteads, train stations and towns across New Hanover. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. This breed of dog has been used for hunting, and to retrieve waterfowl.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgChesapeakeBayRetriever,
        photo: photoChesapeakeBayRetriever,
    },
    { 
        id: 'an-47',
        name: 'Siberian Husky',
        description: 'The Siberian Husky can be found in towns and on ranches across West Elizabeth and New Hanover. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. This breed of dog has been bred to help with hunting and gathering.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
    },
    { 
        id: 'an-48',
        name: 'Labrador Retriever',
        description: 'Labrador Retrievers can be found at farms and ranches across New Hanover and New Austin. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. This breed of dog makes good hunting companions.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgLabradorRetriever,
        photo: photoLabradorRetriever,
    },
    { 
        id: 'an-49',
        name: 'Poodle',
        description: 'Poodles can be found in the wealthy neighborhoods of St. Denis and Rhodes. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. Poodles are considered to be good duck and bird hunting companions.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgPoodle,
        photo: photoPoodle,
    },
    { 
        id: 'an-50',
        name: 'Mutt',
        description: 'Mutts can be found across Armadillo and St. Denis. A mutt is recognized as being a cross of at least three different breeds of dogs. Their omnivorous diet usually consists of dog food made up from meat, vegetable matter, and offal. Domestic mutts can make good household pets.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
    },
    { 
        id: 'an-51',
        name: 'Rufus',
        description: "The Marston family dog and Jack's best friend. Rufus is a good boy.",
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
    },
    { 
        id: 'an-52',
        name: 'Standard Donkey',
        description: 'The Standard Donkey can be found at ranches and farms across the states. Their herbivorous diet consists of grasses, hay, and barley straw. Donkeys are considered to be one of the cheapest forms of labor for agricultural work.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgStandardDonkey,
        photo: photoStandardDonkey,
    },
    { 
        id: 'an-53',
        name: 'Mallard Duck',
        description: 'Mallard Ducks are common to the wetlands of West Elizabeth, New Hanover and Lemoyne. As omnivores, their diet consists of nuts, grains, snails, and small fish. A Bow with Small Game Arrows is considered to be the best weapon for hunting ducks. Their gamey meat is a good source of food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        image: imgMallardDuck,
        photo: photoMallardDuck,
    },
    { 
        id: 'an-54',
        name: 'Pekin Duck',
        description: 'The Pekin Duck can be found across the wetlands of West Elizabeth, New Hanover and Lemoyne. Their omnivorous diet includes plant matter, small fish, and small aquatic animals. A Bow with Small Game Arrows is considered the best weapon to use for a clean kill. Their feathers can be used for crafting and their gamey meat can be consumed.',
        details: { cleanKillWeapons: [] },
        hasTrackingTask: false,
        image: imgPekinDuck,
        photo: photoPekinDuck,
    },
    { 
        id: 'an-55',
        name: 'Bald Eagle',
        description: 'The Bald Eagle is native to the mountain habitats of Ambarino and West Elizabeth. As carnivorous opportunistic predators, they prey on small mammals like squirrels, raccoons, rabbits and prairie dogs. The Varmint Rifle is considered to be the best weapon to use when taking down an eagle of this size. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgBaldEagle,
        photo: photoBaldEagle,
    },
    { 
        id: 'an-56',
        name: 'Golden Eagle',
        description: 'The Golden Eagle is native to the mountain habitats of Ambarino and West Elizabeth. The carnivorous predator uses its sharp talons to snatch small mammals, reptiles, birds and fish. The Varmint Rifle is considered to be the best weapon to use when taking down an eagle of this size. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgGoldenEagle,
        photo: photoGoldenEagle,
    },
    { 
        id: 'an-57',
        name: 'Reddish Egret',
        description: 'The Reddish Egret can be found in the swampland of Bayou Nwa. As carnivores, they prey on fish, insects, frogs and crustaceans. The Varmint Rifle is considered to be the best weapon to use when taking down an egret of this size. Their plume can be used for crafting, and their carcass can be sold to traders.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgReddishEgret,
        photo: photoReddishEgret,
    },
    { 
        id: 'an-58',
        name: 'Little Egret',
        description: "The Little Egret's main habitat is the swampland of Bayou Nwa. As carnivores, they prey on fish, crustaceans, frogs and insects. The Varmint Rifle is considered to be the best weapon to use when taking down an egret of this size. The plume from a Little Egret can be used for crafting, and their carcass can be sold.",
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgLittleEgret,
        photo: photoLittleEgret,
    },
    { 
        id: 'an-59',
        name: 'Snowy Egret',
        description: 'The Snowy Egret is native to the swamp and marshland of Lemoyne. As carnivores, they prey on fish, frogs, crustaceans, and insects. The Varmint Rifle is considered to be the best weapon to use when taking down an egret of this size. The plume from a Snowy Egret can be used for crafting, and their carcass can be sold to traders.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgSnowyEgret,
        photo: photoSnowyEgret,
    },
    { 
        id: 'an-60',
        name: 'Rocky Mountain Bull Elk',
        description: 'The Rocky Mountain Bull Elk is native to Ambarino and northern New Hanover. Their herbivorous diet includes grasses, leaves, bark and plants. Elk are easily startled, so it is advised to keep as much distance as possible whilst hunting. Long range weapons like a Bow with Improved Arrows, or a long scope rifle, are considered to be the best for hunting. Their skin and antlers can be used for crafting, and their mature venison is a good source of food.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        image: imgRockyMountainBullElk,
        photo: photoRockyMountainBullElk,
    },
    { 
        id: 'an-61',
        name: 'Rocky Mountain Cow Elk',
        description: 'The Rocky Mountain Cow Elk is native to Ambarino and northern New Hanover. Their herbivorous diet includes grasses, leaves, bark and plants. Elk are easily startled, so it is advised to keep as much distance as possible whilst hunting. Long range weapons like a Bow with Improved Arrows, or a long scope rifle are considered to be the best for hunting. Their skin can be used for crafting, and their mature venison is a good source of food.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        image: imgRockyMountainCowElk,
        photo: photoRockyMountainCowElk,
    },
    { 
        id: 'an-62',
        name: 'American Red Fox',
        description: 'The American Red Fox is native to the forests and grasslands of West Elizabeth, New Hanover, and Lemoyne. As omnivores, their diet consists of small mammals like squirrels and rabbits, as well as birds, fruits, berries, and grasses. A Bow with arrows, or a repeater, is considered to be the best weapon to either wound or kill a fox. The skin and claws of American Red Foxes can be used for crafting.',
        details: { cleanKillWeapons: ['Repeater'] },
        image: imgAmericanRedFox,
        photo: photoAmericanRedFox,
    },
    { 
        id: 'an-63',
        name: 'American Gray Fox',
        description: 'The American Gray Fox is native to the forests and grasslands of West Elizabeth, New Hanover, and Lemoyne. As omnivores, their diet consists of small mammals like squirrels and rabbits, as well as birds, fruits, berries, and grasses. Foxes can be easily killed or wounded by using a repeater or a Bow with arrows. The skin and claws of American Gray Foxes can be used for crafting.',
        details: { cleanKillWeapons: ['Repeater'] },
        image: imgAmericanGrayFox,
        photo: photoAmericanGrayFox,
    },
    { 
        id: 'an-64',
        name: 'Silver Fox',
        description: 'The Silver Fox can be found in various habitats across the states. They are omnivores, feeding on plant matter, rodents, insects, birds, and carrion. A Bow with arrows, or a repeater, is considered to be the best weapon to either wound or kill a fox. Their skin and claws can be used for crafting.',
        details: { cleanKillWeapons: ['Repeater'] },
        image: imgSilverFox,
        photo: photoSilverFox,
    },
    { 
        id: 'an-65',
        name: 'Banded Gila Monster',
        description: 'The Banded Gila Monster is native to the deserts of New Austin. As carnivores, they prey on small mammals, lizards, frogs, birds, bird eggs and carrion. The Varmint Rifle is considered to be the best for hunting lizards of this size. Their herptile meat is edible, and their carcasses can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
    },
    { 
        id: 'an-66',
        name: 'Alpine Goat',
        description: 'Domestic Alpine Goats can be found at ranches and farms across the states. Their herbivore diet means that they graze on grasses, weeds, herbs and trees. A Bow with arrows, or a repeater, are the best weapons for a clean kill. Goat hide can be used for crafting, and the gristly meat can be consumed.',
        details: { cleanKillWeapons: ['Repeater'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgAlpineGoat,
        photo: photoAlpineGoat,
    },
    { 
        id: 'an-67',
        name: 'Canada Goose',
        description: 'The Canada Goose inhabits grasslands of New Hanover and Lemoyne. They are primarily herbivores, grazing on grasses and grains, but they will also eat small fishes and insects. The Varmint Rifle is considered to be the best for hunting geese of this size. Their plump meat is a good source of food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgCanadaGoose,
        photo: photoCanadaGoose,
    },
    { 
        id: 'an-68',
        name: 'Ferruginous Hawk',
        description: 'Ferruginous Hawks can be found across the states. As carnivores, they prey on small mammals like rabbits, ground squirrels, prairie dogs, lizards, and birds. The Varmint Rifle is considered to be the best weapon for a clean kill. The feathers of the hawks can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgFerruginousHawk,
        photo: photoFerruginousHawk,
    },
    { 
        id: 'an-69',
        name: 'Red-Tailed Hawk',
        description: 'The Red-tailed Hawks are native to the open fields and deserts of New Austin, West Elizabeth and New Hanover. As omnivores, their diet consists of small mammals, reptiles, fish, birds, and fresh carrion. The Varmint Rifle is considered to be the best for hunting hawks and other birds of this size. The feathers of the hawks can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgRedTailedHawk,
        photo: photoRedTailedHawk,
    },
    { 
        id: 'an-70',
        name: 'Rough-Legged Hawk',
        description: 'Rough-legged Hawks can be found in open areas and alongside cliffs across the states. As carnivores, they prey on small mammals, and carrion becomes their main diet during the winter seasons. The easiest way to take out a bird of this size is using a Varmint Rifle. The feathers of the hawks can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgRoughLeggedHawk,
        photo: photoRoughLeggedHawk,
    },
    { 
        id: 'an-71',
        name: 'Great Blue Heron',
        description: 'The Great Blue Heron inhabits the wet and grassy marshlands of Lemoyne. Their carnivorous diet consists of small fish, crustaceans, amphibians, and small birds. The Varmint Rifle is considered to be the best weapon to wound or kill a heron. Herons plume can be used for crafting and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgGreatBlueHeron,
        photo: photoGreatBlueHeron,
    },
    { 
        id: 'an-72',
        name: 'Tricolored Heron',
        description: 'Tricolored Herons can be found in the wet and grassy marshlands of Lemoyne. As carnivores, they prey on fish, insects, amphibians, and crustaceans. The Varmint Rifle is considered to be the best weapon for a clean kill. Heron plumes can be used for crafting and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgTricoloredHeron,
        photo: photoTricoloredHeron,
    },
    { 
        id: 'an-73',
        name: 'Desert Iguana',
        description: 'The Desert Iguana is native to New Austin. Generally considered herbivores, eating perennial plants, fruit and occasionally insects, iguanas can easily be killed with a Varmint Rifle. Their herptile meat is edible, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
    },
    { 
        id: 'an-74',
        name: 'Green Iguana',
        description: 'Green Iguanas are native to Guarma. Primarily herbivores, they feed on plants, leaves, fruit and flowers. Occasionally they will eat eggs, leaf dwelling insects and snails. The Varmint Rifle is considered to be the best weapon to wound or kill an iguana. Their herptile meat is edible, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgGreenIguana,
        photo: photoGreenIguana,
    },
    { 
        id: 'an-75',
        name: 'Collared Peccary',
        description: 'The Collard Peccary are native to New Austin. Their herbivorous diet consists of agave, prickly pear cacti, mesquite beans, fruits, nuts, and roots. A repeater or a Bow with arrows are considered to be the most effective weapons to use when hunting wild pigs. Their carcasses can be sold to traders and their meat can be cooked.',
        details: { cleanKillWeapons: [] },
    },
    { 
        id: 'an-76',
        name: 'Common Loon',
        description: 'Common Loons are native to the calm and quiet wetlands of West Elizabeth, Ambarino and New Hanover. Their carnivorous diet includes crustaceans, amphibians, salamanders, frogs, leeches, and snails. The best way to kill or wound a Common Loon is with a Bow with Small Game Arrows. The gamey meat of loons can be used for food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        image: imgCommonLoon,
        photo: photoCommonLoon,
    },
    { 
        id: 'an-77',
        name: 'Pacific Loon',
        description: 'The Pacific Loon is native to the remote lakes and ponds of West Elizabeth, Ambarino and New Hanover. As carnivores, their diet includes small fish and aquatic insects, as well as some plant matter during breeding seasons. These small birds can be easily killed with a Bow and Small Game Arrows. The gamey meat of loons can be used for food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        image: imgPacificLoon,
        photo: photoPacificLoon,
    },
    { 
        id: 'an-78',
        name: 'Yellow-Billed Loon',
        description: 'Yellow-billed Loons can be found in the wetlands of West Elizabeth and Ambarino. As carnivores, they prey on small to medium fish, as well as aquatic insects. A Bow with Small Game Arrows is the most effective way to wound or kill these small birds. The gamey meat of loons can be used for food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        image: imgYellowBilledLoon,
        photo: photoYellowBilledLoon,
    },
    { 
        id: 'an-79',
        name: 'Western Bull Moose',
        description: 'The Western Bull Moose is native to the state of West Elizabeth. Their omnivorous diet includes shoots from willow and birch trees, aquatic plants and forbs. These large mammals can be taken down with either a Bow with Improved Arrows, or with a long scope rifle. The pelt and antlers from a moose can be used for crafting.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        image: imgWesternBullMoose,
        photo: photoWesternBullMoose,
    },
    { 
        id: 'an-80',
        name: 'Western Moose',
        description: 'The Western Moose can be found in the remote forested areas of West Elizabeth, Ambarino and New Hanover. Their omnivorous diet includes shoots from willow and birch trees, aquatic plants and forbs. The most effective way to hunt these large mammals is either with a Bow with Improved Arrows, or with a long scope rifle. The pelt from a moose can be used for crafting.',
        details: { cleanKillWeapons: [] },
        image: imgWesternMoose,
        photo: photoWesternMoose,
    },
    { 
        id: 'an-81',
        name: 'Mule',
        description: 'Mules can be found on farms and ranches across New Hanover. As herbivores, they graze on grasses, hay and grains. Mules are considered to be preferable to horses for manual work due to their tougher skin and harder hooves.',
        details: { cleanKillWeapons: [] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgMule,
        photo: photoMule,
    },
    { 
        id: 'an-82',
        name: 'American Muskrat',
        description: "The American Muskrat's main habitat is along the rivers and shores of New Austin, West Elizabeth, Lemoyne and New Hanover. As omnivores, their diet consists of aquatic vegetation, small fish and amphibians. The Varmint Rifle is the most effective way to hunt these rodents. Muskrat skin and scent glands can be used for crafting, and their stringy meat can be used for cooking.",
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgAmericanMuskrat,
        photo: photoAmericanMuskrat,
    },
    { 
        id: 'an-83',
        name: 'Baltimore Oriole',
        description: 'The Baltimore Oriole can be found in Roanoke Ridge. Their omnivorous diet includes fruit, nectar from flowers, and insects. The best way to kill or wound an oriole is with a Bow with Small Game Arrows. Oriole carcasses can be sold to traders.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgBaltimoreOriole,
        photo: photoBaltimoreOriole,
    },
    { 
        id: 'an-84',
        name: 'Hooded Oriole',
        description: "The Hooded Oriole's main habitat is West Elizabeth. As an omnivore, their diet consists of leaf insects, fruit and nectar from flowers. A Bow with Small Game Arrows is considered to be the most effective way to kill or wound these small birds. Oriole carcasses can be sold to traders.",
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgHoodedOriole,
        photo: photoHoodedOriole,
    },
    { 
        id: 'an-85',
        name: 'Californian Horned Owl',
        description: 'The Californian Horned Owl is native to New Austin. As carnivores, they prey on mammals like hares, rabbits, mice and small birds. A Varmint Rifle is considered the best weapon to wound or kill a bird this size. Owl feathers can be used for crafting, and their gamey meat can be cooked for food.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
    },
    { 
        id: 'an-86',
        name: 'Coastal Horned Owl',
        description: 'Coastal Horned Owls are found in a variety of habitats across the states. Their carnivorous diet means they prey on small mammals and birds. A Varmint Rifle is considered to be the most effective way to kill or wound a bird of this size. Owl feathers can be used for crafting, and their gamey meat can be cooked for food.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgCoastalHornedOwl,
        photo: photoCoastalHornedOwl,
    },
    { 
        id: 'an-87',
        name: 'Great Horned Owl',
        description: 'The Great Horned Owl can be found in a variety of habitats across the states. As carnivores, they prey on mammals, small birds and invertebrates. The most effective way to kill an owl or bird of this size is with a Varmint Rifle. Owl feathers can be used for crafting, and their gamey meat can be cooked for food.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgGreatHornedOwl,
        photo: photoGreatHornedOwl,
    },
    { 
        id: 'an-88',
        name: 'Angus Ox',
        description: 'Angus Oxen can be found on ranches and farms across West Elizabeth, New Hanover and Lemoyne. As herbivores, their main diet consists of common roughage including grasses, hay, and silage. These large mammals can be taken down with either a Bow with Improved Arrows, or a long scope rifle. Oxen hide and horns can be used for crafting.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgAngusOx,
        photo: photoAngusOx,
    },
    { 
        id: 'an-89',
        name: 'Devon Ox',
        description: 'Devon Oxen can be found on ranches and farms across West Elizabeth, New Hanover and Lemoyne. As herbivores, their main diet consists of common roughage including grasses, hay, and silage. An effective way to hunt these large mammals is with either a long scope rifle or a Bow with Improved Arrows. Oxen hide and horns can be used for crafting.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgDevonOx,
        photo: photoDevonOx,
    },
    { 
        id: 'an-90',
        name: 'Panther',
        description: 'Panthers are native to the remote forested wetlands of Lemoyne. As carnivores, they prey on deer, wild boars and goats. An effective way to hunt these large mammals is with either a rifle with High Velocity or Express Bullets, or a Bow with Improved Arrows. The heart and claws from panthers can be used for crafting, and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgPanther,
        photo: photoPanther,
    },
    { 
        id: 'an-91',
        name: 'Florida Panther',
        description: 'The Florida Panther can be found in the remote forested wetlands of Lemoyne. As carnivores, they prey on armadillos, raccoons, white-tailed deer, feral hogs, and occasionally alligators. These temperamental cats can be killed or wounded using a rifle, or a Bow with Poison Arrows. The heart and claws from panthers can be used for crafting, and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgFloridaPanther,
        photo: photoFloridaPanther,
    },
    { 
        id: 'an-92',
        name: 'Caroline Parakeet',
        description: 'Carolina Parakeets are native to the Bayou. Their herbivorous diet consists of shrubs, seeds and fruit from forest trees. A Bow and Small Game Arrows can take down these small birds. Their carcasses can be sold to traders.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
    },
    { 
        id: 'an-93',
        name: 'Blue And Yellow Macaw',
        description: 'Blue and Yellow Macaws can be found across Guarma. As herbivores, their diet includes fruits, seeds, plants, nuts and leaves. The most effective way to hunt these colorful birds is with a Bow and Small Game Arrows. Macaw feathers can be used for crafting and their exotic bird meat can be used for cooking.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgBlueAndYellowMacaw,
        photo: photoBlueAndYellowMacaw,
    },
    { 
        id: 'an-94',
        name: 'Great Green Macaw',
        description: "The Great Green Macaw's main habitat is Guarma. As herbivores, their diet consists of fruits, seeds, plants, nuts and leaves. A Bow with Small Game Arrows is considered to be the best way to hunt these colorful birds. Macaw feathers can be used for crafting and their exotic bird meat can be used for cooking.",
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgGreatGreenMacaw,
        photo: photoGreatGreenMacaw,
    },
    { 
        id: 'an-95',
        name: 'Scarlet Macaw',
        description: 'The Scarlet Macaw is native to Guarma. Their herbivorous diet includes fruits, seeds, plants, nuts and leaves. A Bow with Small Game Arrows is the most effective way to hunt these birds. Macaw feathers can be used for crafting and their exotic bird meat can be used for cooking.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgScarletMacaw,
        photo: photoScarletMacaw,
    },
    { 
        id: 'an-96',
        name: 'American White Pelican',
        description: 'The American White Pelican is native to the coastal areas of West Elizabeth, New Hanover and Lemoyne. Their carnivorous diet consists of fish, insects, amphibians, turtles, crustaceans, birds and small mammals. The Varmint Rifle is considered to be the most effective weapon for hunting pelicans. The meat from pelicans can be used for cooking and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgAmericanWhitePelican,
        photo: photoAmericanWhitePelican,
    },
    { 
        id: 'an-97',
        name: 'Brown Pelican',
        description: 'Brown Pelicans are native to the coastal areas of West Elizabeth, New Hanover and Lemoyne. As carnivores, their diet includes small birds and mammals, turtles, crustaceans, fish and amphibians. The Varmint Rifle is considered to be the ideal weapon for hunting pelicans. The feathers from pelicans can be used for crafting, and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgBrownPelican,
        photo: photoBrownPelican,
    },
    { 
        id: 'an-98',
        name: 'Ring-Chested Pheasant',
        description: 'The Ring-necked Pheasants can be found in the grasslands of New Hanover and West Elizabeth. They are omnivores but their diet changes seasonally. In the winter, they feed on grains and, in the summer, they eat small insects. An effective weapon to use when hunting pheasants is a Bow with Small Game Arrows. The feathers of pheasants can be used for crafting, and their meat provides a good source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        image: imgRingChestedPheasant,
        photo: photoRingChestedPheasant,
    },
    { 
        id: 'an-99',
        name: 'Chinese Ring-Necked Pheasant',
        description: 'Chinese Ring-necked Pheasants are native to the grass and forest lands of New Hanover and West Elizabeth. They are omnivores but their diet changes seasonally. In the winter, they feed on grains and, in the summer, they eat small insects. A Bow with Small Game Arrows is considered to be the most effective weapon to hunt pheasants. The meat from pheasants is a good source of food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgChineseRingNeckedPheasant,
        photo: photoChineseRingNeckedPheasant,
    },
    { 
        id: 'an-100',
        name: 'Berkshire Pig',
        description: 'Berkshire Pigs can be found on ranches and in towns across New Hanover. As omnivores, their diet consists of mice, eggs, agricultural crops, fungi, roots, and grasses. A repeater, or a Bow with arrows, is considered to be the most effective weapon to use when hunting pigs. The tender meat is perfect for cooking, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Repeater'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgBerkshirePig,
        photo: photoBerkshirePig,
    },
    { 
        id: 'an-101',
        name: 'Big China Pig',
        description: "Big China Pigs are found on ranches and in towns across New Hanover. Their omnivorous diet includes, mice, worms, eggs, grasses, fungi, and roots. It's considered that the best weapons to hunt pigs with is a Bow with arrows, or a repeater. Their skin can be used for crafting and their tender meat is a good source of food.",
        details: { cleanKillWeapons: ['Repeater'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgBigChinaPig,
        photo: photoBigChinaPig,
    },
    { 
        id: 'an-102',
        name: 'Old Spot Pig',
        description: 'Old Spot Pigs can be found on ranches and in towns across New Hanover. Their omnivorous diet consists of lizards, mice, eggs, agricultural crops, and fungi, and grasses. A repeater, or a Bow with arrows, are considered to be the most effective weapons to use when hunting pigs. Pig skin can be used for crafting, and their tender meat can be used for cooking.',
        details: { cleanKillWeapons: ['Repeater'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgOldSpotPig,
        photo: photoOldSpotPig,
    },
    { 
        id: 'an-103',
        name: 'Band-Tailed Pigeon',
        description: 'Band-tailed Pigeons can be found in the damp forests of West Elizabeth. Their omnivorous diet includes berries, grains, fruits, shrubs, pine nuts, and insects. An effective way to kill or wound a pigeon is with a Bow with Small Game Arrows. Their feathers can be used for crafting, and the carcasses can be sold.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgBandTailedPigeon,
        photo: photoBandTailedPigeon,
    },
    { 
        id: 'an-104',
        name: 'Rock Pigeon',
        description: 'Rock Pigeons can be found in a variety of habitats across the states. As omnivores, their diet consists of berries, fruits, grains, earthworms, and seeds. These small birds can be wounded or killed easily by a Bow with Small Game Arrows. Pigeon carcasses can be sold to traders, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgRockPigeon,
        photo: photoRockPigeon,
    },
    { 
        id: 'an-105',
        name: 'Virginia Opossum',
        description: 'The Virginia Opossum can be found in a variety of habitats across the states. As omnivores, their diet consists of grains, nuts, fruits, amphibians, birds and their eggs, mice, and carrion. The Varmint Rifle is the most effective weapon for hunting these mammals. Opossum meat is stringy but edible, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgVirginiaOpossum,
        photo: photoVirginiaOpossum,
    },
    { 
        id: 'an-106',
        name: 'American Pronghorn Buck',
        description: 'The American Pronghorn Buck is native to the wide open grasslands of New Hanover and West Elizabeth. As herbivores, their diet includes sagebrush, green shoots, grasses and forbs. As a large animal, a high impact weapon is needed when hunting. The most popular weapons used when hunting are rifles and Bows with Poison Arrows. Pronghorn skin can be used for crafting, and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgAmericanPronghornBuck,
        photo: photoAmericanPronghornBuck,
    },
    { 
        id: 'an-107',
        name: 'American Pronghorn Doe',
        description: 'The American Pronghorn Doe is native to the wide open grasslands of New Hanover and West Elizabeth. As herbivores, their diet includes sagebrush, green shoots, grasses and forbs. As a large animal, a high impact weapon is needed when hunting. The most popular weapons used when hunting are rifles and Bows with Poison Arrows. Pronghorn skin can be used for crafting, and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgAmericanPronghornDoe,
        photo: photoAmericanPronghornDoe,
    },
    { 
        id: 'an-108',
        name: 'Sonoran Pronghorn Buck',
        description: 'The Sonoran Pronghorn Bucks can be found in the open deserts of New Austin. Their herbivorous diet consists of grasses, forbs, green shots, and sagebrush. These large mammals require higher impact weapons when hunting. The ideal weapons for an effective take down are rifles or a Bow with arrows. Their mature venison can be used in cooking, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Rifle'] },
    },
    { 
        id: 'an-109',
        name: 'Sonoran Pronghorn Doe',
        description: 'The Sonoran Pronghorn Doe can be found in the open deserts of New Austin. Their herbivorous diet consists of grasses, forbs, green shots, and sagebrush. These large mammals require higher impact weapons when hunting. The ideal weapons for an effective take down are rifles or a Bow with arrows. Their mature venison can be used in cooking, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Rifle'] },
    },
    { 
        id: 'an-110',
        name: 'Baja California Pronghorn Buck',
        description: "The Baja Californian Pronghorn Buck's main habitat is Gaptooth Ridge and Rio Bravo. As herbivores, their diet includes sagebrush, green shoots, grasses and forbs. These large mammals require higher impact weapons when hunting. The ideal weapons for an effective take down are rifles or a Bow with arrows. Their mature venison can be used in cooking, and their skin can be used for crafting.",
        details: { cleanKillWeapons: ['Rifle'] },
    },
    { 
        id: 'an-111',
        name: 'Baja California Pronghorn Doe',
        description: "The Baja Californian Pronghorn Doe's main habitat is Gaptooth Ridge and Rio Bravo. As herbivores, their diet includes sagebrush, green shoots, grasses and forbs. These large mammals require higher impact weapons when hunting. The ideal weapons for an effective take down are rifles or a Bow with arrows. Their mature venison can be used in cooking, and their skin can be used for crafting.",
        details: { cleanKillWeapons: ['Rifle'] },
    },
    { 
        id: 'an-112',
        name: 'California Quail',
        description: 'The Californian Quail can be found in New Austin. As omnivores, seeds make up their main diet, with insects, berries and acorns being secondary. These small birds can easily be killed or wounded by using a Bow with Small Game Arrows. The carcass of a quail can be sold to traders.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgCaliforniaQuail,
        photo: photoCaliforniaQuail,
    },
    { 
        id: 'an-113',
        name: 'Sierra Nevada Bighorn Ram',
        description: 'The Sierra Nevada Bighorn Ram can be found in New Austin and West Elizabeth. As herbivores, they graze on forbs, woody vegetation, and grasses. The easiest way to take down a ram of this size is by either using a Bow with Poison Arrows or a rifle. Their meat is edible but gristly, and their horns and hides can be used for crafting.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgSierraNevadaBighornRam,
        photo: photoSierraNevadaBighornRam,
    },
    { 
        id: 'an-114',
        name: 'Sierra Nevada Bighorn Sheep',
        description: 'The Sierra Nevada Bighorn Sheep inhabits New Austin and West Elizabeth. As a herbivore, it grazes on forbs, woody vegetation and grasses. Using a Bow with arrows, or a rifle, is the easiest way to take down a sheep of this size. Sheep also provide gristly mutton and hides which can be used as food and material to craft with.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgSierraNevadaBighornSheep,
        photo: photoSierraNevadaBighornSheep,
    },
    { 
        id: 'an-115',
        name: 'Desert Bighorn Ram',
        description: 'The Desert Bighorn Ram inhabits New Austin. Their herbivorous diet consists of desert holly, cacti, and grasses. The easiest way to take down a ram of this size is by either using a Bow with Poison Arrows or a rifle. Their mutton, horns and hide can be used for food or crafting.',
        details: { cleanKillWeapons: ['Rifle'] },
    },
    { 
        id: 'an-116',
        name: 'Desert Bighorn Sheep',
        description: 'The Desert Bighorn Sheep inhabits the varied terrain of New Austin. It has a herbivorous diet of desert holly, cacti, and grasses. Using a Bow with arrows, or a rifle, is the easiest way to take down a sheep of this size. They also provide mutton to eat, and hides for crafting with.',
        details: { cleanKillWeapons: ['Rifle'] },
    },
    { 
        id: 'an-117',
        name: 'Rocky Mountain Bighorn Ram',
        description: "The Rocky Mountain Bighorn Ram's main habitat is the Grizzlies region. They are herbivores, mainly consuming grasses and sedges, but they will also eat woody plants in the winter. The easiest way to take down a ram of this size is by either using a Bow with Poison Arrows or a rifle. Ram mutton is gristly, and their horns and hides can be used to craft with.",
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgRockyMountainBighornRam,
        photo: photoRockyMountainBighornRam,
    },
    { 
        id: 'an-118',
        name: 'Rocky Mountain Bighorn Sheep',
        description: 'Rocky Mountain Bighorn Sheep are native to the Grizzlies and Cumberland Forest. This herbivore mainly lives on grasses and sedges, as well as woody plants in the winter. Using a rifle, or a Bow with arrows, will successfully take down a sheep of this size. It can provide gristly mutton to eat, and a hide to craft with.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgRockyMountainBighornSheep,
        photo: photoRockyMountainBighornSheep,
    },
    { 
        id: 'an-119',
        name: 'Black-Tailed Jackrabbit',
        description: 'The Black-tailed Jackrabbit can be found in a variety of habitats across the states. As herbivores, their diet consists of vegetation forbs, buds, twigs, bark, and crops, which is why they are considered pests. A Varmint Rifle is the ideal weapon to use when hunting rabbits. Rabbit pelts can be used for crafting, and their gamey meat can be used for cooking.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgBlackTailedJackrabbit,
        photo: photoBlackTailedJackrabbit,
    },
    { 
        id: 'an-120',
        name: 'North American Raccoon',
        description: 'North American Raccoons are found across Lemoyne, New Hanover and West Elizabeth. As omnivores, their diet includes plants, berries, amphibians, rodents, and eggs, depending on their environment. The Varmint Rifle is the most effective weapon for hunting raccoons. Their meat is edible but stringy, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgNorthAmericanRaccoon,
        photo: photoNorthAmericanRaccoon,
    },
    { 
        id: 'an-121',
        name: 'Black Rat',
        description: 'Black Rats can be found in Saint Denis and other highly populated areas. As omnivores, they scavenge for any scraps they can find, including seeds, leaves, agricultural crops and fungi. Rats can be easily killed or wounded with a Bow with Small Game Arrows. Their meat is stringy but edible, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgBlackRat,
        photo: photoBlackRat,
    },
    { 
        id: 'an-122',
        name: 'Brown Rat',
        description: "Brown Rats can be found in Armadillo and other densely populated areas. Their omnivorous diet is based on scavenging food, as well as grains, seeds, small mammals and birds. It's considered that a Bow with Small Game Arrows is the most effective way to kill or wound rats. Rat skin can be used for crafting and their stringy meat can be used for cooking.",
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgBrownRat,
        photo: photoBrownRat,
    },
    { 
        id: 'an-123',
        name: 'Western Raven',
        description: 'The Western Raven can be found in a variety of habitats across the states. As omnivores, their diet consists of grains and seeds, but they prefer to scavenge for carrion and eggs of other nesting birds. A Bow with Small Game Arrows can be used to kill or wound a bird of this size. Raven feathers can be used for crafting, and their meat can be used for cooking.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgWesternRaven,
        photo: photoWesternRaven,
    },
    { 
        id: 'an-124',
        name: 'Red-Footed Booby',
        description: 'The Red-footed Booby is native to Guarma. As carnivores, they prey on small fish and squid. The most effective weapon to kill or wound a small bird is a Bow with Small Game Arrows. Their gamey meat can be used for cooking, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgRedFootedBooby,
        photo: photoRedFootedBooby,
    },
    { 
        id: 'an-125',
        name: 'American Robin',
        description: "The American Robin is native to a wide range of habitats across the states. Their omnivorous diet consists of insects, grubs, berries and fruit. It's considered that the most effective way to hunt these small birds is with a Bow and Small Game Arrows. Their plump meat is a good source of food and their feathers can be used for crafting.",
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgAmericanRobin,
        photo: photoAmericanRobin,
    },
    { 
        id: 'an-126',
        name: 'Rosaeta Spoonbill',
        description: 'The Roseate Spoonbill is native to Bayou Nwa. As omnivores, their main diet consists of algae, crustaceans, insects, and small fish. The Varmint Rifle is considered to be the best weapon to wound or kill a spoonbill. Their colorful feathers can be used for crafting, and their gamey meat can be consumed.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgRosaetaSpoonbill,
        photo: photoRosaetaSpoonbill,
    },
    { 
        id: 'an-127',
        name: 'Herring Gull',
        description: 'Herring Gulls can be found in the Bluewater Marsh. Their omnivorous diet consists of bird eggs, marine fish, garbage, and carrion. A Bow with Small Game Arrows is considered to be the best weapon for a clean kill. Their gamey meat can be consumed, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgHerringGull,
        photo: photoHerringGull,
    },
    { 
        id: 'an-128',
        name: 'Laughing Gull',
        description: 'Laughing Gulls can be found across Lemoyne. As omnivores, their main diet consists of bird eggs, insects, squid, crustaceans, fish and garbage. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a seagull. Their gamey meat is a good source of food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgLaughingGull,
        photo: photoLaughingGull,
    },
    { 
        id: 'an-129',
        name: 'Ring-Billed Gull',
        description: 'The Ring-billed Gull can be found across Saint Denis. As scavengers, they often steal food from other birds. Their omnivorous diet consists of bird eggs, insects, rodents and grains. A Bow with Small Game Arrows can be used for a clean kill. Gull meat can be used as a source of food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgRingBilledGull,
        photo: photoRingBilledGull,
    },
    { 
        id: 'an-130',
        name: 'Merino Sheep',
        description: 'The Merino Sheep can be found on ranches and in towns across New Hanover. As herbivores, they feed on pasture plants, grasses, clovers and forbs. A repeater, or a Bow with arrows, is considered to be the best weapon for hunting sheep. Their wool can be used for crafting, and their gristly meat can be consumed.',
        details: { cleanKillWeapons: ['Repeater'] },
        hasKillTask: false,
        hasTrackingTask: false,
        hasHarvestTask: false,
        image: imgMerinoSheep,
        photo: photoMerinoSheep,
    },
    { 
        id: 'an-131',
        name: 'Striped Skunk',
        description: "The Striped Skunk can be found in a variety of habitats across the states. Their omnivorous diet consists of insects, fish, crustaceans, small mammals, grasses, fruits, and carrion. Skunks have the ability to create a spray using their scent glands to deter predators. This makes long range weapons like the Varmint Rifle the best to hunt this type of animal. Their skin can be used for crafting and their meat can be consumed, though it's considered to be stringy.",
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        image: imgStripedSkunk,
        photo: photoStripedSkunk,
    },
    { 
        id: 'an-132',
        name: 'Red Boa Snake',
        description: 'The Red Boa is native to Guarma. As carnivores, they prey on rodents, lizards, birds, amphibians. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake, without causing too much damage to the skin. Their skin can be used for crafting, and their stringy meat can be consumed.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgRedBoaSnake,
        photo: photoRedBoaSnake,
    },
    { 
        id: 'an-133',
        name: 'Rainbow Boa Snake',
        description: 'The Rainbow Boa is native to Guarma. As carnivores, they prey on rodents, lizards, birds, amphibians. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake, without causing too much damage to the skin. Their skin can be used for crafting, and their stringy meat can be consumed.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgRainbowBoaSnake,
        photo: photoRainbowBoaSnake,
    },
    { 
        id: 'an-134',
        name: 'Sunglow Boa Snake',
        description: 'The Sunglow Boa is native to Guarma. As carnivores, they prey on rodents, lizards, birds, amphibians. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake, without causing too much damage to the skin. Their skin can be used for crafting, and their stringy meat can be consumed.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgSunglowBoaSnake,
        photo: photoSunglowBoaSnake,
    },
    { 
        id: 'an-135',
        name: 'Diamondback Rattlesnake',
        description: 'The Diamondback Rattlesnake is native to Lemoyne, New Hanover and parts of West Elizabeth. As carnivores, they prey on ground dwelling birds, mice, rabbits, and gophers. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat can be used as a source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgDiamondbackRattlesnake,
        photo: photoDiamondbackRattlesnake,
    },
    { 
        id: 'an-136',
        name: 'Fer-De-Lance Snake',
        description: 'The Fer-de-Lance Snake is native to Guarma. Their extremely toxic venom makes them effective predators, preying on mammals, amphibians, reptiles, and other snakes. Fer-de-Lance Snakes are considered to be the most dangerous snake to humans. A Bow with Small Game Arrows is the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat can be consumed, though is considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgFerDeLanceSnake,
        photo: photoFerDeLanceSnake,
    },
    { 
        id: 'an-137',
        name: 'Black-Tailed Rattlesnake',
        description: 'The Black-tailed Rattlesnake can be found New Austin. As carnivores, they prey on small animals like mice, rats and lizards. A Bow with Small Game Arrows is considered to be the best weapon to kill these snakes, without causing too much damage to their skin. Their meat is edible, though considered to be stringy, and their skin can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
    },
    { 
        id: 'an-138',
        name: 'Timber Rattlesnake',
        description: 'The Timber Rattlesnake is native to Lemoyne, New Hanover and parts of West Elizabeth. As carnivores, they prey on small birds, mice, rabbits, and lizards. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting and their meat can be used as a source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgTimberRattlesnake,
        photo: photoTimberRattlesnake,
    },
    { 
        id: 'an-139',
        name: 'Northern Copperhead Snake',
        description: 'Northern Copperhead Snakes can be found across New Hanover and Lemoyne. Their carnivorous diet consists of mice, lizards, insects, and small birds. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat is edible, though considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgNorthernCopperheadSnake,
        photo: photoNorthernCopperheadSnake,
    },
    { 
        id: 'an-140',
        name: 'Southern Copperhead Snake',
        description: 'Southern Copperhead Snakes can be found across New Hanover, Lemoyne, and southern areas of West Elizabeth. Their carnivorous diet consists of mice, lizards, insects, and small birds. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat is edible, though considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgSouthernCopperheadSnake,
        photo: photoSouthernCopperheadSnake,
    },
    { 
        id: 'an-141',
        name: 'Midland Water Snake',
        description: 'Midland Water Snakes are native to the coastal shores of Roanoke Ridge and swamplands of Lemoyne. Their carnivorous diet consists of game, frogs, salamanders, and fish. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat is edible, though considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgMidlandWaterSnake,
        photo: photoMidlandWaterSnake,
    },
    { 
        id: 'an-142',
        name: 'Cottonmouth Snake',
        description: 'Cottonmouth Snakes are native to the coastal shores of Roanoke Ridge and swamplands of Lemoyne. Their carnivorous diet consists of game, frogs, salamanders, and fish. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat is edible, though considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgCottonmouthSnake,
        photo: photoCottonmouthSnake,
    },
    { 
        id: 'an-143',
        name: 'Northern Water Snake',
        description: 'Northern Water Snakes are native to the coastal shores of Roanoke Ridge and swamplands of Lemoyne. Their carnivorous diet consists of game, frogs, salamanders, and fish. A Bow with Small Game Arrows is considered to be the best weapon to wound or kill a snake of this size. Their skin can be used for crafting, and their meat is edible, though considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        image: imgNorthernWaterSnake,
        photo: photoNorthernWaterSnake,
    },
    { 
        id: 'an-144',
        name: 'Scarlet Tanager Songbird',
        description: 'The Scarlet Tanager Songbird can be found in forested areas across Lemoyne, New Hanover and West Elizabeth. As omnivores, their diet consists of ants, beetles, butterflies, buds and fruit. These small birds can easily be killed using a Bow with Small Game Arrows. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgScarletTanagerSongbird,
        photo: photoScarletTanagerSongbird,
    },
    { 
        id: 'an-145',
        name: 'Western Tanager Songbird',
        description: 'Western Tanager Songbirds are found across New Austin, West Elizabeth and New Hanover. Their omnivorous diet consists of insects, ants, during breeding seasons, and fruit berries and buds during winter. A Bow with Small Game Arrows is considered to be the best weapon for taking down small birds like songbirds. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgWesternTanagerSongbird,
        photo: photoWesternTanagerSongbird,
    },
    { 
        id: 'an-146',
        name: 'Eurasian Tree Sparrow',
        description: 'The Eurasian Tree Sparrow can be found in the grasslands of West Elizabeth and New Hanover. Their omnivorous diet consists of seeds, grains, and inspects. A Bow with Small Game Arrows is considered to be the best weapon for taking down small birds like sparrows. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgEurasianTreeSparrow,
        photo: photoEurasianTreeSparrow,
    },
    { 
        id: 'an-147',
        name: 'American Tree Sparrow',
        description: 'The American Tree Sparrow is native to the grasslands of West Elizabeth and New Hanover. As omnivores, their diet consists of berries, seeds and insects. These small birds can easily be killed by using a Bow with Small Game Arrows. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgAmericanTreeSparrow,
        photo: photoAmericanTreeSparrow,
    },
    { 
        id: 'an-148',
        name: 'Golden Crowned Sparrow',
        description: 'Golden Crowned Sparrows can be found in the brushy grasslands of West Elizabeth and New Hanover. As omnivores, their diet consists of insects, grubs, seeds, berries, and flowers. A Bow with Small Game Arrows is considered to be the best weapon for a clean kill. Their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgGoldenCrownedSparrow,
        photo: photoGoldenCrownedSparrow,
    },
    { 
        id: 'an-149',
        name: 'American Red Squirrel',
        description: 'American Red Squirrels are native to the forested regions of West Elizabeth and New Hanover. As omnivores, their diet consists of small animals such as mice as well as nuts, seeds and mushrooms. Using a Bow with Small Game Arrows will successfully kill the squirrel, but will do less damage to their pelts. Their pelts can be sold to traders, and their meat can be consumed, though it is considered to be rather stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgAmericanRedSquirrel,
        photo: photoAmericanRedSquirrel,
    },
    { 
        id: 'an-150',
        name: 'Western Gray Squirrel',
        description: 'The Western Squirrel is native to the forested regions of West Elizabeth and New Hanover. Its omnivorous diet consists of nuts, berries, seeds, eggs, and small birds. Hunting squirrels with a Bow and Small Game Arrows will cause less damage to their pelts, compared to other weapons. Their pelts can be sold as profit to traders, and their meat is edible, but is considered to be stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgWesternGraySquirrel,
        photo: photoWesternGraySquirrel,
    },
    { 
        id: 'an-151',
        name: 'Black Squirrel',
        description: 'The Black Squirrel inhabits the woodlands of New Hanover and parts of West Elizabeth. Its omnivorous diet consists of seeds, nuts, small insects and fungi. A Bow with Small Game Arrows can be used to hunt squirrels with minimal damage to their pelts. Pelts from squirrels can be sold to traders, and their meat is edible, though stringy.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgBlackSquirrel,
        photo: photoBlackSquirrel,
    },
    { 
        id: 'an-152',
        name: 'Western Toad',
        description: 'Western Toads are native to the Lemoyne wetlands. As carnivores, they prey on large bees, beetles, ants, crayfish, and arachnids. A Bow with Small Game Arrows is considered to be the best weapon to hunt toads with as it does minimal damage to the carcass. Their legs are a great source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
        image: imgWesternToad,
        photo: photoWesternToad,
    },
    { 
        id: 'an-153',
        name: 'Sonoran Desert Toad',
        description: 'Sonoran Desert Toads are native to Rio Bravo. As carnivores, they prey on a centipedes, lizards, spiders, and mice. A Bow with Small Game Arrows is considered to be the best weapon to hunt toads with as it does minimal damage to the carcass. Their legs are a great source of food.',
        details: { cleanKillWeapons: ['Bow-small'] },
        harvestTask: 'collected',
    },
    { 
        id: 'an-154',
        name: 'Eastern Wild Turkey',
        description: 'The Eastern Wild Turkey can be found in the forested or brushy regions of West Elizabeth, New Hanover and Lemoyne. As opportunistic omnivores, they can be found foraging for insects, seeds and grasses. The easiest way to take down a bird of this size whilst hunting is by using a Varmint Rifle. Their feathers can be used for crafting, and their plump meat can be used as a source of food.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        image: imgEasternWildTurkey,
        photo: photoEasternWildTurkey,
    },
    { 
        id: 'an-155',
        name: 'Rio Grande Wild Turkey',
        description: 'The Rio Grande Wild Turkey is native to New Austin. The opportunistic omnivore forager feeds on insects, seeds, foliage, grasses and nuts. The Varmint Rifle is considered to be the best weapon to hunt wild turkeys. Their plump meat can provide a good meal, while their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
    },
    { 
        id: 'an-156',
        name: 'Alligator Snapping Turtle',
        description: 'The Alligator Snapping Turtle is native to the swamplands of Lemoyne. Their primarily carnivorous diet means they prey on other smaller turtles, frogs, snakes, as well as some aquatic plants. A Bow with arrows is considered the best weapon to use when hunting turtles. Their herptile meat can be used in cooking or can be sold to traders.',
        details: { cleanKillWeapons: ['Bow'] },
        image: imgAlligatorSnappingTurtle,
        photo: photoAlligatorSnappingTurtle,
    },
    { 
        id: 'an-157',
        name: 'Eastern Turkey Vulture',
        description: 'The Eastern Turkey Vulture is native to New Hanover and Lemoyne. They prey on reptiles, birds, fish and amphibians. When hunting, they prefer freshly dead animals due to the meat being softer. The Varmint Rifle is considered to be the best for hunting vultures and other birds this size. Feathers from Eastern Turkey Vultures can be used for crafting. Their gamey meat can consumed.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgEasternTurkeyVulture,
        photo: photoEasternTurkeyVulture,
    },
    { 
        id: 'an-158',
        name: 'Western Turkey Vulture',
        description: 'Western Turkey Vultures are found in a variety of habitats across New Austin and West Elizabeth. Its carnivorous diet consists of birds, amphibians, and fish. They prefer freshly dead animals due to the meat being softer. The quickest way to hunt birds of this size is by using a Varmint Rifle. Their gamey meat can be used for food, and their feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasTrackingTask: false,
        harvestTask: 'plucked',
        image: imgWesternTurkeyVulture,
        photo: photoWesternTurkeyVulture,
    },
    { 
        id: 'an-159',
        name: 'Gray Wolf',
        description: "The Gray Wolf's main habitat is in the Big Valley region and Tall Trees North. As carnivores, their diet consists of deer and mountain goats, as well as smaller animals like birds, beavers, and fish. As wolves often attack in packs, it is recommended that long range weapons like rifles, or a Bow with arrows, are used to wound or kill a wolf. Their meat can be used for food, and their pelts and hearts can be used for crafting.",
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgGrayWolf,
        photo: photoGrayWolf,
    },
    { 
        id: 'an-160',
        name: 'Timber Wolf',
        description: 'The Timber Wolf is native to the Cumberland Forest and the Grizzlies. Its carnivorous diet consists of elk, mice, rabbits, and squirrels. Their vicious nature means that long range weapons are best to take them down. Rifles and a Bow with arrows are considered to be the best weapons to kill or wound a wolf. A good pelt can be sold to traders for a good price. Their hearts can also be used for crafting, and their meat can be consumed.',
        details: { cleanKillWeapons: ['Rifle'] },
        image: imgTimberWolf,
        photo: photoTimberWolf,
    },
    { 
        id: 'an-161',
        name: 'Red-Bellied Woodpecker',
        description: 'The Red-bellied Woodpecker can be found in Roanoke Ridge. As omnivores, their diet consists of insects, fruits, nuts and berries. A Bow with Small Game Arrows can be used to take down birds of this size, with minimal damage to their carcass. Their carcass and feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgRedBelliedWoodpecker,
        photo: photoRedBelliedWoodpecker,
    },
    { 
        id: 'an-162',
        name: 'Pileated Woodpecker',
        description: 'The Pileated Woodpecker can be found in the woodland areas of New Hanover. As omnivores, their diet consists of insects, fruits, nuts and berries. A Bow with Small Game Arrows is considered to be the best weapon to take down woodpeckers. Their carcass and feathers can be used for crafting.',
        details: { cleanKillWeapons: ['Bow-small'] },
        hasTrackingTask: false,
        harvestTask: 'collected',
        image: imgPileatedWoodpecker,
        photo: photoPileatedWoodpecker,
    },
    { 
        id: 'an-163',
        name: 'Legendary Bull Gator',
        description: 'The Legendary Bull Gator is native to the swampland near Lagras, Bayou Nwa. The alligator can be easily spotted by its large size and its albino scales. As a carnivorous apex predator, it feeds on fish, birds, amphibians and mammals. A Bow with Improved Arrows, or a long scope rifle, is considered to be the best weapon for hunting this alligator. Killing this animal will give you the opportunity to craft a rare talisman.',
        details: { cleanKillWeapons: ['Heavy Rifle', 'Bow-improved'] },
        hasStudyTask: false,
        image: imgLegendaryBullGator,
        photo: photoLegendaryBullGator,
    },
    { 
        id: 'an-164',
        name: 'Legendary Bharati Grizzly Bear',
        description: "The Legendary Bharati is endemic to O'Creagh's Run, in the Grizzlies East. This bear is larger than any other that has been spotted in the region. The distinctive scars across its face and body make this creature easily identifiable. As an omnivore, its diet ranges from berries, roots, and grasses to deer, elk, fish, and carrion. Long range weapons like a long scope rifle, or a Bow with Improved Arrows, will give you the advantage when hunting this animal. Killing this animal will give you the opportunity to craft a rare talisman.",
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryBharatiGrizzlyBear,
        photo: photoLegendaryBharatiGrizzlyBear,
    },
    { 
        id: 'an-165',
        name: 'Legendary Beaver',
        description: 'The Legendary Beaver is endemic to Elysian Pool in New Hanover. The light hair on the beaver makes it easy to recognize compared to other beavers in the region. Its herbivorous diet consists of tree bark, cambium, roots, buds, and water plants. A Varmint Rifle is considered to be the most effective weapon when hunting beavers. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Varmint Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryBeaver,
        photo: photoLegendaryBeaver,
    },
    { 
        id: 'an-166',
        name: 'Legendary White Bison',
        description: 'The Legendary White Bison is endemic to the northern mountains of Ambarino. This albino bison can be easily distinguished by the color of its hair. As a herbivore, it grazes on grains, hay, and corn. Due to the large size of the bison, high impact weapons are considered the best for hunting this animal. The ideal weapon is either a Bow with Improved Arrows or a long scope rifle. Killing this animal will give you the opportunity to craft a rare talisman.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryWhiteBison,
        photo: photoLegendaryWhiteBison,
    },
    { 
        id: 'an-167',
        name: 'Legendary Tatanka Bison',
        description: "The Legendary Tatanka Bison is native to Hennigan's Stead in New Austin. This bison can be recognized by its short black hair and thick light gray hair around its hump and head. As a herbivore, it grazes on grains, hay, and corn. Long range weapons like a long scope rifle or a Bow with Improved Arrows will give you the advantage when hunting this animal. Killing this animal will give you the opportunity to craft a rare trinket.",
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasStudyTask: false,
    },
    { 
        id: 'an-168',
        name: 'Legendary Boar',
        description: 'The Legendary Boar is native to Bluewater Marsh. This boar can be easily recognized by its larger size and its light brown hair. As an omnivore, it preys on amphibians, reptiles, insects, worms, and smaller mammals. The best weapon to use when hunting this animal is either a rifle or a Bow with Poison Arrows. Killing this animal will give you the opportunity to craft a rare talisman.',
        details: { cleanKillWeapons: ['Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryBoar,
        photo: photoLegendaryBoar,
    },
    { 
        id: 'an-169',
        name: 'Legendary Buck',
        description: 'The Legendary Buck is endemic to Big Valley in West Elizabeth. Its light brown and white short hair makes this buck distinguishable to other bucks. As a herbivore, it consumes nuts, buds, twigs, and green plants. A rifle, or a Bow with Poison Arrows, are considered to be the best weapons to hunt this animal. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryBuck,
        photo: photoLegendaryBuck,
    },
    { 
        id: 'an-170',
        name: 'Legendary Cougar',
        description: 'The Legendary Cougar is native to Gaptooth Ridge in New Austin. The unique black fur makes this cougar easily recognizable. As a carnivore, it preys on deer, elk, moose, and mountain goats. Long distance weapons like rifles, or a Bow with Poison Arrows, are recommended for hunting as the vicious nature of cougars means they are prone to attack. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: [] },
        hasStudyTask: false,
    },
    { 
        id: 'an-171',
        name: 'Legendary Coyote',
        description: 'The Legendary Coyote is native to The Heartlands, New Hanover. This dark gray coyote can be recognized by its larger than average size. Its diet is primarily carnivorous, consuming meat of rodents as its main food source. The most effective weapons to hunt this animal are considered to be a repeater or a Bow with arrows. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Repeater'] },
        hasStudyTask: false,
        image: imgLegendaryCoyote,
        photo: photoLegendaryCoyote,
    },
    { 
        id: 'an-172',
        name: 'Legendary Fox',
        description: 'The Legendary Fox is endemic to Scarlett Meadows, Lemoyne. The white fox can easily be recognized by the color of its fur. As an omnivore, its diet consists of small mammals like squirrels and rabbits, as well as birds, fruits, berries, and grasses. The best weapon to hunt this fox is either a repeater or a Bow with arrows. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Repeater'] },
        hasStudyTask: false,
        image: imgLegendaryFox,
        photo: photoLegendaryFox,
    },
    { 
        id: 'an-173',
        name: 'Legendary Elk',
        description: 'The Legendary Elk is endemic to Cumberland Forest, New Hanover. The distinguishable white hair and shaggy mane make this elk different to other elks in the region. Its herbivore diet includes grasses, leaves, bark and plants. Elk are easily startled so it is advised to keep as much distance as possible whilst hunting. Long range weapons like a Bow with Improved Arrows, or a long scope rifle, are considered to be the best for hunting. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryElk,
        photo: photoLegendaryElk,
    },
    { 
        id: 'an-174',
        name: 'Legendary Moose',
        description: 'The Legendary Moose is endemic to Roanoke Ridge, New Hanover. This moose can be recognized by its larger size and short light gray hair. Its omnivore diet includes shoots from willow and birch trees, aquatic plants and forbs. The best weapon to hunt this animal is considered to be either a Bow with Improved Arrows or a long scope rifle. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Heavy Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryMoose,
        photo: photoLegendaryMoose,
    },
    { 
        id: 'an-175',
        name: 'Legendary Ciaguaro Panther',
        description: 'The Legendary Giaguaro Panther is endemic to the south of Scarlett Meadows, in Lemoyne. This panther is easily recognized by its short maroon hair with black markings, and the numerous scars on its body. As a carnivore, it preys on deer, goats and wild boars. Long range weapons like a rifle, or a Bow with Poison Arrows, are considered to be best to take down this temperamental animal. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryCiaguaroPanther,
        photo: photoLegendaryCiaguaroPanther,
    },
    { 
        id: 'an-176',
        name: 'Legendary Pronghorn',
        description: 'The Legendary Pronghorn is endemic to Rio Bravo in New Austin. This pronghorn is easily recognized by the short white hair covering its whole body. As a herbivore, its diet includes sagebrush, green shoots, grasses and forbs. The best weapon to use when hunting this animal is either a rifle or Bow with Poison Arrows. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: [] },
        hasStudyTask: false,
    },
    { 
        id: 'an-177',
        name: 'Legendary Big Horn Ram',
        description: 'The Legendary Big Horn Ram is native to Grizzlies West. This ram can be easily distinguished by its short light gray hair and its larger size. As a herbivore, it grazes on forbs, woody vegetation, and grasses. The ideal weapon to hunt this ram is either a rifle or a Bow with Poison Arrows. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryBigHornRam,
        photo: photoLegendaryBigHornRam,
    },
    { 
        id: 'an-178',
        name: 'Legendary Wolf',
        description: 'The Legendary Wolf is endemic to the Grizzlies. The larger size of this wolf, and the distinguishable brown and black fur, make this animal easily recognizable compared to other wolves in the area. As a carnivore, its diet consists of deer, mountain goats, as well as smaller animals like birds, beavers and fish. A Bow with Poison Arrows, or a rifle, is considered to be the best weapon to hunt this animal with. Killing this animal will give you the opportunity to craft a rare trinket.',
        details: { cleanKillWeapons: ['Rifle'] },
        hasStudyTask: false,
        image: imgLegendaryWolf,
        photo: photoLegendaryWolf,
    },
] satisfies AnimalRecord[]

function createAnimal(record: AnimalRecord): Animal {
    const {
        details,
        hasKillTask = true,
        hasTrackingTask = true,
        hasStudyTask = true,
        hasHarvestTask = true,
        harvestTask = 'skinned',
    } = record
    const animal = {
        id: record.id,
        name: record.name,
        description: record.description,
        image: record.image,
        photo: record.photo,
    }

    const objectives = [
        ...(hasKillTask ? [{ id: `${animal.id}:killed`, text: 'Killed' }] : []),
        ...(hasTrackingTask ? [{ id: `${animal.id}:tracked`, text: 'Tracked' }] : []),
        ...(hasStudyTask ? [{ id: `${animal.id}:studied`, text: 'Studied' }] : []),
        ...(hasHarvestTask
            ? [{
                id: `${animal.id}:${harvestTask}`,
                text:
                harvestTask === 'skinned'
                ? 'Skinned'
                : harvestTask === 'collected'
                    ? 'Collected'
                    : 'Plucked',
            }]
            : []),    
    ]

    return {
        ...animal,
        subtitle: '',
        details: {
            ...details,
            region: getAnimalRange(record.description ?? ''),
            objectives: objectives,
        },
    }
}

const animalRegions = [
    'O\'Creagh\'s Run',
    "Hennigan's Stead",
    'Cumberland Forest',
    'Scarlett Meadows',
    'Bluewater Marsh',
    'Gaptooth Ridge',
    'Cholla Springs',
    'Rio Bravo',
    'Bayou Nwa',
    'Grizzlies East',
    'Grizzlies West',
    'Roanoke Ridge',
    'Big Valley',
    'Tall Trees',
    'The Heartlands',
    'New Hanover',
    'West Elizabeth',
    'New Austin',
    'Lemoyne',
    'Ambarino',
]

function getAnimalRange(description: string): string {
    const matches = animalRegions.filter((region) =>
        new RegExp(`\\b${region.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
            .test(description),
    )

    return matches.length > 0 ? matches.join(' · ') : 'No fixed location'
}

export const animalCategory: AnimalCategory = {
    id: 'animals',
    name: 'Animals',
    details: { color: 'var(--sage)' },
    items: [...animalRecords].map(createAnimal),
}
