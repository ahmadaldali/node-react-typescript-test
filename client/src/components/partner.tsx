import React from "react";
import{IPartner, OfficeType, IPartnerProps } from '../types';

export const Partner: React.FC<IPartnerProps> = (props) => {
  const partner:IPartner = props.partner;
  const offices:OfficeType[] = partner.offices;
  return (
          <li>
            {partner.organization}
          <ol>
            {offices.map((office) => {
              console.log(office)
              return <li key={office.address}> { office.location + '/' +  office.address} </li>
            })}
          </ol>
        </li>
  );
};
