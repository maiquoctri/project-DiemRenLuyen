import { renderSpecialRow } from './component.js';

function Section3() {
  return (
    <>
      <tr className="font-bold bg-gray-100">
        <td className="border px-2 py-1" colSpan="4">
          3. Ý thức và kết quả tham gia các hoạt động chính trị, xã hội, văn
          hóa, thể thao (≤ 20 điểm)
        </td>
      </tr>
      {/* {renderRow(
        '3.1 Tham gia đầy đủ các hoạt động do trường, khoa, lớp tổ chức (+10đ)',
        'checkbox',
      )}
      {renderRow(
        '3.2 Tham gia các hoạt động tình nguyện, hiến máu... (+5đ)',
        'checkbox',
      )}
      {renderRow(
        '3.3 Có thành tích khen thưởng khi tham gia hoạt động (+5đ)',
        'checkbox',
      )}
      {renderRow('3.4 Có thành tích khen thưởng khi tham gia hoạt động (+5đ)')}
      {renderSpecialRow(
        `3.5 Tham gia các hội thi: văn hoá, văn nghệ, thể dục, thể thao do trường tổ chức:`,
        [
          'Tham gia cổ vũ, hỗ trợ (+1đ/lần)',
          'Tham gia dự thi, là thành viên trong Ban tổ chức (+3đ/lần tổ chức)',
          'Tham gia đạt giải (Khuyến khích:+2đ, Ba:+3đ, Nhì:+4đ, Nhất:+5đ)',
        ],
        ['(Có minh chứng kèm theo)'],
        'Đăng ký mà không dự, không có lý do chính đáng (-5đ/lần)',
      )}
      {renderRow('3.6 Có thành tích khen thưởng khi tham gia hoạt động (+5đ)')}
      {renderRow('3.7 Có thành tích khen thưởng khi tham gia hoạt động (+5đ)')}
      {renderTotalRow(20)} */}
    </>
  );
}

export default Section3;
