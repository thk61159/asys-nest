import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || '24689';
  await app.listen(port, () => console.log(`server is running on http://localhost:${port}`));
}
console.time('update')
bootstrap();
console.timeEnd('update')