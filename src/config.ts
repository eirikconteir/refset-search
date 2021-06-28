export const clinicalTrialsUrl =
  "https://functions-hnf2-1-02.int-hn.nhn.no/api/v1/kliniskestudier";

export const episerverUrl = "http://localhost:51338/sokeside/snomed";

export const defaultBranch = 'MAIN/SNOMEDCT-NO/HELSEBIBLIOTEKET';

export const hosts = [
  "https://snowstorm.conteir.no"
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
/*  {
    branch: "MAIN/MAP",
    id: "2041000202101",
    title: "ATC",
  }, */
  {
    branch: "MAIN/SNOMEDCT-NO/HELSEBIBLIOTEKET",
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
    id: '23951000202100',
    title: 'Legemidler - 23951000202100',
  },
  {
    id: '23941000202103',
    title: 'Målgrupper - 23941000202103',
  },
  {
    id: '23971000202106',
    title: 'Saturday night fever (rusmidler) - 23971000202106',
  },
  {
    id: '23981000202108',
    title: 'Toxic beauty (planter) - 23981000202108',
  }
];

export const certainReferenceSets = [
  {
    id: "",
    title: "[Not specified]",
  },
  {
    id: '23951000202100',
    title: 'Legemidler - 23951000202100',
  },
  {
    id: '23971000202106',
    title: 'Saturday night fever (rusmidler) - 23971000202106',
  },
  {
    id: '23981000202108',
    title: 'Toxic beauty (planter) - 23981000202108',
  }
];

export const limit = "10";

export const languages = ["nb-NO", "nb", "nn", "no"];
