import type {
    TrackedGroup,
    TrackedItem,
    TrackedItemDetails,
} from './types.ts'

import cigSet1 from '../assets/cig_cards/CIG_CARD_GUN_OVERVIEW.jpg'
import cigSet2 from '../assets/cig_cards/CIG_CARD_ART_OVERVIEW.jpg'
import cigSet3 from '../assets/cig_cards/CIG_CARD_LND_OVERVIEW.jpg'
import cigSet4 from '../assets/cig_cards/CIG_CARD_GRL_OVERVIEW.jpg'
import cigSet5 from '../assets/cig_cards/CIG_CARD_PLT_OVERVIEW.jpg'
import cigSet6 from '../assets/cig_cards/CIG_CARD_ACT_OVERVIEW.jpg'
import cigSet7 from '../assets/cig_cards/CIG_CARD_AML_OVERVIEW.jpg'
import cigSet8 from '../assets/cig_cards/CIG_CARD_VEH_OVERVIEW.jpg'
import cigSet9 from '../assets/cig_cards/CIG_CARD_SPT_OVERVIEW.jpg'
import cigSet10 from '../assets/cig_cards/CIG_CARD_INV_OVERVIEW.jpg'
import cigSet11 from '../assets/cig_cards/CIG_CARD_HOR_OVERVIEW.jpg'
import cigSet12 from '../assets/cig_cards/CIG_CARD_PAM_OVERVIEW.jpg'

import AI1 from '../assets/cig_cards/AI/AI_1_Steam_Locomotive.png'
import AI2 from '../assets/cig_cards/AI/AI_2_Camera.png'
import AI3 from '../assets/cig_cards/AI/AI_3_Electrical_Execution_Apparatus.png'
import AI4 from '../assets/cig_cards/AI/AI_4_Typewriter.png'
import AI5 from '../assets/cig_cards/AI/AI_5_Revolver.png'
import AI6 from '../assets/cig_cards/AI/AI_6_Telegraph.png'
import AI7 from '../assets/cig_cards/AI/AI_7_Manned_Glider.png'
import AI8 from '../assets/cig_cards/AI/AI_8_Dynamite.png'
import AI9 from '../assets/cig_cards/AI/AI_9_Cylinder_Phonograph.png'
import AI10 from '../assets/cig_cards/AI/AI_10_Player_Piano.png'
import AI11 from '../assets/cig_cards/AI/AI_11_Electric_Light_Bulb.png'
import AI12 from '../assets/cig_cards/AI/AI_12_Fountain_Pen.png'

import APWP1 from '../assets/cig_cards/APWP/APWP_1_Edith_Corinne.png'
import APWP2 from '../assets/cig_cards/APWP/APWP_2_Elsie_Rose.png'
import APWP3 from '../assets/cig_cards/APWP/APWP_3_W.G._Hoyt.png'
import APWP4 from '../assets/cig_cards/APWP/APWP_4_Aldous_Bramley.png'
import APWP5 from '../assets/cig_cards/APWP/APWP_5_Preston_T._Stephenson.png'
import APWP6 from '../assets/cig_cards/APWP/APWP_6_Evelyn_Miller.png'
import APWP7 from '../assets/cig_cards/APWP/APWP_7_Slick_Hutton.png'
import APWP8 from '../assets/cig_cards/APWP/APWP_8_Laurence_Carson.png'
import APWP9 from '../assets/cig_cards/APWP/APWP_9_Miss_Maud_Delancey.png'
import APWP10 from '../assets/cig_cards/APWP/APWP_10_Charles_Chatenay.png'
import APWP11 from '../assets/cig_cards/APWP/APWP_11_George_Dixie.png'
import APWP12 from '../assets/cig_cards/APWP/APWP_12_Richard_McCullough.png'

