// Barrel file
// Um arquivo que exporta todas as schemas

import { questions } from './questions.ts'
import { rooms } from './rooms.ts'

export const schema = {
  rooms,
  questions,
}
