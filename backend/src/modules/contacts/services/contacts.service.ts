import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from '../schema/contact.schema';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private readonly contactModel: Model<Contact>,
  ) {}

  create(createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactModel.create(createContactDto);
  }

  findAll(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }

  findByLastName(lastName): Promise<Contact[]> {
    return this.contactModel
      .find({ lastName: { $regex: lastName, $options: 'i' } })
      .exec();
  }

  remove(id: string): Promise<Contact> {
    return this.contactModel.findByIdAndDelete(id).exec();
  }

  update(id: string, body: UpdateContactDto): Promise<Contact> {
    return this.contactModel.findByIdAndUpdate(id, body, { new: true }).exec();
  }
}
