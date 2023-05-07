
type HistoryProps = {
  milestones: Milestone[],
}

const History = ({ milestones }: HistoryProps) => {
  return (
    <ul className="flex flex-col gap-y-4">
      {milestones.length ?
        milestones.map((milestone : Milestone) => (
          <li>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-end self-stretch text-right text-sm pr-2 min-w-max">
                <p className="bg-dark">{milestone.fromDate}</p>
                <span className="flex-grow block min-h-[2rem] bg-primary-400 w-1 mr-1" />
                <p className="bg-dark">{milestone.toDate}</p>
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
  )
}

export default History