export default class UserEntity {
    avatar: string;
    name: string;
    login: string;
    location: string;
    id: number;
    followers: number;
    publicRepos: number;

    constructor() {
        this.avatar = '';
        this.name = '';
        this.login = '';
        this.location = '';
        this.id = 0;
        this.followers = 0;
        this.publicRepos = 0;
    }
}
