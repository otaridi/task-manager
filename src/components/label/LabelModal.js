import React from "react";

const LabelModal = ({toggleModal}) => {
    return (
        <div>
            <h1>label modal</h1>
            <button onClick={toggleModal}>Cancel</button>
        </div>
    )
}

export default LabelModal