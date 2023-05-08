import History from "@ui/History"

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
      <h2 className="font-semibold text-3xl bg-dark w-fit">Education</h2>
      <History milestones={educationHistory} />
    </div>
  )
}

export default EducationHistory