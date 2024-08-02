export function convertToLatex(input: string): string {
  let latex = input
    // Adiciona espaços ao redor dos operadores para evitar problemas de formatação.
    .replace(/(\d+)\s*\+\s*(\d+)/g, '$1 + $2')
    .replace(/(\d+)\s*-\s*(\d+)/g, '$1 - $2')
    .replace(/(\d+)\s*\*\s*(\d+)/g, '$1 \\times $2')
    .replace(/(\d+)\s*\/\s*(\d+)/g, '\\frac{$1}{$2}')
    .replace(/(\d+)\s*\^\s*(\d+)/g, '$1^{ $2 }')
    .replace(/sqrt\((\d+)\)/g, '\\sqrt{$1}')
    .replace(/\(([^)]+)\)/g, '\\left( $1 \\right)')
    .replace(/\b(x|y|z)\b/g, '$1')
    .replace(/\b(pi|e)\b/g, '\\$1')
    .replace(/(\d+)\s*\bmod\b\s*(\d+)/g, '$1 \\mod $2')
    .replace(/(\d+)\s*\bcdot\b\s*(\d+)/g, '$1 \\cdot $2')

  // Remove espaços indesejados ao redor dos operadores e funções
  latex = latex
    .replace(/\s*\+\s*/g, ' + ')
    .replace(/\s*-\s*/g, ' - ')
    .replace(/\s*\\times\s*/g, ' \\times ')
    .replace(/\s*\\frac\s*/g, ' \\frac ')
    .replace(/\s*\^\s*/g, ' ^ ')
    .replace(/\s*\\sqrt\s*/g, ' \\sqrt ')
    .replace(/\s*\\left\s*/g, ' \\left ')
    .replace(/\s*\\right\s*/g, ' \\right ')
    .replace(/\s*\\mod\s*/g, ' \\mod ')
    .replace(/\s*\\cdot\s*/g, ' \\cdot ')

  // Remove a barra extra no início, se existir
  if (latex.startsWith('\\')) {
    latex = latex.substring(1)
  }

  return `$${latex}$`
}
