export default function TextInput({
  labelDescription = 'Descrição do label',
  inputValue = 'Valor input',
  onInputChange = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm text-gray-800 mb-1" htmlFor="inputName">
        {labelDescription}
      </label>

      <input
        autoFocus
        id="inputName"
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
