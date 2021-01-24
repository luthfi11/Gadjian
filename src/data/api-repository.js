class ApiRepository {

    static async getAllPersonnel() {
        return fetch('https://randomuser.me/api/?results=28')
        .then((res) => res.json())
        .catch(console.log)
    }
}

export default ApiRepository;