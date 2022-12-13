const auth_url = 'https://accounts.spotify.com/authorize'
const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI; // Your redirect uri
const scopes = ['user-top-read', 'user-library-read'];

export const loginUrl = `${auth_url}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes.join('%20')}&show_dialog=true`;

//edit this later
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial

    }, {})
}