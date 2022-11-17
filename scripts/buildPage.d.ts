// this is here to show the structure of the data that is passed to the generateBuilds script
// it is not used by the script itself, purely for documentation purposes
//! PLEASE DON'T LET THIS GET OUT OF SYNC WITH THE ACTUAL DATA STRUCTURE
export interface Category {
  title: string;
  builds:   Build[];
  notes?:   string[];
}

export interface Build {
  title:           string;
  author:          string;
  range:           string;
  faction:         string;
  bloodline:       string;
  artifactSet:     string;
  researchBuilds?: ResearchBuild[];
  recommendation?: string;
  researches?:     string;
  requirements?:   string;
}

export interface ResearchBuild {
  researches?: string;
  notes?:      string[];
  when?:       string;
  what?:       string;
}
