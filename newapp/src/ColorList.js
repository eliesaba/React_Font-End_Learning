import react from 'react'
import { CreateStar } from './App';
import { FaTrash } from 'react-icons/fa';

// export function ColorList({colors = [], onRemoveColor = f => f, onClickStarColor = f => f}) {
//     if(!colors.length) {
//         return <div>no Colors Listed</div>
//     }
//     else{
//         return(
//             <div>
//                 {
//                     colors.map(color => <Color Key={color.id} {...color} onRemove={onRemoveColor} 
//                                                                          AnotheronClickStar={onClickStarColor}/>)
//                 }
//             </div>
//         );
//     }
// }

// export function Color({id, title, color, rating, onRemove = f => f, AnotheronClickStar = f => f}) {
//     return(
        
//         <section>
//             <h1>{title}</h1>
//             <div style={{height: 50, backgroundColor: color}}/>
//             <button onClick={() => onRemove(id)}>
//                 <FaTrash/>
//             </button>
//             <CreateStar numberOfStars={rating} onClickStar={rating  => AnotheronClickStar(id,rating)}/>       
//         </section>
//     );
// }


