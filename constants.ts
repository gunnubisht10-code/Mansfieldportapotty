
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
];

export const SERVICE_AREAS: ServiceArea[] = [
    { city: "Arlington", state: "TX", slug: "arlington" },
    { city: "Grand Prairie", state: "TX", slug: "grand-prairie" },
    { city: "Fort Worth", state: "TX", slug: "fort-worth" },
    { city: "Dallas", state: "TX", slug: "dallas" },
    { city: "Irving", state: "TX", slug: "irving" },
    { city: "Plano", state: "TX", slug: "plano" },
    { city: "Garland", state: "TX", slug: "garland" },
    { city: "McKinney", state: "TX", slug: "mckinney" },
    { city: "Frisco", state: "TX", slug: "frisco" },
    { city: "Denton", state: "TX", slug: "denton" },
    { city: "Richardson", state: "TX", slug: "richardson" },
    { city: "Carrollton", state: "TX", slug: "carrollton" },
    { city: "Mesquite", state: "TX", slug: "mesquite" },
    { city: "Pasadena", state: "TX", slug: "pasadena" },
    { city: "Killeen", state: "TX", slug: "killeen" },
];

export const LOCAL_ATTRACTIONS: LocalAttraction[] = [
    { name: "Hawaiian Falls Mansfield", slug: "hawaiian-falls-mansfield" },
    { name: "Elmer's Auto & Toy Museum", slug: "elmers-auto-and-toy-museum" },
    { name: "Mansfield Historical Museum", slug: "mansfield-historical-museum" },
    { name: "Farr Best Theater", slug: "farr-best-theater" },
    { name: "Oliver Nature Park", slug: "oliver-nature-park" }
];
