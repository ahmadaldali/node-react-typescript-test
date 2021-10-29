import React, { useState } from 'react'

type Props = { 
  searchAction: (e: React.FormEvent, distanceKm: string | undefined) => void 
}

export const SearchComp: React.FC<Props> = ({ searchAction }) => {
  const [distanceKm, setFormData] = useState<string | undefined>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    if ( parseInt(e.currentTarget.value) > 0 ) {
      setFormData(parseFloat(e.currentTarget.value).toFixed(2));
      
    }else{
    e.currentTarget.value = ''  ;
    }
  }

  return (
    <div className="flexbox">
      <form className="search" onSubmit={(e) => searchAction(e, distanceKm)}>
        <h3>Click on search icon, then type the distance of the rang ...</h3>
        <div>

          <input onChange={handleForm}
          type="number" min="0" step=".01"
          placeholder="Range Distance in KM" required />

        </div>
      </form>
    </div>
  );
};
