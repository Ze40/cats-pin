export interface IPage {
  id: number;
  title: string;
  path: string;
}

export default [
  {
    id: 1,
    title: "Все котики",
    path: "/all-cats",
  },
  {
    id: 2,
    title: "Любимые котики",
    path: "/favorite",
  },
] as IPage[];
