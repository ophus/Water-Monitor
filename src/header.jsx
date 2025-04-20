import { Droplet } from 'lucide-react';
import React from 'react';

function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="header-content">
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