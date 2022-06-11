// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
// It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells.
// RNA differs slightly from DNA its chemical structure and contains no Thymine.
// In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

// For example:
// "GCAT"  =>  "GCAU"

function DNAtoRNA(DNA) {
  // Regex that takes all "T"-s and replaces them with .replace method into an "U"
  let RNA = DNA.replace(/[T]/g, "U");
  return RNA;
}

// Returns  "UUUU"
console.log(DNAtoRNA("TTTT"));

// Returns  "GCAU"
console.log(DNAtoRNA("GCAT"));

// Returns  "GACCGCCGCC"
console.log(DNAtoRNA("GACCGCCGCC"));
