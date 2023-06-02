import GalleryItem from './GalleryItem/GalleryItem.jsx';


function GalleryList(props) {
    const galleryList = props.galleryList;
    const putLikes = props.putLikes;



    return(
             

             <div>
              {galleryList.map(item => (
                  <GalleryItem item={item}
                               putLikes={putLikes}
                               key={item.id} />
              ))}

             </div>
          );
        
        
}


export default GalleryList;
