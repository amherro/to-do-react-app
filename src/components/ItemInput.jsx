import Icon from '@mdi/react';
import { mdiPencilPlus } from '@mdi/js';

const ItemInput = () => {
  return (
    <div className="flex flex-row justify-center mt-20">
        <div className="form-control">
            <input type="text" placeholder="Add a task..." name="add-item" id="add-item" className="item-input input input-bordered text-white" />
        </div>
        <div className="btn btn-square ml-2">
            <Icon path={mdiPencilPlus} size={1} />
        </div>
    </div>
  )
}

export default ItemInput