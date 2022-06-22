import { Booking } from '../booking';
import { IUser } from '../user';

export interface IRental {
  _id: string;
  title: string;
  city: string;
  street: string;
  category: string;
  images: string[];
  bedrooms: number;
  description: string;
  dailyRate: number;
  createdAt: Date;
  shared: boolean;
  bookings: Booking[];
  //user: IUser;
}
