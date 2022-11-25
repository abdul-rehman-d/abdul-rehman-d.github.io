import Options from "../ui/Options";

const ProjectSection = () => {
  const options = [
    'Featured',
    'Apps',
    'Web Apps',
    'Landing Pages',
  ]
  return (
    <section className="section-wrapper">
      <h1 className="section-heading">Projects</h1>
      <Options options={options} />
    </section>
  );
};

export default ProjectSection;
