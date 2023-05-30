import { atom, selector } from "recoil";

export const CntAtoms = atom({
  key: "CntAtoms",
  default: 0,
});

export const CntAtomTwice = selector({
  key: "CntAtomTwice",
  get: ({ get }) => {
    return get(CntAtoms) * 2;
  },
});
