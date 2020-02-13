import { Profile } from './profile';

export interface Post {

    id?: number;
    title?: string;
    content?: string;
    likes?: number;
    visibility?: boolean;
    category?: string;
    profile?: Profile;
    listOfComments?: string[];
    

}