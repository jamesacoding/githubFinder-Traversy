class Github {
    constructor(){

        this.client_id = '33eafbbbabd1bb52f316';
        this.client_secret = '6a6a05e7d2f715cf72cdf7cade676af595925653'
    }

    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}