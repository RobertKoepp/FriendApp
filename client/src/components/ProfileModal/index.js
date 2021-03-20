import React, { useState }from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Filter from '../Filter'
import EditProfileForm from '../EditProfileForm';
function ProfileModal() {
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="secondary" onClick={handleShow} style={{position: 'relative',fontSize: 'x-large'}}>
                  Edit Profile
                </Button>
          
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit your Profile:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <EditProfileForm />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          
        export default ProfileModal;