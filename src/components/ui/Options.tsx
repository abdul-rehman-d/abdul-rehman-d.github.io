
type OptionsProps = {
  options: Option[],
  selected: Option,
  setSelected: Function,
  name: string,
  vertical: boolean,
  pillShaped: boolean,
}

const Options = ({
    options,
    selected,
    setSelected,
    name,
    vertical,
    pillShaped,
  }: OptionsProps) => {
  return (
    <>
    {(options && options.length) ?
      <div className={
        "flex mt-4 p-2 w-fit options-container " +
        (vertical ? 'flex-col gap-y-4 items-center ' : 'flex-row gap-x-4 ') +
        (pillShaped ? 'rounded-2xl ' : '')
      }>
        {options.map((option : Option, idx: number) => (
          <div
            key={`filter-option-${idx}`}
            className={vertical ? 'w-full' : ''}
            >
            <input
              name={name}
              value={option.value}
              id={`filter-${option.value}`}
              className='hidden'
              onChange={() => setSelected(option)}
              type='radio'
              checked={option.value === selected.value}
            />
            <label htmlFor={`filter-${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      : null
    }
    </>
  )
}

export default Options