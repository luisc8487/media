import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {faker} from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "htpp://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: `/photos`,
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation({
        query: (album) => {
          return {
            url: `/photos/`,
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.abstract(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation({}),
    };
  },
});
