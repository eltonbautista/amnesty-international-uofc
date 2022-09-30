import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface blogPostFields {
  title: string;
  date: string;
  description: string;
  content: Document;
  slug: string;
  image: {
    fields: {
      file: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface memberFields {
  members?: any;
  name?: string;
  position?: string;
  generalInformation?: string;
  reasonForJoining?: string;
  hobbies?: string;
  profilePicture?: {
    fields: {
      file: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  imgAlt?: string;
  index?: number;
  colorOne?: string;
  colorTwo?: string;
}

export interface eventFields {
  title: string;
  date: string;
  description: string;
  image: {
    fields: {
      file: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  rsvp: boolean;
  place: string;
  link: string;
}


export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});