import FAOA1 from '../assets/cig_cards/FAOA/FAOA_1_Black_Widow_Spider.png'
import FAOA2 from '../assets/cig_cards/FAOA/FAOA_2_Bloodhound.png'
import FAOA3 from '../assets/cig_cards/FAOA/FAOA_3_Bluejay.png'
import FAOA4 from '../assets/cig_cards/FAOA/FAOA_4_Catfish.png'
import FAOA5 from '../assets/cig_cards/FAOA/FAOA_5_Coral_Snake.png'
import FAOA6 from '../assets/cig_cards/FAOA/FAOA_6_Grouper.png'
import FAOA7 from '../assets/cig_cards/FAOA/FAOA_7_Largemouth_Bass.png'
import FAOA8 from '../assets/cig_cards/FAOA/FAOA_8_Panther.png'
import FAOA9 from '../assets/cig_cards/FAOA/FAOA_9_Parrot.png'
import FAOA10 from '../assets/cig_cards/FAOA/FAOA_10_Phesant.png'
import FAOA11 from '../assets/cig_cards/FAOA/FAOA_11_Snapping_Turtle.png'
import FAOA12 from '../assets/cig_cards/FAOA/FAOA_12_Turkey.png'

import FG1 from '../assets/cig_cards/FG/FG_1_Frank_Heck.png'
import FG2 from '../assets/cig_cards/FG/FG_2_Otis_Miller_Boys.png'
import FG3 from '../assets/cig_cards/FG/FG_3_Jack_Hall_Gang.png'
import FG4 from '../assets/cig_cards/FG/FG_4_Butcher_Bros.png'
import FG5 from '../assets/cig_cards/FG/FG_5_Flaco_Hernandez.png'
import FG6 from '../assets/cig_cards/FG/FG_6_Slim_Grant.png'
import FG7 from '../assets/cig_cards/FG/FG_7_Landon_Ricketts.png'
import FG8 from '../assets/cig_cards/FG/FG_8_Black_Belle.png'
import FG9 from '../assets/cig_cards/FG/FG_9_Billy_Midnight.png'
import FG10 from '../assets/cig_cards/FG/FG_10_Emmet_Granger.png'
import FG11 from '../assets/cig_cards/FG/FG_11_Jim_Boy_Calloway.png'
import FG12 from '../assets/cig_cards/FG/FG_12_Bart_Love.png'

import FLOA1 from '../assets/cig_cards/FLOA/FLOA_1_Golden_Currant.png'
import FLOA2 from '../assets/cig_cards/FLOA/FLOA_2_Hummingbird_Sage.png'
import FLOA3 from '../assets/cig_cards/FLOA/FLOA_3_Oleander_Sage.png'
import FLOA4 from '../assets/cig_cards/FLOA/FLOA_4_Yarrow.png'
import FLOA5 from '../assets/cig_cards/FLOA/FLOA_5_Indian_Tobacco.png'
import FLOA6 from '../assets/cig_cards/FLOA/FLOA_6_Black_Mangrove.png'
import FLOA7 from '../assets/cig_cards/FLOA/FLOA_7_Longleaf_Pine.png'
import FLOA8 from '../assets/cig_cards/FLOA/FLOA_8_Desert_Fan_Palm.png'
import FLOA9 from '../assets/cig_cards/FLOA/FLOA_9_Coastal_Redwood.png'
import FLOA10 from '../assets/cig_cards/FLOA/FLOA_10_Horse_Crippler_Cactus.png'
import FLOA11 from '../assets/cig_cards/FLOA/FLOA_11_Blazing_Star.png'
import FLOA12 from '../assets/cig_cards/FLOA/FLOA_12_Carolina_Lupine.png'

