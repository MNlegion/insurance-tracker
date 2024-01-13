import { useDispatch } from "react-redux";
import {deleteItem} from "../features/items/itemSlice";
import { FaTrash } from "react-icons/fa";

function UserItem({item}) {
  const dispatchEvent = useDispatch()
  
  return (
    <div className="item">
        <div>
            {new Date(item.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{item.text}</h2>
        <button onClick={() => dispatchEvent(deleteItem(item._id))} className="close">
        <FaTrash />
        </button>
    </div>
  )
}

export default UserItem