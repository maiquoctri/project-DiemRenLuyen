import { renderTotalRow } from './component.js';

function Section4() {
  return (
    <>
      <tr className="font-bold bg-gray-100">
        <td className="border px-2 py-1" colSpan="4">
          4. Ý thức công dân trong quan hệ cộng đồng (≤ 15 điểm)
        </td>
      </tr>
      {/* {renderRow(
        '4.1 Có ý thức giúp đỡ bạn bè, tinh thần đoàn kết... (+10đ)',
        'checkbox',
      )}
      {renderRow(
        '4.2 Có hành vi ứng xử, thái độ đúng mực, lễ phép với GV... (+5đ)',
        'checkbox',
      )}
      {renderTotalRow(25)} */}
    </>
  );
}

export default Section4;
