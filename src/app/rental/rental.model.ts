// import { Booking } from '../booking';
// import { IUser } from '../user/user';

export interface IRental {
  id: string;
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
  //bookings: Booking[];
  //user: IUser;
}
