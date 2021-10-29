import React, { useEffect, useState } from "react";
import { SearchComp } from "./search";
import { Partner } from "./partner";
//import { getAllPartners , getFilteredPartners } from "../API";
import { getFilteredPartners } from "../API";
import{IPartner } from '../types';

export const MainPage: React.FC = () => {
  //const [partners, setPartners] = useState<IPartner[]>([]);
  let [filteredPartners, setFilteredPartners] = useState<IPartner[]>([]);

  useEffect(() => {
    //fetchPartners();
  }, []);

/*   const fetchPartners = (): void => {
    getAllPartners()
      .then((response) => {
        const { data } = response;
        setPartners(data.final_partners);
      })
      .catch((err: Error) => console.log("error"));
  }; */

  const handleSearch = (
    e: React.FormEvent,
    distanceKm: string = '0'
  ): void => {
    e.preventDefault();
    getFilteredPartners(distanceKm)
      .then((response) => {
        const { data } = response;
        setFilteredPartners(data.final_partners);
      })
      .catch((err: Error) => console.log("error"));
  };

  function filterPartners() {
    const showPartners: boolean = filteredPartners.length > 0;
    if (showPartners) {
      return (
        <div className="result">
          <h4>Results Here</h4>
          <ol>
            {filteredPartners.map((partner: IPartner) => {
              return <Partner partner={partner} key={partner.id} />;
            })}
          </ol>
        </div>
      );
    }
  }
  return (
    <React.Fragment>
      <SearchComp searchAction={handleSearch} />
      {filterPartners()}
    </React.Fragment>
  );
};
