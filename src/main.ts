import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  
  const args = process.argv;
  const portIdx = args.findIndex((e) => e === '-p') + 1
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  const port = (portIdx && args[portIdx]) || config.get<string>('PORT') || 24688
  // const port =  24687
  console.log(config.get<string>('PORT'),args[portIdx])
  await app.listen(port, () => console.log(`server is rundddddddning on http://localhost:${port}`));
}
console.time('update')
bootstrap();
console.timeEnd('update')