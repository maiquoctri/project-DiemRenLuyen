import { renderTotalRow } from './component.js';

function Section5() {
  return (
    <>
      <tr className="font-bold bg-gray-100">
        <td className="border px-2 py-1" colSpan="4">
          5. Ý thức và kết quả tham gia phụ trách lớp, đoàn thể, tổ nhóm (≤ 20
          điểm)
        </td>
      </tr>
      {/* {renderRow(
        '5.1 Là cán bộ lớp, đoàn thể hoàn thành tốt nhiệm vụ (+10đ)',
        'checkbox',
      )}
      {renderRow(
        '5.2 Là thành viên tổ nhóm hoàn thành tốt nhiệm vụ (+5đ)',
        'checkbox',
      )}
      {renderRow(
        '5.3 Có tinh thần trách nhiệm tham gia công việc chung... (+5đ)',
        'checkbox',
      )}
      {renderTotalRow(10)} */}
    </>
  );
}

export default Section5;
