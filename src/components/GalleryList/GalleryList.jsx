import GalleryItem from './GalleryItem/GalleryItem.jsx';


function GalleryList(props) {
    const galleryList = props.galleryList;
    // console.log(galleryList, 'ping');
       


    return(
             

             <div>
              {galleryList.map(item => (
                  <GalleryItem item={item} 
                               key={item.id} />
              ))}

             </div>
          );
        
        
}


export default GalleryList;
