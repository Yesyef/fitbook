import { Post } from './post';


export interface Profile {

    id?: number;
    email?: string;
    username?: string;
    age?: number;
    gender?: string;
    country?: string;
    city?: string;
    sport?: string;
    personalDescription?: string;
    password?: string;
    listOfPosts?: Post[];

}