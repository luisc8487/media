import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
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
            url: `/photos`,
            method: "POST",
            body: {
              albumId: album.id,
              url: `https://picsum.photos/seed/${Math.random()}/150/150`,
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export {photosApi};
