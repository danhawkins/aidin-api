import { Controller, Post, Body, Get, Logger } from '@nestjs/common'
import { ContactDto } from './contact.dto'
import { ContactsService } from './contacts.service'
import * as chalk from 'chalk'

@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactsService, private readonly logger: Logger) {}

  @Get()
  async contacts(): Promise<ContactDto[]> {
    this.info('GET')
    return this.service.get()
  }

  @Post()
  async createContact(@Body() contact: ContactDto): Promise<ContactDto> {
    this.info(`POST ${contact}`)
    return this.service.create(contact)
  }

  @Get('settings')
  async quiqupSettings(): Promise<any> {
    return this.service.getQuiqupSettings()
  }

  private info(msg: string): void {
    this.logger.log(msg, 'ContactsController')
  }

  private error(msg: string): void {
    this.logger.log(chalk.red(msg), 'ContactsController')
  }
}
