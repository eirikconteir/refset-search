export const clinicalTrialsUrl =
  "https://functions-hnf2-1-02.int-hn.nhn.no/api/v1/kliniskestudier";

export const episerverUrl = "http://localhost:51338/sokeside/snomed";

export const defaultBranch = "MAIN/SNOMEDCT-NO";

export const hosts = [
  "https://snowstorm.conteir.no",
  "https://snowstorm.rundberg.no",
  "https://test.terminologi.ehelse.no",
];

export const codeSystems = [
  {
    branch: "MAIN/ICPC-2",
    id: "450993002",
    title: "ICPC-2",
  },
  {
    branch: "MAIN",
    id: "447562003",
    title: "ICD-10",
  },
  {
    branch: "MAIN/MAP",
    id: "2041000202101",
    title: "ATC",
  },
];

export const referenceSets = [
  {
    id: "",
    title: "[Not specified]",
  },
  {
    id: "1991000202102",
    title: "Sykdommer",
  },
  {
    id: "2001000202104",
    title: "Symptomer/plager",
  },
  {
    id: "23921000202107",
    title: "Virkestoff",
  },
  {
    id: "12711000202103",
    title: "Modifikatorer",
  },
  {
    id: "23911000202104",
    title: "Mengdeangivelse",
  },
  {
    id: "12881000202101",
    title: "Legemidler",
  },
];

export const limit = "10";

export const languages = ["nb-NO", "nb", "nn", "no"];
