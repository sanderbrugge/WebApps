import { Video } from './model/video.model';
import { Tag } from './model/tag.model';
import { COMMENTS1 } from './mock-comments';
import { COMMENTS2 } from './mock-comments';

const TAGS: Tag[] = [
    new Tag("Funny"),
    new Tag("LoL"),
    new Tag("Cute")
]

export const VIDEOS: Video[] = [
  new Video(1,400,"Funny video",300,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/embed/SKxx8v8SxW8",TAGS, COMMENTS1),
  new Video(2,800,"Me at the Zoo",35,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/embed/-DIwqW4iUpQ",TAGS, COMMENTS2),
  new Video(3,200,"My cat",23,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=reJiwH5EyXY",TAGS),
  new Video(4,60,"Top 10 funny videos",23,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=O_adY_b-aLQ",TAGS),
  new Video(5,9000,"Funny video",2324,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=-DIwqW4iUpQ",TAGS),
  new Video(6,34,"i LOVE these <3",2,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=reJiwH5EyXY",TAGS),
  new Video(7,335,"Top 5 cat videos",234,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=O_adY_b-aLQ",TAGS),
  new Video(8,3435,"Funny video",244,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=-DIwqW4iUpQ",TAGS),
  new Video(9,834,"Funny video",244,"hahah i lol'd","../assets/images/thumbnail.png","https://www.youtube.com/watch?v=reJiwH5EyXY",TAGS)
]