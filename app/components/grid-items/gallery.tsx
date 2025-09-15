import React, { useEffect, useState } from "react";
import Card from "../card";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

export default function Gallery() {
  type Artwork = {
    primaryImageSmall?: string;
    title?: string;
    artistDisplayName?: string;
    objectDate?: string;
    objectWikidata_URL?: string;
    objectURL?: string;
  };

  //art work object id---------------------------------------------------
  const apiArr = [
    437430, 437790, 435876, 436532, 11040, 13344, 13171, 436535, 437879,
  ];
  //---------------------------------------------------------------------

  const ObjectID = apiArr[Math.floor(Math.random() * apiArr.length)];
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ObjectID}`,
        );
        setError(false);
        setArtwork(response.data);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request canceled", error.message);
          return;
        }
        setError(true);
      }
    })();
  }, []);

  if (error) {
    console.log("something went wront with MET API key");
  }

  if (isLoading) {
    return (
      <>
        <Card title="gallery">
          <div className="flex justify-center">
            <img
              src={"/loader.gif"}
              alt="loader"
              width={150}
              height={150}
            ></img>
          </div>
        </Card>
      </>
    );
  }

  return (
    <>
      <Card title="gallery">
        <div className="group bg- relative flex flex-col justify-end overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(27,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
          <Image
            // @ts-expect-error , artwork can be null 
            src={artwork?.primaryImageSmall}
            draggable={false}
            width={267}
            height={267}
            alt="image"
            className="mx-auto bg-[linear-gradient(0deg,transparent_24%,#003049_25%,#003049_26%,transparent_27%,transparent_24%,#003049_25%,#003049_26%,transparent_27%,transparent),linear-gradient(90deg,transparent_24%,#003049_25%,#003049_26%,transparent_27%,transparent_24%,#003049_25%,#003049_26%,transparent_27%,transparent)] [background-size:_20px_20px] max-sm:rounded-2xl"
          ></Image>
          <div className="absolute inset-0 m-2 flex flex-row-reverse text-neutral-500">
            {/* @ts-expect-error artwork can be null */}
            <Link href={artwork?.objectURL} target="blank">
              <IconExternalLink />
            </Link>
          </div>
          <div className="bg-card/50 absolute flex w-full flex-col items-stretch px-4 pt-1 pb-3 backdrop-blur-xs transition-transform group-hover:translate-y-0 sm:translate-y-200">
            <h2 className="font-h text-foreground mb-2 text-lg">
              {artwork?.title}
            </h2>
            <div className="flex flex-wrap items-end gap-1">
              <p className="font-p text-foreground border-foreground rounded-md border px-2 text-sm">
                {artwork?.artistDisplayName}
              </p>
              <p className="font-p text-foreground border-foreground rounded-md border px-2 text-sm">
                {artwork?.objectDate}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
