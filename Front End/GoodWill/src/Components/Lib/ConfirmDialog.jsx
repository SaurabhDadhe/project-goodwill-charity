import { Button, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';


export function ConfirmDialog(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title style={{color:"#361db7" , fontSize:"22px" , fontWeight:"600", fontFamily:"sans-serif"} }>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{fontWeight:"500" , fontFamily:"sans-serif"}}>{props.message}</Modal.Body>
            <Modal.Footer>
                <Button style={{ padding:"5px 15px"}} onClick={props.onYes}>
                    Yes
                </Button>
                <Button  style={{ padding:"5px 15px" , backgroundColor:"white" , color:"black"}} onClick={props.onHide}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ConfirmDialog.propTypes = {
    // background: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
    onYes: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};