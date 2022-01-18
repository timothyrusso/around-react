class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._groupId = config.groupId;
        this._header = config.header;
    }

    _checkResponse(res) {
        if (res.ok) {
            console.log(
                `URL: ${res.url}
    Status: ${res.statusText}
    Status code: ${res.status}`);
            return res.json();
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }

    getProfileInfo() {
        return fetch(`${this._baseUrl}/${this._groupId}/users/me/`, {
            headers: this._header
        })
            .then(this._checkResponse)
    }
}