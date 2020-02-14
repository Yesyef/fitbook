import { Profile } from './profile';

export interface Post {

    id?: number;
    title?: string;
    content?: string;
    date?: string;
    likes?: number;
    category?: string;
    profile?: Profile;
    listOfComments?: string[];
    

}