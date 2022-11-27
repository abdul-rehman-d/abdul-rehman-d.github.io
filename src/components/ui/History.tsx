
type HistoryProps = {
  milestones: Milestone[],
}

const History = ({ milestones }: HistoryProps) => {
  return (
    <ul className="flex flex-col md:w-3/4">
      {milestones.length ?
        milestones.map((milestone : Milestone) => (
          <li>
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="bg-dark">
                <p className="text-xl">{milestone.title}</p>
                <p className="text-lg font-bold">{milestone.place}</p>
              </div>
              <div className="text-sm bg-dark">
                <p>{milestone.fromDate} -</p>
                <p>{milestone.toDate}</p>
              </div>
            </div>
            {milestone.description}
          </li>
        ))
        : null
      }
    </ul>
  )
}

export default History