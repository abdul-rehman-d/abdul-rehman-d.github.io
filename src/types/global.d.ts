export {};

declare global {
  type Option = {
    value: string,
    label: string,
  }

  interface Milestone {
    title: string,
    place: string,
    fromDate: string,
    toDate: string,
    description: JSX.Element,
  }
  
  interface Project {
    id: number,
    title: string,
    description: string,
    sourceCodeLink?: string,
    livePreviewLink?: string,
    technologies: string[],
    type: string[],
  }
}
