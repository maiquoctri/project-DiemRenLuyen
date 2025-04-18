import './styles.css';

import React from 'react';
function Home() {
  const DefaultUser = process.env.PUBLIC_URL + '/images/user/Default.jpg'; //
  return (
    <div className="min-h-screen  bg-gray-100 py-8 px-4">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden px-8">
        <div className="flex items-center p-6 border-b border-gray-200">
          <h2 className="2xl font-semibold text-purple-700 mb-4">
            Thông tin sinh viên
          </h2>
        </div>

        <div className="px-6 py-4">
          <img
            className="w-24 h-28 rounded object-cover border"
            src={DefaultUser}
            alt="Student Avatar"
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
            <div>
              <span className="font-semibold">MSSV:</span> 219530
            </div>
            <div>
              <span className="font-semibold">Lớp học:</span> DH21TIN06
            </div>
            <div>
              <span className="font-semibold">Họ tên:</span> Mai Quốc Trí
            </div>
            <div>
              <span className="font-semibold">Khóa học:</span> 2021
            </div>
            <div>
              <span className="font-semibold">Giới tính:</span> Nam
            </div>
            <div>
              <span className="font-semibold">Bậc đào tạo:</span> Đại học
            </div>
            <div>
              <span className="font-semibold">Ngày sinh:</span> 12/07/2003
            </div>
            <div>
              <span className="font-semibold">Loại hình đào tạo:</span> Chính
              quy 4
            </div>
            <div>
              <span className="font-semibold">Nơi sinh:</span> Cà Mau
            </div>
            <div>
              <span className="font-semibold">Ngành:</span> Công nghệ thông tin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
