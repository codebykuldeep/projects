import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';
import { travelListItemType } from '../store/listState';


const travelListCollection = collection(db,'travellist');


export async function getTravelList() {
    try {
        const data = await getDocs(travelListCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        
        return (filteredData);
      } catch (err) {
        console.error(err);
      }
}


export const updateList = async (list:travelListItemType[]) => {
    try {
    //   await addDoc(travelListCollection, {
    //     ...list,
    //     id:auth.currentUser?.email
    //   });
    await setDoc(doc(db, "travellist",`${auth.currentUser?.email}` ), list);
    console.log('updated');
    
    
    } catch (err) {
      console.error(err);
    }
  };