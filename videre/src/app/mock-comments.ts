import {Comment} from './model/comments.model'

const subComments: Comment[] = [
    new Comment(1,"Altair", "Indeed", new Date())
]

export const COMMENTS1: Comment[] = [
    new Comment(1,"sander brugge","Nice video!",new Date(),subComments),
    new Comment(2,"Ezio","Nice video!",new Date()),
    new Comment(3,"Daenerys Targareyen","Awesome, Nothing! great job on this video",new Date(),subComments)
]

export const COMMENTS2: Comment[] = [
    new Comment(4,"Jon Snow","I know nothing :(!",new Date()),
    new Comment(5,"Dyre Wolf","Awoooo, I guess!",new Date(),subComments),
    new Comment(6,"Bran Stark","I AM the three eyed raven! (repeat 10x and give creepy remarks to show off)",new Date())
]