import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Dự án Giám sát Nước</h3>
                        <p>Hệ thống Giám sát Chất lượng Nước Tiên tiến</p>
                    </div>

                    <div className="footer-section">
                        <h4>Nhóm Dự án</h4>
                        <div className="team-info">
                            <p>Nhóm: AquaTech Solutions</p>
                            <p>MSSV: 2023001, 2023002, 2023003, 2023004</p>
                            <p>Giảng viên hướng dẫn: Th.S Ngô Thị Thu Hương</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} Trường Đại học Giao Thông Vận Tải - Phân Hiệu Tại TP. Hồ Chí Minh.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
