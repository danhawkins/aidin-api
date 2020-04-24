import * as chalk from 'chalk'

import { HttpService, Injectable, Logger } from '@nestjs/common'

import { ContactDto } from './contact.dto'
import { Observable } from 'rxjs'

@Injectable()
export class ContactsService {
  private contacts: ContactDto[] = []

  constructor(private readonly logger: Logger, private readonly http: HttpService) {}

  async create(contact: ContactDto): Promise<ContactDto> {
    contact.id = new Date().getMilliseconds()
    this.contacts.push(contact)
    return contact
  }

  async update(contact: ContactDto): Promise<ContactDto | string> {
    if (!contact.id) {
      return 'No'
    }

    this.contacts = this.contacts.map(c => {
      if (c.id === contact.id) {
        return contact
      }
      return c
    })
  }

  async get(): Promise<ContactDto[]> {
    return this.contacts
  }

  async getQuiqupSettings(): Promise<any> {
    const data = await this.http.get('https://api-ae.quiqup.com/settings').toPromise()
    this.info(data)
    return data
  }

  private info(msg: any): void {
    this.logger.log(msg, 'ContactsService')
  }

  private error(msg: string): void {
    this.logger.log(chalk.red(msg), 'ContactsService')
  }
}
