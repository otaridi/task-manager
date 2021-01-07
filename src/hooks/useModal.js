import {useState} from "react";
// toggle modal
export const useModal = ()=>{
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)
    return {showModal,toggleModal}
}

