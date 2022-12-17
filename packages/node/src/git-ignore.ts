import { appendFileSync, readFileSync, writeFileSync } from 'fs'
import { lookItUpSync } from 'look-it-up'
import outdent from 'outdent'
import type { PandaContext } from './context'

export function setupGitIgnore(ctx: PandaContext) {
  const txt = outdent`## CSS Panda
  ${ctx.outdir}
  ${ctx.outdir}-static
  `

  const file = lookItUpSync('.gitignore')

  if (!file) {
    return writeFileSync('.gitignore', txt)
  }

  const content = readFileSync(file, 'utf-8')

  if (!content.includes(ctx.outdir)) {
    appendFileSync(file, txt)
  }
}