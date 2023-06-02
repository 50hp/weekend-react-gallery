import GalleryItem from './GalleryItem/GalleryItem.jsx';


function GalleryList(props) {
    const galleryList = prop.galleryList;

        return(
            {gallerList.map(item => (
                <GalleryItem item={item} key={item.id} />
            ))}
            

        );


}


export default GalleryList;
