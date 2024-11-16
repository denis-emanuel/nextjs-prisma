"use server";

import { getLastPostByListingType } from "./actions/posts";
import {
  BackgroundVehicleAnimation,
  Contact,
  Item,
  Offers,
  Title,
} from "./components";

export default async function Home() {
  const lastForRent = await getLastPostByListingType("FOR_RENT");
  const lastForSale = await getLastPostByListingType("FOR_SALE");

  return (
    <div className="flex flex-col items-center px-2 md:px-10 pb-5 bg-diagonal-stripes bg-opacity-15">
      <Title />

      <div className="w-full flex flex-wrap justify-around items-center gap-y-5 md:gap-y-0">
        {lastForSale !== null && (
          <Item
            id={lastForSale.id}
            imageUrl={lastForSale.images[0]?.url}
            title={lastForSale.title}
            price={lastForSale.price}
            listingType="FOR_SALE"
            direction="left"
          />
        )}
        <Offers />
        <Contact />
        {lastForRent !== null && (
          <Item
            id={lastForRent.id}
            imageUrl={lastForRent.images[0]?.url}
            title={lastForRent.title}
            price={lastForRent.price}
            listingType="FOR_RENT"
            direction="right"
          />
        )}

        <BackgroundVehicleAnimation />
      </div>
    </div>
  );
}
