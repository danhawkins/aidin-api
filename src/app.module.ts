import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ContactsModule } from './contacts/contacts.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
