export { };

declare global {
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