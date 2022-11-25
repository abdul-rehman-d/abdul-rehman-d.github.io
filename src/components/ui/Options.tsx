import { ChangeEvent } from "react"

type OptionsProps = {
  options: string[],
}

const Options = ({ options }: OptionsProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
  }
  return (
    <>
    {(options && options.length) ?
      <div className="flex flex-row mt-4 p-2 gap-x-4 bg-dark w-fit options-container">
        {options.map((option : string, idx: number) => (
          <div key={`filter-option-${idx}`}>
            <input
              name='selected_filter'
              value={option}
              id={`filter-${option.toLowerCase()}`}
              className='hidden'
              onChange={onChange}
              type='radio'
            />
            <label htmlFor={`filter-${option.toLowerCase()}`}>
              {option}
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