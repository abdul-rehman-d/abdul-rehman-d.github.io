import History from "@ui/History"

const workHistory: Milestone[] = [
  {
    title: 'Frontend Developer',
    place: 'Symits',
    fromDate: 'July 2022',
    toDate: 'Present',
    description: (
      <div>
        <h4 className="bg-dark">Reponsibilites:-</h4>
        <ul className="bg-dark list-disc pl-4">
          <li>Implement new features to the existing Product, Indolj.</li>
          <li>Work with State Management using Context API and Redux.</li>
          <li>Consume the ever-growing API to make the application more dynamic.</li>
          <li>Work with Third Party APIs such as Google Maps.</li>
          <li>Work on a PHP-based dashboard with jQuery.</li>
        </ul>
      </div>
    ),
  }
]

const WorkHistory = () => {
  return (
    <div className="flex flex-col gap-y-4 p-2">
      <h2 className="font-semibold text-3xl bg-dark w-fit">Work History</h2>
      <History milestones={workHistory} />
    </div>
  )
}

export default WorkHistory