import { StyledGalery } from "./ImageGallery.styled";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({images, onImageClick}) => {
    return (
        <StyledGalery>
        {images.map(({id,webformatURL,largeImageURL}) => (
            <ImageGalleryItem
                key={id}
                src={webformatURL}
                dataSrc={largeImageURL}
                onImageClick={onImageClick}
            />
        ))}
        </StyledGalery>
    );
};

