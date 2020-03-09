import { Episode } from "./episode.model";

/**
 * Character schema class
 */
export interface Character {
    /**
     * The id of the character.
     */
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origi: object,
    location: object,
    image: string,
    episode: Array<Episode>, // List of episodes in which this character appeared. TODO:: create episode model.
    url: string,
    created: string
}
