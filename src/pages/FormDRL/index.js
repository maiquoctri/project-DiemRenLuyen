import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';

import { useState } from 'react';

export default function FormDRL() {
  const [studentInfo, setStudentInfo] = useState({
    name: 'Mai Quốc Trí',
    studentId: '219530',
    className: 'DH21TIN06',
    schoolYear: '2024 – 2025',
  });

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-lg font-semibold mb-2 uppercase">
        BẢN TỰ ĐÁNH GIÁ KẾT QUẢ RÈN LUYỆN HỌC KỲ
      </h2>
      <div className="mb-4 text-sm">
        <p>
          <strong>Họ và tên:</strong> {studentInfo.name}
        </p>
        <p>
          <strong>MSSV:</strong> {studentInfo.studentId}
        </p>
        <p>
          <strong>Lớp:</strong> {studentInfo.className}
        </p>
        <p>
          <strong>Năm học:</strong> {studentInfo.schoolYear}
        </p>
      </div>

      <table className="w-full table-auto border border-gray-400 text-sm">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border px-2 py-1 w-1/2">Nội dung cần đánh giá</th>
            <th className="border px-2 py-1">HSSV tự đánh giá</th>
            <th className="border px-2 py-1">GVCN đánh giá</th>
            <th className="border px-2 py-1">Hội đồng đánh giá</th>
          </tr>
        </thead>
        <tbody>
          {/* Mục 1 */}
          <Section1 />

          {/* Mục 2 */}
          {/* <Section2 /> */}

          {/* <Section2 /> */}

          {/* Mục 3 */}
          {/* <Section3 /> */}

          {/* Mục 4 */}
          {/* <Section4 /> */}

          {/* Mục 5 */}
          {/* <Section5 /> */}
        </tbody>
      </table>

      <div className="mt-6 flex justify-end space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
          Lưu đánh giá
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 font-medium py-2 px-4 rounded">
          Huỷ bỏ
        </button>
      </div>
    </div>
  );
}
