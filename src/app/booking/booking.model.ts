import { IRental } from '../rental/rental.model';
import { IUser } from '../user/user';

export interface IBooking {
  id: any;
  name: string;
  roomNumber: number;
  startDate: Date;
  endDate: Date;
  //TODO Buchungen in div. Comp. überarbeiten. Serverschnittstelle/ model anpassen.
  // id: string;
  // startDate: Date;
  // endDate: Date;
  // totalCost: string;
  // createdAt: Date;
  // rental: IRental;
  // user: IUser;
}
