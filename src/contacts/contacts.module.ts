import { HttpModule, Logger, Module } from '@nestjs/common'

import { ContactsController } from './contacts.controller'
import { ContactsService } from './contacts.service'

@Module({
  imports: [HttpModule],
  providers: [ContactsService, Logger],
  controllers: [ContactsController],
})
export class ContactsModule {}
