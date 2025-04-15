import { useState } from 'react';
import { Droplet, Activity, Settings, List, BarChart2, Power, Sliders } from 'lucide-react';
import './WaterMonitor.css';

export default function WaterMonitorWebsite() {
  // Updated devices with Vietnamese names and multiple sensors
  const [devices, setDevices] = useState([
    { 
      id: 1, 
      name: 'Trụ lọc 1', 
      location: 'Khu vực chính',
      mode: 'Manual', // 'Manual' or 'Automation'
      sensors: [
        { id: 11, type: 'pH', status: 'Online', value: '7.2' },
        { id: 12, type: 'TDS', status: 'Online', value: '320 ppm' },
        { id: 13, type: 'Turbidity', status: 'Online', value: '2.4 NTU' },
        { id: 14, type: 'Temperature', status: 'Online', value: '25.6°C' }
      ]
    },
    { 
      id: 2, 
      name: 'Trụ lọc 2', 
      location: 'Khu vực lọc',
      mode: 'Automation',
      sensors: [
        { id: 21, type: 'pH', status: 'Online', value: '6.8' },
        { id: 22, type: 'TDS', status: 'Online', value: '350 ppm' },
        { id: 23, type: 'Turbidity', status: 'Offline', value: '3.1 NTU' },
        { id: 24, type: 'Temperature', status: 'Online', value: '26.1°C' }
      ]
    },
    { 
      id: 3, 
      name: 'Trụ lọc 3', 
      location: 'Hệ thống đầu vào',
      mode: 'Manual',
      sensors: [
        { id: 31, type: 'pH', status: 'Online', value: '7.5' },
        { id: 32, type: 'TDS', status: 'Offline', value: '280 ppm' },
        { id: 33, type: 'Turbidity', status: 'Online', value: '1.8 NTU' },
        { id: 34, type: 'Temperature', status: 'Online', value: '24.8°C' }
      ]
    },
    { 
      id: 4, 
      name: 'Trụ lọc 4', 
      location: 'Khu vực xử lý',
      mode: 'Automation',
      sensors: [
        { id: 41, type: 'pH', status: 'Online', value: '7.1' },
        { id: 42, type: 'TDS', status: 'Online', value: '310 ppm' },
        { id: 43, type: 'Turbidity', status: 'Online', value: '2.2 NTU' },
        { id: 44, type: 'Temperature', status: 'Online', value: '25.3°C' }
      ]
    }
  ]);

  const [activeTab, setActiveTab] = useState('devices');
  const [expandedDevice, setExpandedDevice] = useState(null);

  // Toggle individual sensor status
  const toggleSensorStatus = (deviceId, sensorId) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        const updatedSensors = device.sensors.map(sensor => {
          if (sensor.id === sensorId) {
            return { ...sensor, status: sensor.status === 'Online' ? 'Offline' : 'Online' };
          }
          return sensor;
        });
        return { ...device, sensors: updatedSensors };
      }
      return device;
    }));
  };

  // Toggle device operation mode (Manual/Automation)
  const toggleDeviceMode = (deviceId) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        const newMode = device.mode === 'Manual' ? 'Automation' : 'Manual';
        return { ...device, mode: newMode };
      }
      return device;
    }));
  };

  // Toggle expanded view of a device
  const toggleDeviceExpand = (deviceId) => {
    if (expandedDevice === deviceId) {
      setExpandedDevice(null);
    } else {
      setExpandedDevice(deviceId);
    }
  };

  // Calibrate a device
  const calibrateDevice = (deviceId) => {
    alert(`Đang hiệu chuẩn Trụ lọc ${deviceId}. Vui lòng đợi...`);
  };

  return (
    <div className="app-container">
      {/* Header with gradient */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div>
              <h1 className="project-title">Hệ thống Giám sát Nước</h1>
              <p className="school-name">Trường Đại học Kỹ thuật</p>
            </div>
            <div className="header-project">
              <Droplet className="icon" />
              <span className="project-label">Dự án AquaTech</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="container">
          <ul className="nav-tabs">
            <li>
              <button 
                onClick={() => setActiveTab('devices')} 
                className={activeTab === 'devices' ? 'active' : ''}
              >
                <List className="icon-small" />
                Thiết bị
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('monitoring')} 
                className={activeTab === 'monitoring' ? 'active' : ''}
              >
                <Activity className="icon-small" />
                Giám sát
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('analytics')} 
                className={activeTab === 'analytics' ? 'active' : ''}
              >
                <BarChart2 className="icon-small" />
                Phân tích
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('settings')} 
                className={activeTab === 'settings' ? 'active' : ''}
              >
                <Settings className="icon-small" />
                Cài đặt
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {activeTab === 'devices' && (
            <div className="tab-content">
              <div className="tab-header">
                <h2 className="section-title">Danh sách Thiết bị</h2>
                <button className="button primary">Thêm Thiết bị</button>
              </div>
              
              <div className="device-list">
                {devices.map((device) => (
                  <div key={device.id} className="device-card">
                    <div className="device-header">
                      <div className="device-info">
                        <h3>{device.name}</h3>
                        <span className="device-location">{device.location}</span>
                      </div>
                      <div className="device-controls">
                        <div className="mode-toggle">
                          <span className={`mode-label ${device.mode.toLowerCase()}`}>
                            {device.mode === 'Manual' ? 'Thủ công' : 'Tự động'}
                          </span>
                          <button 
                            onClick={() => toggleDeviceMode(device.id)}
                            className="mode-button"
                          >
                            <Sliders size={16} />
                            Chuyển chế độ
                          </button>
                        </div>
                        <button 
                          onClick={() => toggleDeviceExpand(device.id)}
                          className="expand-button"
                        >
                          {expandedDevice === device.id ? 'Thu gọn' : 'Mở rộng'}
                        </button>
                      </div>
                    </div>

                    {expandedDevice === device.id && (
                      <div className="sensor-list">
                        <table className="sensor-table">
                          <thead>
                            <tr>
                              <th>Cảm biến</th>
                              <th>Giá trị</th>
                              <th>Trạng thái</th>
                              <th>Điều khiển</th>
                            </tr>
                          </thead>
                          <tbody>
                            {device.sensors.map((sensor) => (
                              <tr key={sensor.id}>
                                <td>{sensor.type}</td>
                                <td>{sensor.value}</td>
                                <td>
                                  <span className={`status-badge ${sensor.status.toLowerCase()}`}>
                                    {sensor.status === 'Online' ? 'Hoạt động' : 'Đã tắt'}
                                  </span>
                                </td>
                                <td>
                                  <button 
                                    onClick={() => toggleSensorStatus(device.id, sensor.id)}
                                    className={`power-button ${sensor.status === 'Online' ? 'on' : 'off'}`}
                                  >
                                    <Power size={16} />
                                    {sensor.status === 'Online' ? 'Tắt' : 'Bật'}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        
                        <div className="device-actions">
                          <button 
                            onClick={() => calibrateDevice(device.id)}
                            className="button secondary"
                          >
                            Hiệu chuẩn
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'monitoring' && (
            <div className="tab-content">
              <h2 className="section-title">Giám sát Thời gian thực</h2>
              <div className="monitoring-grid">
                <div className="monitoring-card">
                  <h3>Mức pH</h3>
                  <div className="chart-placeholder">Biểu đồ pH</div>
                  <div className="button-row">
                    <button className="button primary small">Cập nhật</button>
                    <button className="button secondary small">Xuất dữ liệu</button>
                  </div>
                </div>
                
                <div className="monitoring-card">
                  <h3>TDS</h3>
                  <div className="chart-placeholder">Biểu đồ TDS</div>
                  <div className="button-row">
                    <button className="button primary small">Cập nhật</button>
                    <button className="button secondary small">Xuất dữ liệu</button>
                  </div>
                </div>
                
                <div className="monitoring-card">
                  <h3>Độ đục</h3>
                  <div className="chart-placeholder">Biểu đồ độ đục</div>
                  <div className="button-row">
                    <button className="button primary small">Cập nhật</button>
                    <button className="button secondary small">Xuất dữ liệu</button>
                  </div>
                </div>

                <div className="monitoring-card">
                  <h3>Nhiệt độ</h3>
                  <div className="chart-placeholder">Biểu đồ nhiệt độ</div>
                  <div className="button-row">
                    <button className="button primary small">Cập nhật</button>
                    <button className="button secondary small">Xuất dữ liệu</button>
                  </div>
                </div>
              </div>
              
              <div className="control-section">
                <h3>Điều khiển hệ thống</h3>
                <div className="button-group">
                  <button className="button blue">Bật tất cả cảm biến</button>
                  <button className="button red">Tắt tất cả cảm biến</button>
                  <button className="button yellow">Hiệu chuẩn hệ thống</button>
                  <button className="button green">Tạo báo cáo</button>
                </div>
              </div>
            </div>
          )}
          
          {(activeTab === 'analytics' || activeTab === 'settings') && (
            <div className="tab-content">
              <h2 className="section-title">{activeTab === 'analytics' ? 'Bảng điều khiển Phân tích' : 'Cài đặt Hệ thống'}</h2>
              <div className="placeholder-content">
                Đây là nội dung tạm thời cho tab {activeTab === 'analytics' ? 'Phân tích' : 'Cài đặt'}. 
                Bạn có thể bổ sung các tính năng này khi cần thiết.
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
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
                <p>Giảng viên hướng dẫn: TS. Nguyễn Văn A</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Trường Đại học Kỹ thuật. Bản quyền đã được bảo hộ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}