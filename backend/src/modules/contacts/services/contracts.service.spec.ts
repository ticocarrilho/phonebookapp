import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Contact } from '../schema/contact.schema';
import { ContactsService } from './contacts.service';

const mockContact = {
  name: 'Contact #1',
  phone: 'Phone #1',
};

describe('ContactsService', () => {
  let service: ContactsService;
  let model: Model<Contact>;

  const contactsArray = [
    {
      firstName: 'First Name #1',
      lastName: 'Last Name #1',
      phone: 'Phone #1',
    },
    {
      firstName: 'First Name #2',
      lastName: 'Last Name #2',
      phone: 'Phone #2',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        {
          provide: getModelToken('Contact'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockContact),
            constructor: jest.fn().mockResolvedValue(mockContact),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
    model = module.get<Model<Contact>>(getModelToken('Contact'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all contact', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(contactsArray),
    } as any);
    const contacts = await service.findAll();
    expect(contacts).toEqual(contactsArray);
  });

  it('should insert a new contact', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        firstName: 'First Name #1',
        lastName: 'Last Name #1',
        phone: 'Phone #1',
      } as any),
    );
    const newContact = await service.create({
      firstName: 'First Name #1',
      lastName: 'Last Name #1',
      phone: 'Phone #1',
    });
    expect(newContact).toEqual(mockContact);
  });
});
