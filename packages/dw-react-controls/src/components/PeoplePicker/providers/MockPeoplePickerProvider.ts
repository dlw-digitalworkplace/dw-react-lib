import { IGroup } from "../models/IGroup";
import { IPeoplePickerFilterOptions } from "../models/IPeoplePickerFilterOptions";
import { IPeoplePickerProvider } from "../models/IPeoplePickerProvider";
import { IUser } from "../models/IUser";
import { MockGroups } from "./MockGroups";
import { MockUsers } from "./MockUsers";
export class MockPeoplePickerProvider implements IPeoplePickerProvider {

	private _mockData: (IUser | IGroup)[];

	constructor() {
		this._mockData = new Array<IUser | IGroup>();
		this._mockData.push(...MockGroups, ...MockUsers);
	}

	public findUserOrGroup(
		search: string,
		options: IPeoplePickerFilterOptions
	): (IUser | IGroup)[] | Promise<(IUser | IGroup)[]> {

		const data = this._mockData.filter(d => (
			d.displayName.toLowerCase().indexOf(search.toLowerCase()) > -1 &&
			!options.idsToIgnore.some(i => i === d.id)
		));
		return new Promise(resolve => setTimeout(() => resolve(data), 500))
	}
}
