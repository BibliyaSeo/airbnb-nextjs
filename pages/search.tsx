import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard, { InfoCardProps } from "../components/InfoCard";
// import InfoCard from "../components/InfoCard";

export default function Search({ searchResults }: any) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  let formattedStartDate;
  let formattedEndDate;
  let range;

  if (typeof startDate === "string" && typeof endDate === "string") {
    formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    range = `${formattedStartDate} - ${formattedEndDate}`;
  }

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div
            className="hidden lg:inline-flex mb-5 space-x-3 
            text-gray-800 whitespace-nowrap"
          >
            <p className="button">Cancellation Flexbillity</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          {searchResults.map((item: InfoCardProps, idx: number) => (
            <InfoCard
              key={`info_card_${idx}`}
              img={item.img}
              location={item.location}
              description={item.description}
              lat={item.lat}
              long={item.long}
              star={item.star}
              price={item.price}
              title={item.title}
              total={item.total}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res) => res.json());

  return {
    props: { searchResults },
  };
}
