export { };

declare global {

  type Passanger ={
    id: int;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    gender: string;
    ageGroup: string;
  };

  type Flight = {
    id: string;
    departure: string;
    arrival: string;
    itineraries: Itinerary[];
  };

  type Itinerary = {
    id: number;
    departureAt: Date;
    arrivalAt: Date;
    availableSeats: number;
    prices: Price[];
  };

  type Price = {
    id: number;
    currency: string;
    adultPrice: number;
    childPrice: number;
  };  
}