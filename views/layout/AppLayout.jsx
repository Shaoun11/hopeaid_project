import React from 'react';
import { Toaster } from 'react-hot-toast';

const AppLayout = ({ children }) => {
    return (
        <>
            <Toaster position='top-center' />
            {children}
        </>
    );
};

export default AppLayout;