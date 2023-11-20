import { Module } from '@nestjs/common';
import { ContactsController } from './controllers/contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './schema/contact.schema';
import { ContactsService } from './services/contacts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
