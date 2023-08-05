export default class RepositoryEntity {
    name: string;
    fullName: string;
    language: string;
    description: string;
    createdAt: string;
    lastPush: string;

    constructor() {
        this.name = '';
        this.fullName = '';
        this.language = '';
        this.description = '';
        this.createdAt = '';
        this.lastPush = '';
    }
}
