import React from 'react'
import { Modal, Box, Typography } from '@mui/material'
import Register from './Register';
import { useLocation } from 'react-router-dom';
import LoginForm from './loginForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: "none",
};

const AuthModal = ({handleClose, open}) => {
    const location = useLocation();

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === "/login" ? <LoginForm /> : <Register />}
                </Box>
            </Modal>
        </div>
    )
}

export default AuthModal