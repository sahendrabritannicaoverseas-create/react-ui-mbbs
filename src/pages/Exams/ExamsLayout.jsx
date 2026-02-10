import React from 'react';
import { Outlet } from 'react-router-dom';

const ExamsLayout = () => {
    return (
        <div className="exams-layout">
            <Outlet />
        </div>
    );
};

export default ExamsLayout;
