export default function request (method, url, body, _this) {
    console.log(_this);
    method = method.toUpperCase();
    if (method === 'GET'){
        body = undefined;
    }
    else{
        body = body && JSON.stringify(body);
    }

    return fetch(url, {
        method,
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Token': sessionStorage.getItem('access_token') || ''
        },
        body
    })
    .then((res)=>{
        if(res.status === 401){
            _this.props.history.push('/login');
            return Promise.reject('Unauthorized');
        }
        else{
            console.log("success" + method);
            const token = res.headers.get('access-token');
            if(token){
                sessionStorage.setItem('access-token', token);
            }
            return res.json();
        }
    });
}

export const get = (url, _this) => request('GET', url, null, _this);
export const post = (url, body, _this) => request('POST', url, body, _this);
export const put = (url, body, _this) => request('PUT', url, body, _this);
export const del = (url, body, _this) => request('DELETE', url, body, _this);