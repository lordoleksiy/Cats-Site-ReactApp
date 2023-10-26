export const fetchImages = async (limit:number, page:number) => {
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,
        {
            headers: {
                'x-api-key': 'live_NgYSeWphdBCxfbsW7Qu36PYRcMUBVrAYAbVEVyQjii6f1yKKqlobl4h28ZDCZAGd',
            },
        }
    );

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};