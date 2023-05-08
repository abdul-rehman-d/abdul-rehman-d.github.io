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
          <li>Implemented UI for primary product, INDOLJ, using React.js.</li>
          <li>Ported entire web application to Server First Next.js, resulting in significant performance improvements.</li>
          <li>Optimized application performance through expertise in Redux.</li>
          <li>Leveraged third-party APIs like Google Maps to enhance product functionality.</li>
          <li>Utilized skills in consuming APIs to create a more dynamic application.</li>
          <li>Took ownership of updating the Point-of-Sale system.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Freelance Developer',
    place: 'Self Employed',
    fromDate: 'Jan 2022',
    toDate: 'July 2022',
    description: (
      <div>
        <h4 className="bg-dark">Details:-</h4>
        <ul className="bg-dark list-disc pl-4">
          <li>Worked on various projects involving different domains and programming languages, primarily focusing on Python.</li>
          <li>Gained understanding of computer science fields like Socket Programming, Database Design, and Desktop App Development.</li>
          <li>Developed strong project management skills, including setting timelines, meeting deadlines, and collaborating with clients effectively.</li>
        </ul>
      </div>
    ),
  },
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