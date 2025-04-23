import { Droplet } from 'lucide-react';
import React from 'react';

import Logo from './assets/UTC2.png';
function Header(){
    return(
        <header className="header">
            <div className="header-container">
                <div className="header-content">
                <div className = "logo-container">
                    <img src = {Logo} alt = "Logo" className = "logo"></img>
                </div>
                <div>
                    <h1 className="project-title">Hệ thống Giám sát Nước</h1>
                    <p className="school-name">Trường Đại học Giao Thông Vận Tải - Phân Hiệu Tại TP. Hồ CHí Minh</p>
                </div>
                <div className="header-project">
                    <Droplet className="icon" />
                    <span className="project-label">Dự án AquaTech</span>
                </div>
                </div>
            </div>
        </header>
    );
    
}
export default Header;