
const educationHistory: Milestone[] = [
  {
    title: "Bachelor's of Science in Computer Science",
    place: 'Iqra University',
    fromDate: 'August 2022',
    toDate: 'Present',
    description: <></>
  },
  {
    title: 'A Level',
    place: 'The American Foundation School for A Level',
    fromDate: 'August 2017',
    toDate: 'June 2019',
    description: <></>
  },
  {
    title: 'O Level',
    place: 'Beacon Light Academy',
    fromDate: 'August 2015',
    toDate: 'June 2017',
    description: <></>
  },
]

const EducationHistory = () => {
  return (
    <div className="flex flex-col gap-y-4 p-2">
      <h2 className="font-semibold text-3xl bg-dark w-fit mx-auto">Education</h2>
      <ul className="flex flex-col gap-y-4">
        {educationHistory.length ?
          educationHistory.map((milestone : Milestone) => (
            <li>
              <div className="flex flex-row items-center">
                <div className="flex flex-col items-end self-stretch text-right text-sm pr-2 min-w-max">
                  <p className="bg-dark">{milestone.toDate}</p>
                  <span className="flex-grow block min-h-[2rem] bg-primary-400 w-1 mr-1" />
                  <p className="bg-dark">{milestone.fromDate}</p>
                </div>
                <div className="bg-dark">
                  <p className="text-xl">{milestone.title}</p>
                  <p className="text-lg font-bold mb-4">{milestone.place}</p>
                  {milestone.description}
                </div>
              </div>
            </li>
          ))
          : null
        }
      </ul>
    </div>
  )
}

export default EducationHistory