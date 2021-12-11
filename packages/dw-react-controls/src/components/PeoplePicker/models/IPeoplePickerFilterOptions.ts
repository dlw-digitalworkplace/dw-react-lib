import { GroupType } from "./GroupType";
import { ObjectType } from "./ObjectType";

/**
 * Provide some options to extend filter functionality
 */
export interface IPeoplePickerFilterOptions {
	/**
	 * Indicate which objects to search for (users, groups or both)
	 */
	searchFor: ObjectType;
	/**
	 * Define which group types to search for (AAD, M365, SPO)
	 */
	groupTypes?: Array<GroupType>;
}