import GOB1 from '../assets/cig_cards/GOB/GOB_1_Leila_Stetson.png'
import GOB2 from '../assets/cig_cards/GOB/GOB_2_Isabella_Barlow.png'
import GOB3 from '../assets/cig_cards/GOB/GOB_3_Hattie_Langtry.png'
import GOB4 from '../assets/cig_cards/GOB/GOB_4_Isabelle_Strandish.png'
import GOB5 from '../assets/cig_cards/GOB/GOB_5_Maud_Engel.png'
import GOB6 from '../assets/cig_cards/GOB/GOB_6_Sadie_Russell.png'
import GOB7 from '../assets/cig_cards/GOB/GOB_7_Geraldine_Emerson.png'
import GOB8 from '../assets/cig_cards/GOB/GOB_8_Agnes_Guyon.png'
import GOB9 from '../assets/cig_cards/GOB/GOB_9_Jennie_Willetts.png'
import GOB10 from '../assets/cig_cards/GOB/GOB_10_Ilga_Ulmer.png'
import GOB11 from '../assets/cig_cards/GOB/GOB_11_Fay_Delaro.png'
import GOB12 from '../assets/cig_cards/GOB/GOB_12_Pauline_Henderson.png'

import H1 from '../assets/cig_cards/H/H_1_American_Paint.png'
import H2 from '../assets/cig_cards/H/H_2_Appaloosa.png'
import H3 from '../assets/cig_cards/H/H_3_Andalusian.png'
import H4 from '../assets/cig_cards/H/H_4_American_Standardbred.png'
import H5 from '../assets/cig_cards/H/H_5_Nokota.png'
import H6 from '../assets/cig_cards/H/H_6_Ardennes.png'
import H7 from '../assets/cig_cards/H/H_7_Dutch_Warmblood.png'
import H8 from '../assets/cig_cards/H/H_8_Turkoman.png'
import H9 from '../assets/cig_cards/H/H_9_Hungarian_Halfbred.png'
import H10 from '../assets/cig_cards/H/H_10_Mustang.png'
import H11 from '../assets/cig_cards/H/H_11_Throroughbred.png'
import H12 from '../assets/cig_cards/H/H_12_Missouri_Fox_Trotter.png'

import MOT1 from '../assets/cig_cards/MOT/MOT_1_Packet_Ship.png'
import MOT2 from '../assets/cig_cards/MOT/MOT_2_Schooner.png'
import MOT3 from '../assets/cig_cards/MOT/MOT_3_Camel_Caravan.png'
import MOT4 from '../assets/cig_cards/MOT/MOT_4_Elephant_Carriage.png'
import MOT5 from '../assets/cig_cards/MOT/MOT_5_Goat_Carriage.png'
import MOT6 from '../assets/cig_cards/MOT/MOT_6_Hot_Air_Balloon.png'
import MOT7 from '../assets/cig_cards/MOT/MOT_7_US_Frigate.png'
import MOT8 from '../assets/cig_cards/MOT/MOT_8_The_Showboat.png'
import MOT9 from '../assets/cig_cards/MOT/MOT_9_Balener_Whaling_Vessel.png'
import MOT10 from '../assets/cig_cards/MOT/MOT_10_Stagecoach.png'
import MOT11 from '../assets/cig_cards/MOT/MOT_11_Steam_Locomotive.png'
import MOT12 from '../assets/cig_cards/MOT/MOT_12_Velocipede.png'

import PA1 from '../assets/cig_cards/PA/PA_1_President_Fisher.png'
import PA2 from '../assets/cig_cards/PA/PA_2_President_Hardin.png'
import PA3 from '../assets/cig_cards/PA/PA_3_Lillian_Powell.png'
import PA4 from '../assets/cig_cards/PA/PA_4_Leviticus_Cornwall.png'
import PA5 from '../assets/cig_cards/PA/PA_5_JD_McKnight.png'
import PA6 from '../assets/cig_cards/PA/PA_6_Luther_Covington.png'
import PA7 from '../assets/cig_cards/PA/PA_7_Harvey_Griggs.png'
import PA8 from '../assets/cig_cards/PA/PA_8_Henrietta_Beatrice_Woods.png'
import PA9 from '../assets/cig_cards/PA/PA_9_General_Quincy_Harris.png'
import PA10 from '../assets/cig_cards/PA/PA_10_General_Cornelius_Palmer.png'
import PA11 from '../assets/cig_cards/PA/PA_11_Senator_Thaddeus_Waxman.png'
import PA12 from '../assets/cig_cards/PA/PA_12_President_Alfred_MacAlister.png'

