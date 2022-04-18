import React from 'react';
import LastProductInDb from './LastProductInDb';
import GenresInDb from './GenresInDb';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            
            <LastProductInDb />
            <LastUserInDb />
            <GenresInDb />
            

            
            

        </div>
    )
}

export default ContentRowCenter;