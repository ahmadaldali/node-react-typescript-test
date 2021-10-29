export type OfficeType = {
    location: string
    address: string
    coordinates: string
}

export type PartnerType ={
    id: number
    urlName?: string
    organization: string
    customerLocations?: string
    willWorkRemotely?:boolean
    website?:string
    services?:string
    offices: OfficeType[]
}

export type LocationType = {
    lat: number
    lng: number
}

