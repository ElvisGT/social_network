import Navbar from '../components/layout/Navbar';
import {Footer} from '../components/layout/Footer';
import React, { ReactElement } from 'react';

interface LayoutProps {
    children:React.JSXElementConstructor<ReactElement> | any
}

export const Layout = ({children}:LayoutProps) => {
    return (
        <>
          <Navbar />
            {children}
          <Footer />
        </>
    )
}
