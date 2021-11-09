export default function DateInput({
  labelDescription = 'Descrição do label',
  inputValue = '2021-11-04', //datas no formato americano com hífen por padrão
  onInputChange = null,
  id = 'id_do_input_date',
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm text-gray-800 mb-1" htmlFor={id}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
