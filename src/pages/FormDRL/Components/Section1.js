import { RenderChecked } from './component.js';
import { sections1 } from './arrayStoreSection.js';

function Section1() {
  return (
    <>
      <tr className="font-bold bg-gray-100">
        <td className="border px-2 py-1" colSpan="4">
          1. Ý thức và kết quả học tập (khung đánh giá không vượt quá 20 điểm)
        </td>
      </tr>
      {RenderChecked(sections1, 20)}
    </>
  );
}
export default Section1;
