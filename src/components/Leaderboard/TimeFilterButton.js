export default function TimeFilterButton({ value, selectedTime, setSelectedTime }) {
  return (
    <span
      onClick={() => setSelectedTime(value)}
      className={`w-44 py-3 rounded-xl ${
        selectedTime === value
          ? 'bg-[#19303F] ring-[2px] ring-inset ring-sky-500'
          : 'bg-gray-600 hover:bg-[#19303F] hover:ring-[1px] hover:ring-inset hover:ring-sky-500'
      } text-white flex justify-center transition active:scale-95 cursor-pointer`}
    >
      {value}
    </span>
  );
}
