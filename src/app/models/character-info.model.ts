import { Character } from "./character.model";
import { Pagination } from "./pagination.model";

/**
 * Character schema class
 */
export interface CharacterInfo {
    info: Pagination,
    results: Array<Character>
}
