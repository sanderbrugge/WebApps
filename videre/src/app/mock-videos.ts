import { Video } from './model/video.model';
import { Tag } from './model/tag.model';

const TAGS: Tag[] = [
    new Tag("Funny"),
    new Tag("LoL"),
    new Tag("Cute")
]

export const VIDEOS: Video[] = [
  new Video(1,400,"Funny video",300,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(2,800,"Me at the Zoo",35,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(3,200,"My cat",23,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(4,60,"Top 10 funny videos",23,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(5,9000,"Funny video",2324,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(6,34,"i LOVE these <3",2,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(7,335,"Top 5 cat videos",234,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(8,3435,"Funny video",244,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS),
  new Video(9,834,"Funny video",244,"hahah i lol'd","../assets/images/thumbnail.png","",TAGS)
]
