import React from 'react'
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import { ImageUpload } from '../Sort/Items/Input/items/File/ImageUploader'

const Comp404 = () => {
    return (
        <MainContentWrapper>
            <div>
                <ImageUpload/>
            </div >
            {/* <img  src="https://localhost:44383/Vieo/Image?filename=%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9.png"> 
            </img>*/}
            <div>
                Sorry. This part of websity is not found. 
            </div>
            
        </MainContentWrapper>
        
    )
}

export default Comp404
