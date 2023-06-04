import GalleryItem from './GalleryItem/GalleryItem.jsx';
import './GalleryList.css'


function GalleryList(props) {
    const galleryList = props.galleryList;
    const putLikes = props.putLikes;



    return(
             

             <div className="container">
              {galleryList.map(item => (
                  <GalleryItem item={item}
                               putLikes={putLikes}
                               key={item.id} />
              ))}

             </div>
          );
        
        
}


export default GalleryList;
