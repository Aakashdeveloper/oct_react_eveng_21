const base_url = "http://localhost:4590";

export function latestNews(){
    const output = fetch(`${base_url}/articles?_end=3`,{method: 'GET'})
    .then((data) => data.json())

    return{
        type:'LATEST_NEWS',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${base_url}/articles?_start=3&_end=10`,{method: 'GET'})
    .then((data) => data.json())

    return{
        type:'ARTICLE_NEWS',
        payload:output
    }
}