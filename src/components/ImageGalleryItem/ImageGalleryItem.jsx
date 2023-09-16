import { StyledItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({src, dataSrc, onImageClick }) => {
    return (
        <StyledItem onClick={onImageClick}>
            <img 
              src={src} 
              data-src={dataSrc}
              alt="" />
       </StyledItem>
    );
};