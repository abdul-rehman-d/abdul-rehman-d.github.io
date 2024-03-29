
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
        "flex mt-4 p-2 w-fit gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 options-container flex-row flex-wrap " +
        (vertical ? 'md:flex-col md:items-center ' : '')
      }>
        {options.map((option : Option, idx: number) => (
          <div
            key={`filter-option-${idx}`}
            className={vertical ? 'md:w-full' : ''}
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
            <label
              htmlFor={`filter-${option.value}`}
              className={(pillShaped ? 'rounded-2xl': '' )}
            >
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