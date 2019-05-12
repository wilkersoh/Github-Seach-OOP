class Github {
    constructor(){
        this.client_id = 'f71aaad33e3d7b2a4797';
        this.client_secret = 'cb327c18cd05c51a1a9138e896f9c733f95ab18a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        // documentary oAuth里
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }
    }
}