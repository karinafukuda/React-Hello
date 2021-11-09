export default function CheckboxInput({
  labelDescription = 'Descrição do checkbox',
  inputValue = 'Valor input',
  onCheckboxChange = null,
  id = 'id_do_input_checkbox',
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <div className="flex flex-row my-4 items-center space-x-2">
      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />

      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  );
}