import SOS1 from '../assets/cig_cards/SOS/SOS_1_Laurence_Dunn.png'
import SOS2 from '../assets/cig_cards/SOS/SOS_2_Louis_Durand.png'
import SOS3 from '../assets/cig_cards/SOS/SOS_3_Jesse_Raymond.png'
import SOS4 from '../assets/cig_cards/SOS/SOS_4_Augusta_Tremlow.png'
import SOS5 from '../assets/cig_cards/SOS/SOS_5_Marbel_Potter.png'
import SOS6 from '../assets/cig_cards/SOS/SOS_6_Robin_Koninsky.png'
import SOS7 from '../assets/cig_cards/SOS/SOS_7_Isadore_Reid.png'
import SOS8 from '../assets/cig_cards/SOS/SOS_8_Irene_Grubb.png'
import SOS9 from '../assets/cig_cards/SOS/SOS_9_Nettie_Palmer.png'
import SOS10 from '../assets/cig_cards/SOS/SOS_10_Jim_Cobb.png'
import SOS11 from '../assets/cig_cards/SOS/SOS_11_Mittie_Comstock.png'
import SOS12 from '../assets/cig_cards/SOS/SOS_12_Robert_Elliot_Patchen.png'

import backVOA from '../assets/cig_cards/back_vistas_of_america.jpg'
import VOA1 from '../assets/cig_cards/VOA/VOA_1_New_York.png'
import VOA2 from '../assets/cig_cards/VOA/VOA_2_Saint_Denis.png'
import VOA3 from '../assets/cig_cards/VOA/VOA_3_Blackwater.png'
import VOA4 from '../assets/cig_cards/VOA/VOA_4_Armadillo.png'
import VOA5 from '../assets/cig_cards/VOA/VOA_5_Rio_Bravo.png'
import VOA6 from '../assets/cig_cards/VOA/VOA_6_The_Grizzlies.png'
import VOA7 from '../assets/cig_cards/VOA/VOA_7_San_Francisco.png'
import VOA8 from '../assets/cig_cards/VOA/VOA_8_Tall_Trees.png'
import VOA9 from '../assets/cig_cards/VOA/VOA_9_Valentine.png'
import VOA10 from '../assets/cig_cards/VOA/VOA_10_Chicago.png'
import VOA11 from '../assets/cig_cards/VOA/VOA_11_Rhodes.png'
import VOA12 from '../assets/cig_cards/VOA/VOA_12_Annesburg.png'

import WC1 from '../assets/cig_cards/WC/WC_1_Percy_Wood.png'
import WC2 from '../assets/cig_cards/WC/WC_2_Edwin_A_Rowe.png'
import WC3 from '../assets/cig_cards/WC/WC_3_Theobaud_Getzin.png'
import WC4 from '../assets/cig_cards/WC/WC_4_HT_Slocum.png'
import WC5 from '../assets/cig_cards/WC/WC_5_RS_Harradon.png'
import WC6 from '../assets/cig_cards/WC/WC_6_ED_Ewing.png'
import WC7 from '../assets/cig_cards/WC/WC_7_Patsey_Hill.png'
import WC8 from '../assets/cig_cards/WC/WC_8_William_Sleicher.png'
import WC9 from '../assets/cig_cards/WC/WC_9_Edwin_Singerly.png'
import WC10 from '../assets/cig_cards/WC/WC_10_Felix_Hawley.png'
import WC11 from '../assets/cig_cards/WC/WC_11_Capt_Jack_Page.png'
import WC12 from '../assets/cig_cards/WC/WC_12_Axel_McCormack.png'

