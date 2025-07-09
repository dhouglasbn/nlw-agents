import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
// a execução 'node --experimental-strip-types' arranca todos os tipos
// na execução do server, então temos que sinalizar no import se
// se estamos importando um tipo com type Tipo { linha 7 }
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost/5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
  return 'OK'
})

app.listen({ port: env.PORT })
