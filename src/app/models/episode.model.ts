/**
 * Episode schema class
 */
export interface Episode {
    /**
     * The id of the episode.
     */
    id: number,
    /**
     * The name of the episode.
     */
    name: string,
    
    air_date: string, // The air date of the episode.
    episode: string, // The code of the episode.
    characters: Array<string>, // List of characters who have been seen in the episode. TODO:: Create this model.
    url: string // Link to the episode's own endpoint.
    created: string
}
