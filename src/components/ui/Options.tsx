
type OptionsProps = {
  options: string[],
}

const Options = ({ options }: OptionsProps) => {
  return (
    <>
    {(options && options.length) ?
      <div className="flex flex-row p-2 gap-x-4">
        {options.map((option : string, idx: number) => (
          <div key={`filter-option-${idx}`}>
            <input
              name='selected_filter'
              value={option}
              id={`filter-${option.toLowerCase()}`}
              className='hidden'
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
      : null
    }
    </>
  )
}

export default Options