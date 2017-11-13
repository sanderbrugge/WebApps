/*init by command ng generate class video model; in terminal */
export class Tag {
    //string is lower cased because it's the typescript string, instead of the js-variant
    private _name: string;

	constructor(name: string) {
        this._name = name;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}
}
