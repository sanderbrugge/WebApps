import { Tag } from './tag.model';
import { Comment } from '../model/comments.model';

//generated with typescript toolbox extension
/*init by command ng generate class video model; in terminal */
export class Video {
    private _id: number;
    private _views: number;
    private _title: string;
    private _likes: number;
    private _description: string;
    private _thumbnail: string;
    private _video: string;
    //init as seperate class just in case tag should hold more data than just a name, string would suffice for now
	private _tags: Tag[];
	private _comments: Comment[];

	constructor(id: number, views: number, title: string, likes: number, description: string, thumbnail: string, video: string, tags: Tag[], comments?: Comment[]) {
		this._id = id;
		this._views = views;
		this._title = title;
		this._likes = likes;
		this._description = description;
		this._thumbnail = thumbnail;
		this._video = video;
		this._tags = tags;
		this._comments = comments;
	}

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}
    

	public get views(): number {
		return this._views;
	}

	public set views(value: number) {
		this._views = value;
	}
    

	public get title(): string {
		return this._title;
	}

	public set title(value: string) {
		this._title = value;
	}
    

	public get likes(): number {
		return this._likes;
	}

	public set likes(value: number) {
		this._likes = value;
	}
    

	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}
    

	public get thumbnail(): string {
		return this._thumbnail;
	}

	public set thumbnail(value: string) {
		this._thumbnail = value;
	}
    

	public get video(): string {
		return this._video;
	}

	public set video(value: string) {
		this._video = value;
	}
    

	public get tags(): Tag[] {
		return this._tags;
	}

	public set tags(value: Tag[]) {
		this._tags = value;
	}

	public get comments(): Comment[] {
		return this._comments;
	}

	public set comments(value: Comment[]) {
		this._comments = value;
	}
	
	toJSON() {
        return {
			views: this._views,
			title: this._title,
			likes: this._likes,
			description: this._description,
			thumbnail: this._thumbnail,
			video: this._video,
			comments: this._comments,
			tags: this._tags
        };
    }
}