export type Collectible = TrackedItem<TrackedItemDetails>
export type CollectibleCategory = TrackedGroup

const collectible = (
    id: string,
    name: string,
    region: string,
    description = '',
    subtitle = '',
    image?: string,
): Collectible => ({
    id,
    name,
    subtitle,
    description,
    image,
    details: { region },
})

const cigaretteCardCollections: Collectible[] = [
    {
        ...collectible('cigarette-card-set-1', 'Famous Gunslingers', '', '', '', cigSet1),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-1-card-1', text: 'Frank Heck', foundImage: FG1 },
                { id: 'cigarette-card-set-1-card-2', text: 'Otis Miller Boys', foundImage: FG2 },
                { id: 'cigarette-card-set-1-card-3', text: 'Jack Hall Gang', foundImage: FG3 },
                { id: 'cigarette-card-set-1-card-4', text: 'Butcher Bros', foundImage: FG4 },
                { id: 'cigarette-card-set-1-card-5', text: 'Flaco Hernandez', foundImage: FG5 },
                { id: 'cigarette-card-set-1-card-6', text: 'Slim Grant', foundImage: FG6 },
                { id: 'cigarette-card-set-1-card-7', text: 'Landon Ricketts', foundImage: FG7 },
                { id: 'cigarette-card-set-1-card-8', text: 'Black Belle', foundImage: FG8 },
                { id: 'cigarette-card-set-1-card-9', text: 'Billy Midnight', foundImage: FG9 },
                { id: 'cigarette-card-set-1-card-10', text: 'Emmet Granger', foundImage: FG10 },
                { id: 'cigarette-card-set-1-card-11', text: 'Jim "Boy" Calloway', foundImage: FG11 },
                { id: 'cigarette-card-set-1-card-12', text: 'Bart Love', foundImage: FG12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-2', 'Artists, Painters, Writers & Poets', '', '', '', cigSet2),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-2-card-1', text: 'Edith Corinne', foundImage: APWP1 },
                { id: 'cigarette-card-set-2-card-2', text: 'Elsie Rose', foundImage: APWP2 },
                { id: 'cigarette-card-set-2-card-3', text: 'W.G. Hoyt', foundImage: APWP3 },
                { id: 'cigarette-card-set-2-card-4', text: 'Aldous Bramley', foundImage: APWP4 },
                { id: 'cigarette-card-set-2-card-5', text: 'Preston T. Stephenson', foundImage: APWP5 },
                { id: 'cigarette-card-set-2-card-6', text: 'Evelyn Miller', foundImage: APWP6 },
                { id: 'cigarette-card-set-2-card-7', text: 'Slick Hutton', foundImage: APWP7 },
                { id: 'cigarette-card-set-2-card-8', text: 'Laurence Carson', foundImage: APWP8 },
                { id: 'cigarette-card-set-2-card-9', text: 'Miss Maud Delancey', foundImage: APWP9 },
                { id: 'cigarette-card-set-2-card-10', text: 'Charles Châtenay', foundImage: APWP10 },
                { id: 'cigarette-card-set-2-card-11', text: 'George Dixie', foundImage: APWP11 },
                { id: 'cigarette-card-set-2-card-12', text: 'Richard McCullough', foundImage: APWP12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-3', 'Vistas of America', '', '', '', cigSet3),
        details: {
            region: '',
            unfoundCardImage: backVOA,
            objectives: [
                { id: 'cigarette-card-set-3-card-1', text: 'New York', foundImage: VOA1 },
                { id: 'cigarette-card-set-3-card-2', text: 'Saint Denis', foundImage: VOA2 },
                { id: 'cigarette-card-set-3-card-3', text: 'Blackwater', foundImage: VOA3 },
                { id: 'cigarette-card-set-3-card-4', text: 'Armadillo', foundImage: VOA4 },
                { id: 'cigarette-card-set-3-card-5', text: 'Rio Bravo', foundImage: VOA5 },
                { id: 'cigarette-card-set-3-card-6', text: 'The Grizzlies', foundImage: VOA6 },
                { id: 'cigarette-card-set-3-card-7', text: 'San Francisco', foundImage: VOA7 },
                { id: 'cigarette-card-set-3-card-8', text: 'Tall Trees', foundImage: VOA8 },
                { id: 'cigarette-card-set-3-card-9', text: 'Valentine', foundImage: VOA9 },
                { id: 'cigarette-card-set-3-card-10', text: 'Chicago', foundImage: VOA10 },
                { id: 'cigarette-card-set-3-card-11', text: 'Rhodes', foundImage: VOA11 },
                { id: 'cigarette-card-set-3-card-12', text: 'Annesburg', foundImage: VOA12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-4', 'Gems of Beauty', '', '', '', cigSet4),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-4-card-1', text: 'Leila Stetson', foundImage: GOB1 },
                { id: 'cigarette-card-set-4-card-2', text: 'Isabelle Barlow', foundImage: GOB2 },
                { id: 'cigarette-card-set-4-card-3', text: 'Hattie Langtry', foundImage: GOB3 },
                { id: 'cigarette-card-set-4-card-4', text: 'Isabelle Standish', foundImage: GOB4 },
                { id: 'cigarette-card-set-4-card-5', text: 'Maud Engel', foundImage: GOB5 },
                { id: 'cigarette-card-set-4-card-6', text: 'Sadie Russell', foundImage: GOB6 },
                { id: 'cigarette-card-set-4-card-7', text: 'Geraldine Emerson', foundImage: GOB7 },
                { id: 'cigarette-card-set-4-card-8', text: 'Agnes Guyon', foundImage: GOB8 },
                { id: 'cigarette-card-set-4-card-9', text: 'Jennie Willetts', foundImage: GOB9 },
                { id: 'cigarette-card-set-4-card-10', text: 'Ilga Ulmer', foundImage: GOB10 },
                { id: 'cigarette-card-set-4-card-11', text: 'Fay Delaro', foundImage: GOB11 },
                { id: 'cigarette-card-set-4-card-12', text: 'Pauline Henderson', foundImage: GOB12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-5', 'Flora of America', '', '', '', cigSet5),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-5-card-1', text: 'Golden Currant', foundImage: FLOA1 },
                { id: 'cigarette-card-set-5-card-2', text: 'Hummingbird Sage', foundImage: FLOA2 },
                { id: 'cigarette-card-set-5-card-3', text: 'Oleander Sage', foundImage: FLOA3 },
                { id: 'cigarette-card-set-5-card-4', text: 'Yarrow', foundImage: FLOA4 },
                { id: 'cigarette-card-set-5-card-5', text: 'Indian Tobacco', foundImage: FLOA5 },
                { id: 'cigarette-card-set-5-card-6', text: 'Black Mangrove', foundImage: FLOA6 },
                { id: 'cigarette-card-set-5-card-7', text: 'Longleaf Pine', foundImage: FLOA7 },
                { id: 'cigarette-card-set-5-card-8', text: 'Desert Fan Palm', foundImage: FLOA8 },
                { id: 'cigarette-card-set-5-card-9', text: 'Coastal Redwood', foundImage: FLOA9 },
                { id: 'cigarette-card-set-5-card-10', text: 'Horse Crippler Cactus', foundImage: FLOA10 },
                { id: 'cigarette-card-set-5-card-11', text: 'Blazing Star', foundImage: FLOA11 },
                { id: 'cigarette-card-set-5-card-12', text: 'Carolina Lupine', foundImage: FLOA12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-6', 'Stars of the Stage', '', '', '', cigSet6),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-6-card-1', text: 'Laurence Dunn', foundImage: SOS1 },
                { id: 'cigarette-card-set-6-card-2', text: 'Louis Durand', foundImage: SOS2 },
                { id: 'cigarette-card-set-6-card-3', text: 'Jesse Raymond', foundImage: SOS3 },
                { id: 'cigarette-card-set-6-card-4', text: 'Augusta Tremlow', foundImage: SOS4 },
                { id: 'cigarette-card-set-6-card-5', text: 'Mabel Potter', foundImage: SOS5 },
                { id: 'cigarette-card-set-6-card-6', text: 'Robin Koninsky', foundImage: SOS6 },
                { id: 'cigarette-card-set-6-card-7', text: 'Isadore Reid', foundImage: SOS7 },
                { id: 'cigarette-card-set-6-card-8', text: 'Irene Grubb', foundImage: SOS8 },
                { id: 'cigarette-card-set-6-card-9', text: 'Nettie Palmer', foundImage: SOS9 },
                { id: 'cigarette-card-set-6-card-10', text: 'Jim Cobb', foundImage: SOS10 },
                { id: 'cigarette-card-set-6-card-11', text: 'Mittie Comstock', foundImage: SOS11 },
                { id: 'cigarette-card-set-6-card-12', text: 'Robert Elliot Patchen', foundImage: SOS12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-7', 'Fauna of America', '', '', '', cigSet7),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-7-card-1', text: 'Black Widow Spider', foundImage: FAOA1, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-2', text: 'Bloodhound', foundImage: FAOA2, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-3', text: 'Bluejay', foundImage: FAOA3, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-4', text: 'Catfish', foundImage: FAOA4, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-5', text: 'Coral Snake', foundImage: FAOA5, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-6', text: 'Grouper', foundImage: FAOA6, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-7', text: 'Large Mouth Bass', foundImage: FAOA7, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-8', text: 'Panther', foundImage: FAOA8, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-9', text: 'Parrot', foundImage: FAOA9, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-10', text: 'Pheasant', foundImage: FAOA10, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-11', text: 'Snapping Turtle', foundImage: FAOA11, orientation: 'landscape' },
                { id: 'cigarette-card-set-7-card-12', text: 'Turkey', foundImage: FAOA12, orientation: 'landscape' },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-8', 'Marvels of Travel', '', '', '', cigSet8),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-8-card-1', text: 'Packet Ship', foundImage: MOT1, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-2', text: 'Schooner', foundImage: MOT2, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-3', text: 'Camel Caravan', foundImage: MOT3, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-4', text: 'Elephant Carriage', foundImage: MOT4, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-5', text: 'Goat Carriage', foundImage: MOT5, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-6', text: 'Hot Air Balloon', foundImage: MOT6, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-7', text: 'U.S. Frigate', foundImage: MOT7, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-8', text: 'The Showboat', foundImage: MOT8, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-9', text: 'Balener Whaling Vessel', foundImage: MOT9, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-10', text: 'Stagecoach', foundImage: MOT10, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-11', text: 'Steam Locomotive', foundImage: MOT11, orientation: 'landscape' },
                { id: 'cigarette-card-set-8-card-12', text: 'Velocipede', foundImage: MOT12, orientation: 'landscape' },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-9', 'World Champions', '', '', '', cigSet9),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-9-card-1', text: 'Percy Wood', foundImage: WC1 },
                { id: 'cigarette-card-set-9-card-2', text: 'Edwin A. Rowe', foundImage: WC2 },
                { id: 'cigarette-card-set-9-card-3', text: 'Theobaud Getzin', foundImage: WC3 },
                { id: 'cigarette-card-set-9-card-4', text: 'H.T. Slocum', foundImage: WC4 },
                { id: 'cigarette-card-set-9-card-5', text: 'R.S. Harradon', foundImage: WC5 },
                { id: 'cigarette-card-set-9-card-6', text: 'E.D. Ewing', foundImage: WC6 },
                { id: 'cigarette-card-set-9-card-7', text: 'Patsey Hill', foundImage: WC7 },
                { id: 'cigarette-card-set-9-card-8', text: 'William Sleicher', foundImage: WC8 },
                { id: 'cigarette-card-set-9-card-9', text: 'Edwin Singerly', foundImage: WC9 },
                { id: 'cigarette-card-set-9-card-10', text: 'Felix Hawley', foundImage: WC10 },
                { id: 'cigarette-card-set-9-card-11', text: 'Capt. Jack Page', foundImage: WC11 },
                { id: 'cigarette-card-set-9-card-12', text: 'Axel McCormack', foundImage: WC12 },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-10', 'Amazing Inventions', '', '', '', cigSet10),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-10-card-1', text: 'Steam Locomotive', foundImage: AI1, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-2', text: 'Camera', foundImage: AI2, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-3', text: 'Electrical Execution Apparatus', foundImage: AI3, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-4', text: 'Typewriter', foundImage: AI4, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-5', text: 'Revolver', foundImage: AI5, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-6', text: 'Telegraph', foundImage: AI6, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-7', text: 'Manned Glider', foundImage: AI7, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-8', text: 'Dynamite', foundImage: AI8, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-9', text: 'Cylinder Phonograph', foundImage: AI9, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-10', text: 'Automatic Player-piano', foundImage: AI10, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-11', text: 'Electric Light Bulb', foundImage: AI11, orientation: 'landscape' },
                { id: 'cigarette-card-set-10-card-12', text: 'Fountain Pen', foundImage: AI12, orientation: 'landscape' },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-11', 'Horses', '', '', '', cigSet11),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-11-card-1', text: 'American Paint', foundImage: H1, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-2', text: 'Appaloosa', foundImage: H2, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-3', text: 'Andalusian', foundImage: H3, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-4', text: 'American Standardbred', foundImage: H4, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-5', text: 'Nokota', foundImage: H5, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-6', text: 'Ardennes', foundImage: H6, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-7', text: 'Dutch Warmblood', foundImage: H7, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-8', text: 'Turkoman', foundImage: H8, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-9', text: 'Hungarian Half-bred', foundImage: H9, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-10', text: 'Mustang', foundImage: H10, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-11', text: 'Thoroughbred', foundImage: H11, orientation: 'landscape' },
                { id: 'cigarette-card-set-11-card-12', text: 'Missouri Fox Trotter', foundImage: H12, orientation: 'landscape' },
            ],
        },
    },
    {
        ...collectible('cigarette-card-set-12', 'Prominent Americans', '', '', '', cigSet12),
        details: {
            region: '',
            objectives: [
                { id: 'cigarette-card-set-12-card-1', text: 'President Fisher', foundImage: PA1 },
                { id: 'cigarette-card-set-12-card-2', text: 'President Hardin', foundImage: PA2 },
                { id: 'cigarette-card-set-12-card-3', text: 'Lillian Powell', foundImage: PA3 },
                { id: 'cigarette-card-set-12-card-4', text: 'Leviticus Cornwall', foundImage: PA4 },
                { id: 'cigarette-card-set-12-card-5', text: 'JD McKnight', foundImage: PA5 },
                { id: 'cigarette-card-set-12-card-6', text: 'Luther Covington', foundImage: PA6 },
                { id: 'cigarette-card-set-12-card-7', text: 'Harvey Griggs', foundImage: PA7 },
                { id: 'cigarette-card-set-12-card-8', text: 'Henrietta Beatrice', foundImage: PA8 },
                { id: 'cigarette-card-set-12-card-9', text: 'General Quincy Harris', foundImage: PA9 },
                { id: 'cigarette-card-set-12-card-10', text: 'General Cornelius Palmer', foundImage: PA10 },
                { id: 'cigarette-card-set-12-card-11', text: 'Senator Thaddeus Waxman', foundImage: PA11 },
                { id: 'cigarette-card-set-12-card-12', text: 'President Alfred MacAlister', foundImage: PA12 },
            ],
        },
    },
]

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