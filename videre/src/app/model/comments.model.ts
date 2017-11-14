export class Comment {
    private _id: number;
    private _user: string;
    private _comment: string;
	private _subcomments: Comment[];
	private _date: Date;

//notating a param with "?" makes it optional
	constructor(id: number, user: string, comment: string, date: Date, subcomments?: Comment[]) {
		this._id = id;
		this._user = user;
		this._comment = comment;
		this._subcomments = subcomments;
		this._date = date;
	}
    
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
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

	public get subcomments(): Comment[] {
		return this._subcomments;
	}

	public set subcomments(value: Comment[]) {
		this._subcomments = value;
	}


	public get date(): Date {
		return this._date;
	}

	public set date(value: Date) {
		this._date = value;
	}

}
