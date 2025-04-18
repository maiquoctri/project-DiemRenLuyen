import { useState } from 'react';

const RenderChecked = (sections, scoreMax) => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (id, value) => {
    const numericValue = parseFloat(value);
    setInputValues((prev) => ({
      ...prev,
      [id]: isNaN(numericValue) ? 0 : numericValue,
    }));
  };

  const total = Object.values(inputValues).reduce((sum, val) => sum + val, 0);

  return (
    <>
      {sections.map((section) => (
        <tr key={section.id}>
          <td className="border px-2 py-1">
            <div>
              {section.id} {section.dicr}
              {section.inputType === 'sectionbox' && `(+${section.score}đ)`}
            </div>
            <div className="pl-4 italic font-bold text-center">
              {section.note}
            </div>
          </td>

          {[1, 2, 3].map((col) => (
            <td key={col} className="border text-center">
              {section.inputType === 'number' ? (
                <input
                  type="text"
                  className="w-12 text-center border rounded"
                  placeholder="....đ"
                  onChange={(e) =>
                    handleInputChange(section.id, e.target.value)
                  }
                />
              ) : (
                <input type="checkbox" className="h-4 w-4" />
              )}
            </td>
          ))}
        </tr>
      ))}

      {/* Total row */}
      <tr>
        <td className="border px-2 py-1 font-bold text-center">
          Tổng (≤ {scoreMax} điểm)
        </td>
        {[1, 2, 3].map((col) => (
          <td key={col} className="border text-center">
            <input
              type="text"
              className="w-12 text-center border rounded font-bold"
              placeholder="=....đ"
              value={total}
              readOnly
            />
          </td>
        ))}
      </tr>
    </>
  );
};

const renderTotalRow = (scoreMax, total) => (
  <tr>
    <td className="border px-2 py-1 font-bold text-center">
      Tổng (≤ {scoreMax} điểm)
    </td>
    {[1, 2, 3].map((col) => (
      <td key={col} className="border text-center">
        <input
          type="text"
          className="w-12 text-center border rounded font-bold"
          placeholder="=....đ"
          value={total}
          readOnly
        />
      </td>
    ))}
  </tr>
);

export { renderTotalRow, RenderChecked };

// const RenderChecked = ({ sections = [] }) => {
//   const [checked, setchecked] = useState([]);
//   const [inputValues, setInputValues] = useState({});

//   const handleChecked = (id) => {
//     setchecked((prev) => {
//       const isChecked = prev.includes(id);
//       if (isChecked) {
//         // Xoá nếu bỏ chọn
//         return checked.filter((item) => item !== id);
//       } else {
//         // Thêm nếu chưa có
//         return [...prev, id];
//       }
//     });
//   };

//   const handleInputChange = (id, value) => {
//     const numericValue = parseFloat(value);
//     setInputValues((prev) => ({
//       ...prev,
//       [id]: isNaN(numericValue) ? 0 : numericValue,
//     }));
//   };

//   const total = Object.values(inputValues).reduce((sum, val) => sum + val, 0);

//   return sections.map((section) => (
//     <>
//       <tr key={section.id}>
//         <td className="border px-2 py-1">
//           <div>
//             {section.id} {section.dicr}
//             {section.inputType === 'sectionbox' && `(+${section.score}đ)`}
//           </div>
//           <div className="pl-4 italic font-bold text-center">
//             {section.note}
//           </div>
//         </td>

//         {[1, 2, 3].map((col) => (
//           <td key={col} className="border text-center">
//             {section.inputType === 'number' ? (
//               <input
//                 type="text"
//                 className="w-12 text-center border rounded"
//                 placeholder="....đ"
//                 onChange={(e) => handleInputChange(section.id, e.target.value)}
//               />
//             ) : (
//               <input
//                 type="number"
//                 className="h-4 w-4"
//                 onChange={() => handleChecked(section.id)}
//               />
//             )}
//           </td>
//         ))}
//       </tr>
//     </>
//   ));
// };
