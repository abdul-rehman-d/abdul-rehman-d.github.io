export {};

declare global {
  type Option = {
    value: string,
    label: string,
  }

  type Milestone = {
    title: string,
    place: string,
    fromDate: string,
    toDate: string,
    description: JSX.Element,
  }
}
