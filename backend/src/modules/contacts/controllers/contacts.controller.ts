import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateContactDto } from '../dto/create-contact.dto';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../schema/contact.schema';
import { UpdateContactDto } from '../dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  public async findAll(): Promise<Contact[]> {
    return await this.contactService.findAll();
  }

  @Get(':lastName')
  public async findByLastName(
    @Param('lastName') lastName: string,
  ): Promise<Contact[]> {
    return await this.contactService.findByLastName(lastName);
  }

  @Post()
  public async create(
    @Body() createContactDto: CreateContactDto,
  ): Promise<Contact> {
    return await this.contactService.create(createContactDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<Contact> {
    return await this.contactService.remove(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() body: UpdateContactDto,
  ): Promise<Contact> {
    return await this.contactService.update(id, body);
  }
}
