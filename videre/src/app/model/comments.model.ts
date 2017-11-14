export class Comments {
    private _id: string;
    private _user: string;
    private _comment: string;
    private _subcomments: Comments[];


	constructor(id: string, user: string, comment: string, subcomments: Comments[]) {
		this._id = id;
		this._user = user;
		this._comment = comment;
		this._subcomments = subcomments;
	}
    

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get user(): string {
		return this._user;
	}

	public set user(value: string) {
		this._user = value;
	}

	public get comment(): string {
		return this._comment;
	}

	public set comment(value: string) {
		this._comment = value;
	}

	public get subcomments(): Comments[] {
		return this._subcomments;
	}

	public set subcomments(value: Comments[]) {
		this._subcomments = value;
	}
}
