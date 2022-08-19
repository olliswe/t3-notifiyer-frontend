export interface Tournament {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  tournamentDate: string;
  t3Id: string;
  signupDisabled: boolean;
  location: string;
  seats: string;
}
