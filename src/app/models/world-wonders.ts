export interface WorldWonders {
    name: string,
    summary: string,
    location: string[],
    build_year: number,
    time_period: string,
    links: Links,
    categories: string[]
}

interface Links{
    wiki: string,
    britannica: string,
    google_maps: string,
    trip_advisor: string,
    images: string[]
}