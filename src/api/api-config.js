const api_url = 'http://localhost:4000/api';

export default function apiConfig(endpoint, params, method = 'GET', body) {
    return fetch(`${api_url}/${endpoint}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()
            .then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return json;
            }
            return json;
        }).then(
            response => response
        ).catch(e => e);
}
