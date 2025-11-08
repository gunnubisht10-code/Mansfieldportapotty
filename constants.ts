import { Service, ServiceArea, LocalAttraction } from './types';

export const BUSINESS_INFO = {
  name: "Lawrence Rental Works",
  domain: "Mansfieldportapotty.com",
  phone: "(817) 214-6633",
  phoneHref: "tel:8172146633",
  email: "info@Mansfieldportapotty.com",
  address: {
    street: "1310 S Highway 287",
    city: "Mansfield",
    state: "TX",
    zip: "76063",
    full: "1310 S Highway 287, Mansfield, TX 76063"
  },
  industry: "Portable Toilet Supplier / Porta Potty Rental",
  hours: "24/7",
  gmbLink: "https://www.google.com/maps/search/?api=1&query=Lawrence+Rental+Works+1310+S+Highway+287+Mansfield+TX+76063",
  baseUrl: "https://mansfieldportapotty.com",
};

export const SERVICES: Service[] = [
  { name: "Portable Toilet Rental", slug: "portable-toilet-rental" },
  { name: "Porta John Rental", slug: "porta-john-rental" },
  { name: "Restroom Trailer Rental", slug: "restroom-trailer-rental" },
  { name: "Construction Site Portable Toilets", slug: "construction-site-portable-toilets" },
  { name: "Event Porta Potty Rental", slug: "event-porta-potty-rental" },
  { name: "Luxury Portable Restrooms", slug: "luxury-portable-restrooms" },
  { name: "Temporary Restroom Rental", slug: "temporary-restroom-rental" },
  { name: "Portable Sanitation Services", slug: "portable-sanitation-services" },
  { name: "Outdoor Event Toilet Rental", slug: "outdoor-event-toilet-rental" },
  { name: "Long-Term Porta Potty Rental", slug: "long-term-porta-potty-rental" },
  { name: "Short-Term Porta Potty Rental", slug: "short-term-porta-potty-rental" },
  { name: "ADA Accessible Porta Potty", slug: "ada-accessible-porta-potty" },
  { name: "Handwashing Stations", slug: "handwashing-stations" },
  { name: "Holding Tanks", slug: "holding-tanks" },
  { name: "High-Rise Porta Potty", slug: "high-rise-porta-potty" },
  { name: "Emergency Porta Potty Rental", slug: "emergency-porta-potty-rental" },
  { name: "Wedding Restroom Rental", slug: "wedding-restroom-rental" },
  { name: "Festival Porta Potty Rental", slug: "festival-porta-potty-rental" },
  { name: "Seasonal Porta Potty Rental", slug: "seasonal-porta-potty-rental" },
  { name: "Commercial Porta Potty Rental", slug: "commercial-porta-potty-rental" }
];

export const SERVICE_AREAS: ServiceArea[] = [
    { city: "Mansfield", state: "TX", slug: "mansfield-tx" },
    { city: "Arlington", state: "TX", slug: "arlington-tx" },
    { city: "Burleson", state: "TX", slug: "burleson-tx" },
    { city: "Grand Prairie", state: "TX", slug: "grand-prairie-tx" },
    { city: "Kennedale", state: "TX", slug: "kennedale-tx" },
    { city: "Crowley", state: "TX", slug: "crowley-tx" },
    { city: "Rendon", state: "TX", slug: "rendon-tx" },
    { city: "Forest Hill", state: "TX", slug: "forest-hill-tx" },
    { city: "Benbrook", state: "TX", slug: "benbrook-tx" },
    { city: "Cedar Hill", state: "TX", slug: "cedar-hill-tx" },
    { city: "Midlothian", state: "TX", slug: "midlothian-tx" },
    { city: "Lancaster", state: "TX", slug: "lancaster-tx" },
    { city: "Red Oak", state: "TX", slug: "red-oak-tx" },
    { city: "Venice", state: "TX", slug: "venice-tx" },
    { city: "Waxahachie", state: "TX", slug: "waxahachie-tx" }
];

export const LOCAL_ATTRACTIONS: LocalAttraction[] = [
    { name: "Hawaiian Falls Mansfield", slug: "hawaiian-falls-mansfield" },
    { name: "Elmer's Auto & Toy Museum", slug: "elmers-auto-and-toy-museum" },
    { name: "Mansfield Historical Museum", slug: "mansfield-historical-museum" },
    { name: "Farr Best Theater", slug: "farr-best-theater" },
    { name: "Oliver Nature Park", slug: "oliver-nature-park" }
];