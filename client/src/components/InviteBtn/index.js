import {useState} from 'react'
import InviteModal from '../InviteModal'

const InviteBtn = () => {
    const [show, setShow]=useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <InviteModal show={show} handleClose={handleClose}/>
           <InviteBtn onClick={handleShow}/>
        </div>
    )
}

export default InviteBtn
