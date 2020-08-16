import React, { useState, useEffect } from 'react'
import SweetAlert from 'sweetalert2-react'
import swal from 'sweetalert2';
import PropTypes from 'prop-types'

const Alert = props => {
    const [swt, setSwt] = useState();
    return (
        <div>
            <button onClick={() => setSwt(true)}>My sweet alert button</button>
            <SweetAlert
                show={swt}
                title="Demo"
                text="SweetAlert in React"
                confirmButtonText='Yes, delete it!'
                onConfirm={() => setSwt(false)}
            />
        </div>
    )
}

Alert.propTypes = {

}

export default Alert
