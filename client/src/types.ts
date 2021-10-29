export type OfficeType = {
    location: string
    address: string
    coordinates: string
}

export interface IPartner {
    id: number
    urlName?: string
    organization: string
    customerLocations?: string
    willWorkRemotely?:boolean
    website?:string
    services?:string
    offices: OfficeType[]
}



export type IPartnerProps = {
    partner: IPartner
}


export type IPartnersProps = {
    partners: IPartner[]
}


export type ApiDataType = {
    statusText: string
    status: number
    final_partners: IPartner[]
  }
  