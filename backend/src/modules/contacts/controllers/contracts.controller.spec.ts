import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { ContactsService } from '../services/contacts.service';
import { CreateContactDto } from '../dto/create-contact.dto';

describe('Cats Controller', () => {
  let controller: ContactsController;
  let service: ContactsService;
  const createContactDto: CreateContactDto = {
    firstName: 'First Name #1',
    lastName: 'Last Name #1',
    phone: 'phone #1',
  };

  const mockContact = {
    firstName: 'First Name #1',
    lastName: 'Last Name #1',
    phone: 'Phone #1',
    _id: 'a id',
  };

  const mockContactsArray = [
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
    {
      firstName: 'First Name #3',
      lastName: 'Last Name #3',
      phone: 'Phone #3',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [
        {
          provide: ContactsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockContactsArray),
            create: jest.fn().mockResolvedValue(createContactDto),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
    service = module.get<ContactsService>(ContactsService);
  });

  describe('create()', () => {
    it('should create a new contact', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockContact);

      await controller.create(createContactDto);
      expect(createSpy).toHaveBeenCalledWith(createContactDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of contacts', async () => {
      expect(controller.findAll()).resolves.toEqual(mockContactsArray);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should return an array of contacts', async () => {
      await controller.remove(mockContact._id);
      expect(service.remove).toHaveBeenCalled();
    });
  });
});
